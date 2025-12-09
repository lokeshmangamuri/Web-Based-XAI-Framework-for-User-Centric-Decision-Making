const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

//(sqlitee databse)
const db = new sqlite3.Database("./diagnosis.db");

db.run(`
  CREATE TABLE IF NOT EXISTS diagnoses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT,
    userEmail TEXT,
    studyId TEXT,
    caseId INTEGER,
    questionIndex INTEGER,
    imageId TEXT,
    groundTruth TEXT,
    diagnosis TEXT,
    aiRecommendation TEXT,
    timestamp TEXT
  )
`);

app.post("/submit", (req, res) => {
  const { userId, userEmail, studyId, responses } = req.body;

  if (!Array.isArray(responses)) {
    return res.status(400).json({ error: "Invalid 'responses' format" });
  }

  const stmt = db.prepare(`
    INSERT INTO diagnoses (
      userId, userEmail, studyId, caseId,
      questionIndex, imageId, groundTruth,
      diagnosis, aiRecommendation, timestamp
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  responses.forEach((entry, index) => {
    const timestamp = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      hour12: false
    });

    stmt.run(
      userId,
      userEmail || null,
      studyId,
      entry.caseId || index + 1, 
      entry.questionIndex ?? index + 1,
      entry.imageId || null,
      entry.groundTruth || null,
      entry.answer || null,
      entry.aiRecommendation || null,
      timestamp
    );
  });

  stmt.finalize((err) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true });
  });
});

// in order to viwe results
app.get("/results", (req, res) => {
  db.all("SELECT * FROM diagnoses ORDER BY userId, questionIndex", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get("/clear", (req, res) => {
  db.run("DELETE FROM diagnoses", (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "All data is cleared" });
  });
});

// exporting to excel
app.get("/export", (req, res) => {
  db.all("SELECT * FROM diagnoses ORDER BY userId, questionIndex", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Diagnoses");

    const filePath = path.join(__dirname, "diagnosis_results.xlsx");
    XLSX.writeFile(workbook, filePath);

    res.download(filePath, "diagnosis_results.xlsx", (err) => {
      if (err) {
        console.error("Download error:", err.message);
        res.status(500).send("Failed to download the file");
      } else {
        fs.unlinkSync(filePath);
      }
    });
  });
});

// server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

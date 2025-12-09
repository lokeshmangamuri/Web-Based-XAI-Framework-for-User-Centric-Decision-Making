# Web-Based-XAI-Framework-for-User-Centric-Decision-Making

We developed a hybrid explanation method for diagnosing Blockies by combining graph-based techniques with visual explanation methods. The system integrates direct AI predictions together with XAI explanations inside a hypothesis-driven decision-making workflow.

This explanation approach is fully implemented in an interactive web application that allows researchers to run user studies, collect responses, store data in a SQLite database and later download results for analysis.

Initial testing suggests that users achieve better diagnostic accuracy when supported by AI and XAI explanations. However, these results are preliminary, and larger studies are required to confirm the trend and ensure generalization across different participants.

Future improvements include enhancing LRP-based explanations, since users found SHAP visuals more intuitive, and expanding the web application with automated analysis tools and improved data-visualization features.

---

## How to Run the Web Application

Follow these steps to run the Blockies Diagnosis Web App on your computer.

### 1️ Make sure the following are installed:

- **Node.js** (Download from https://nodejs.org/)
- **npm** (comes with Node.js)

---

### 2️ Install Dependencies
Open Command Prompt inside the project folder and run:

```bash
npm install express cors body-parser sqlite3 xlsx
```

---

### 3️ Start the Backend Server

```bash
node server.js
```

If it starts correctly, you will see:

```
Server running at http://localhost:3000
```

---

### 4️ Open the Web Application

After the server starts, open this link in the browser or click on loginpage.html:

```
http://localhost:3000/loginpage.html
```

---

### 5️ Optional: Auto-Start on Windows(use batch file)

Double-click on the batch file( Opens the login page automatically):

```
start_blockies.bat
```

For that:
- Start the Node.js server    
- Use your **local project path**, which you must update

Inside the batch file, replace the default path with the **actual folder path on your computer**.  
After updating the path, **save the file and double-click it** .then the  login page will open automatically.

---

### 6️ You can manage stored data using these URLs  
(**Note:** The server **must** be running for these operations to work):

**View stored responses**
```
http://localhost:3000/results
```

**Clear all saved responses**
```
http://localhost:3000/clear
```

**export results(excel file will be downloading)**
```
http://localhost:3000/export
```

---

The Web Application is now ready to use!

---



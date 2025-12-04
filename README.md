# 🧠 Web-Based XAI Framework for User-Centric Decision-Making  
A full web application designed to study how humans make decisions *with* and *without* AI and Explainable AI (XAI).  
The system uses synthetic “Blocky” characters to simulate a medical diagnosis task for the fictional condition **OCDEgen**.  
This project evaluates user trust, accuracy, and decision-making behavior under different AI assistance levels.

---

## 🚀 Overview  
The framework provides **three diagnosis modes**, each representing a different level of AI support:

1. **Without AI** – User decides only from the image  
2. **With AI** – User also sees an AI recommendation  
3. **With XAI** – User receives full explainability support (SHAP, bending, spherical analysis, etc.)

Data from all decisions is stored automatically, allowing researchers to analyze how AI influences human judgment.

---

## 📂 Project Structure  


---

## 🛠️ Features  

### ✔ Fully Interactive Diagnosis Workflow  
- Sequential case navigation (Next/Previous)  
- Progress bar  
- Timer  
- Visual explanations (XAI mode)  

### ✔ Explainable AI Support  
The XAI mode displays four explainability outputs:
- SHAP bar plot  
- Arm position  
- Bone bending  
- Spherical shape / ill-spherical anomalies  

### ✔ Backend Connected  
Every answer is saved to **SQLite database** with:
- userId  
- email  
- study condition  
- caseId  
- question number  
- image ID  
- ground truth  
- user’s diagnosis  
- AI recommendation  
- timestamp  

### ✔ Admin/Developer Tools  
- **View all stored data:**  
  `http://localhost:3000/results`  
- **Clear the entire database:**  
  `http://localhost:3000/clear`  
- **Export an Excel report:**  
  `http://localhost:3000/export`

### ✔ Cross-Platform Support  
- Windows (with batch file)  
- macOS (manual run recommended)  
- Linux  

---

## ⚙️ Installation  

### **1. Clone the Repository**
```bash
git clone https://github.com/lokeshmangamuri/Web-Based-XAI-Framework-for-User-Centric-Decision-Making.git

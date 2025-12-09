# Web-Based-XAI-Framework-for-User-Centric-Decision-Making

We developed a hybrid explanation method for diagnosing Blockies by combining graph-based techniques with visual explanation methods. The system integrates direct AI predictions together with XAI explanations inside a hypothesis-driven decision-making workflow.

This explanation approach is fully implemented in an interactive web application that allows researchers to run user studies, collect responses, store data in a SQLite database and help to analyze how explanations are  affect human decisions.

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

### 6️ Managing stored data using these URLs  
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
## SHAP Individual and LRP Explanations

<table>
  <tr>
    <td align="center"><b>Sample Blockie</b><br>
      <img src="https://github.com/user-attachments/assets/a3ac310d-9a43-4fe4-b765-4a0870d8f7d5" width="300">
    </td>
    <td align="center"><b>SHAP Value</b><br>
      <img src="https://github.com/user-attachments/assets/187ca6c6-8f46-4601-9484-c165169f9506" width="300">
    </td>
  </tr>

  <tr>
    <td align="center"><b>Arm Position</b><br>
      <img src="https://github.com/user-attachments/assets/780b60e4-e0be-49bb-967c-fd706e0289b0" width="300">
    </td>
    <td align="center"><b>Ill Spherical</b><br>
      <img src="https://github.com/user-attachments/assets/02395f58-27c5-4305-a124-a3910cc12d9d" width="300">
    </td>
  </tr>

  <tr>
    <td align="center"><b>Bending</b><br>
      <img src="https://github.com/user-attachments/assets/8dd2d8b3-5fe8-41b5-9727-7a4ac7eade0c" width="300">
    </td>
    <td></td>
  </tr>
</table>

---
##   Web Interface

### Diagnosing Blockie without AI prediction
<img src="https://github.com/user-attachments/assets/c7964482-00ad-453e-bedd-07b35b00222d" width="900">

---

### Diagnosing Blockie with AI prediction
<img src="https://github.com/user-attachments/assets/cb59df91-d9eb-4a83-a929-5e860365e55e" width="900">

---

### Diagnosing Blockie with AI prediction  and XAI explanations
<img src="https://github.com/user-attachments/assets/8f2b56c7-b373-4e10-b5b4-d9d8885f41f2" width="900">


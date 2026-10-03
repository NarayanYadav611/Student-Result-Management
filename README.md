# Student Result Management System

A simple, fast, and interactive web application built with **HTML, CSS, and Vanilla JavaScript** to manage and display student results. 

## 🚀 Features

- **Add Student Data**: Easily input student details such as Name, Roll Number, and Email.
- **Marks Entry**: Enter marks for different subjects (HTML, CSS, JavaScript).
- **Automatic Calculations**: The system automatically calculates total marks, percentage, and determines Pass/Fail status (passing threshold is 40%).
- **Form Validation**: Ensures all inputs are properly filled and validates the email address and numeric marks bounds (0-100).
- **Local Storage Support**: Saves student data locally in the browser so it isn't lost on refresh.
- **Clean UI**: Beautiful and responsive design using Vanilla CSS.

## 🛠️ Technologies Used

- **HTML5**: For semantic structure.
- **CSS3**: For styling and layout (no external frameworks).
- **Vanilla JavaScript**: For logic, DOM manipulation, and validation.

## 🏃‍♂️ How to Run Locally

Since this project uses plain HTML, CSS, and JS, there's no complex build process! 

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Open the project folder.
3. Simply double-click on `index.html` to open it in your default web browser, or use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or `npx serve .` for a local development server.

## 📝 Usage
1. Fill in the student's name, roll number, and email.
2. Enter the marks obtained in HTML, CSS, and JavaScript out of 100.
3. Click on the **Submit Result** button.
4. The result summary will be displayed instantly below the form, indicating the total marks, percentage, and whether the student Passed or Failed.

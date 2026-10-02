document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const errorMsg = document.getElementById('errorMsg');
    const resultDiv = document.getElementById('result');
    
    // Reset state
    errorMsg.textContent = '';
    resultDiv.classList.add('hidden');

    // Get input values
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const email = document.getElementById('email').value.trim();
    const htmlMarks = parseFloat(document.getElementById('htmlMarks').value);
    const cssMarks = parseFloat(document.getElementById('cssMarks').value);
    const jsMarks = parseFloat(document.getElementById('jsMarks').value);

    // Validations
    if (!name || !roll || !email) {
        return errorMsg.textContent = 'Please fill out all required fields.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return errorMsg.textContent = 'Please enter a valid email address.';
    }

    if (isNaN(htmlMarks) || htmlMarks < 0 || htmlMarks > 100 ||
        isNaN(cssMarks) || cssMarks < 0 || cssMarks > 100 ||
        isNaN(jsMarks) || jsMarks < 0 || jsMarks > 100) {
        return errorMsg.textContent = 'Marks must be valid numbers between 0 and 100.';
    }

    // Calculations
    const total = htmlMarks + cssMarks + jsMarks;
    const percentage = +(total / 3).toFixed(2);
    const status = percentage >= 40 ? 'Pass' : 'Fail';

    // Create student object
    const student = {
        name,
        roll,
        email,
        marks: { html: htmlMarks, css: cssMarks, js: jsMarks },
        total,
        percentage,
        status
    };

    // Store in localStorage as JSON
    const jsonStudent = JSON.stringify(student);
    localStorage.setItem('studentData', jsonStudent);

    // Verify localStorage data can be parsed back
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
        JSON.parse(storedData); // Ensures JSON is valid
    }

    // Display Result
    document.getElementById('resName').textContent = student.name;
    document.getElementById('resRoll').textContent = student.roll;
    document.getElementById('resTotal').textContent = student.total;
    document.getElementById('resPercentage').textContent = student.percentage;
    
    const statusEl = document.getElementById('resStatus');
    statusEl.textContent = student.status;
    statusEl.className = student.status === 'Pass' ? 'pass' : 'fail';

    resultDiv.classList.remove('hidden');
});

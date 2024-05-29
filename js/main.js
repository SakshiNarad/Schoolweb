function showLoginForm(type) {
    if (type === 'admin') {
        document.getElementById('adminLoginForm').style.display = 'block';
    } else {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('loginFormContent').dataset.userType = type;
    }
}

function closeForm(id) {
    document.getElementById(id).style.display = 'none';
}

function loginAdmin() {
    var securityKey = document.getElementById('securityKey').value;
    if (securityKey === '0612') {
        alert('Login Successful');
        window.location.href = "admin.html";
    } else {
        alert('Invalid Security Key');
    }
}

function showRegistrationForm(userType) {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('registrationFormContent').dataset.userType = userType;
}

function registerUser() {
    var userType = document.getElementById('registrationFormContent').dataset.userType;
    alert('You have registered successfully');
    closeForm('registrationForm');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loginFormContent').dataset.userType = userType;
}

function loginUser() {
    var userType = document.getElementById('loginFormContent').dataset.userType;
    alert('You are logging in successfully');
    closeForm('loginForm');

    if (userType === 'student') {
        window.location.href = 'student.html';
    } else if (userType === 'staff') {
        window.location.href = 'staff.html';
    } else if (userType === 'parent') {
        window.location.href = 'parent.html';
    }
}

function zoomImage(img) {
    // Implement zoom image functionality if needed
}

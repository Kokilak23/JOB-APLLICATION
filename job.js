document.getElementById('employed').addEventListener('change', function () {
    document.querySelector('.employed-section').style.display = this.checked ? 'block' : 'none';
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

function validateForm() {
    let valid = true;


    document.querySelectorAll('.error').forEach(function(el) {
        el.innerText = '';
    });

    
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'First name is required.';
        valid = false;
    }

    
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Last name is required.';
        valid = false;
    }

    
    const email = document.getElementById('email').value.trim();
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
        valid = false;
    }

    
    const phone = document.getElementById('phone').value.trim();
    if (!validatePhone(phone)) {
        document.getElementById('phoneError').innerText = 'Please enter a valid 10-digit phone number.';
        valid = false;
    }

    

    ['address', 'city', 'state', 'zip', 'country', 'educationLevel', 'educationType', 'resume', 'jobSelect'].forEach(function(id) {
        const element = document.getElementById(id);
        if (element.value.trim() === '' || element.files && element.files.length === 0) {
            document.getElementById(id + 'Error').innerText = 'This field is required.';
            valid = false;
        }
    });

    if (valid) {
        alert('Form submitted successfully!');

    }
}
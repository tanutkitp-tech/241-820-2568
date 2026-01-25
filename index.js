function submitData() {
    let firstNameDOM = document.querySelectorAll('input[name="firstname"]');
    let lastNameDOM = document.querySelectorAll('input[name="lastname"]');
    let ageDOM = document.querySelectorAll('input[name="age"]');  
    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let interestDOMs = document.querySelectorAll('input[name="interest"]:checked');
    let descriptionDOM = document.querySelector('textarea[name="description"]');

    let interests = ''
    for (let i = 0; i < interestDOMs.length; i++) {
        interests += interestDOMs[i].value + ' ';
        if (i != interestDOMs.length -1){
            interests += ','
        }
    
}
    let userData = {
        firstName: firstNameDOM[0].value,
        lastName: lastNameDOM[0].value,
        age: ageDOM[0].value,
        gender: genderDOM ? genderDOM.value : "ไม่ได้ระบุ",
        description: descriptionDOM.value
    }

    console.log('submitted data:', userData);
}

let empForm; employeeId; fullName; extension; email; department;

const $ = (id) => document.getElementById(id);

empForm = $('empForm');
employeeId = $('employeeId');
fullName = $('fullName');
extension = $('extension');
email = $('email');
department = $('department');

window.addEventListener('load', init, false);

function init() {
    "use strict";
    empForm.addEventListener('submit', (event) => {
        event.preventDefault();
        employeeId = employeeId.value;
        fullName = fullName.value;
        extension = extension.value;
        email = email.value;
        department = department.value;
        
        console.log(`ID: ${employeeId}.\nName: ${fullName}.\nExtension: ${extension}.\nEmail: ${email}.\nDepartment: ${department}.`)
        })
}
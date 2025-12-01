class Person {
    #name;

    constructor(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

class Student extends Person{
    constructor(name, marks, course){

        // Calling parent class constructor
        super(name);

        // Setting own properties
        this.marks = marks;
        this.course = course;
    }

    getStatus(){
        return this.marks >= 40 ? "Pass" : "Fail";
    }
    getDetails(){
        return {
            name : this.getName(),
            course : this.course,
            marks : this.marks,
            status : this.getStatus()
        }
    }
}


// Single instance class
class StudentManager {
    constructor(){
        this.student = [];
    }
    add(student){
        this.student.push(student);
    }
    remove(index){
        this.student.splice(index, 1);
    }
    getAll(){
        return this.student;
    }
}

let manager = new StudentManager();

// UI Functionalities

function addStudent() {
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;

    if(!name || !marks){
        alert('Please fill all the details');
        return;
    }

    const student = new Student(name, marks, course);
    manager.add(student);
    renderTable();
    clearForm();
}

function deleteStudent(index){
    manager.remove(index);
    renderTable();
}

function renderTable(){
    const table = document.getElementById("studentTable");
    table.innerHTML = '';
    let allStudents = manager.getAll();
    allStudents.forEach((student, index) => {
        let details = student.getDetails();

        let eRow = `
            <tr>
            <td>${details.name}</td>
            <td>${details.course}</td>
            <td>${details.marks}</td>
            <td><span class = "badge ${details.status === "Pass" ? "pass" : "fail"}">${details.status}</span></td>
            <td><button class = "delete-btn" onclick = "deleteStudent(${index})">Delete</button></td>
        `;
        table.innerHTML += eRow;
    })
}
function clearForm(){
    document.getElementById("name").value = '';
    document.getElementById("marks").value = '';
}

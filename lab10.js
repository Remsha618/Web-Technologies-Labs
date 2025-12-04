let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const cgpa = parseFloat(document.getElementById("cgpa").value);

    if (!name || !roll || isNaN(cgpa)) {
        alert("Please fill all fields correctly!");
        return;
    }

    students.push({ name, roll, cgpa });
    displayStudents();
    clearInputs();
}

function displayStudents(filteredList = students) {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    let highestCGPA = Math.max(...students.map(s => s.cgpa));

    filteredList.forEach((student, index) => {
        let row = document.createElement("tr");

        if (student.cgpa === highestCGPA) {
            row.classList.add("highlight");
        }

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.cgpa}</td>
            <td>
                <button onclick="deleteStudent(${index})">Delete</button>
                <button onclick="updateStudent(${index})">Update</button>
            </td>
        `;
        table.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function updateStudent(index) {
    const newName = prompt("Enter new name:", students[index].name);
    const newRoll = prompt("Enter new roll number:", students[index].roll);
    const newCGPA = parseFloat(prompt("Enter new CGPA:", students[index].cgpa));

    if (newName && newRoll && !isNaN(newCGPA)) {
        students[index] = { name: newName, roll: newRoll, cgpa: newCGPA };
        displayStudents();
    }
}

function searchStudent() {
    const keyword = document.getElementById("search").value.toLowerCase();

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.roll.toLowerCase().includes(keyword)
    );

    displayStudents(filtered);
}

function sortCGPA() {
    students.sort((a, b) => b.cgpa - a.cgpa);
    displayStudents();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("cgpa").value = "";
}

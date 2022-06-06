//Create array that will receive a new array object
let studentList = []
//Get the values for the student name and student grade
let studentName = prompt("Type the name of the student you want to add to the list")
let studentGrade = prompt("Type the grade of the student you want to add to the list")
//Call the AddStudent() function
AddStudent(studentName, studentGrade)
console.log(studentList)
alert(studentList.toString())
//Create function to add a student to the list
//The function will create an array an add it to the student list
function AddStudent(student,grade) 
{
let newEntry = [[student, grade]]
studentList.push(newEntry)
return newEntry
}

// JavaScript Document

//List of Students
var student = [
	{ fName: 'Amy', lName: 'Gonzales', course: ["Data Mining", "Front End Eng", "Artifical Inteligence", "History", "Physics"], grades: ['B', 'C-', 'D', 'D', 'B'] },
	{ fName: 'Brett', lName: 'Gonzales', course: ["Front End Eng", "History", "Theatre", "Physics"], grades: ['C-', 'D', 'D', 'B'] },
	{ fName: 'Gio', lName: 'Gonzales', course: ["Data Mining", "Computer Communication", "Mobile Development", "History", "Ethics"], grades: ['A', 'C-', 'B+', 'C', 'A'] },
	{ fName: 'Enrique', lName: 'Mendoza', course: ["Data Mining", "Front End Eng", "Ethics", "Mobile Development", "Computer Communication"], grades: ['A+', 'A+', 'A+', 'A+', 'A+'] },
	{ fName: 'Tseng-Ching J.', lName: 'Shen', course: ["Data Mining", "Front End Eng", "Artifical Inteligence", "History", "Physics"], grades: ['A', 'A', 'A', 'A', 'A'] },
	{ fName: 'Amy', lName: 'Rodriguez', course: ["Data Mining", "Front End Eng", "Artifical Inteligence", "History", "Physics"], grades: ['B', 'C-', 'D', 'D', 'B'] },
	{ fName: 'Amy', lName: 'Shen', course: ["Data Mining", "Front End Eng", "Artifical Inteligence", "History", "Physics"], grades: ['B', 'C-', 'D', 'D', 'B'] },
];

//Displays student's found in result box
function findStudents()
{
	//Get user input from textfield
	var searchInput = document.getElementById('lName').value;
	searchInput = searchInput.toLowerCase();	//Convert string to lower case
	
	//Find <table id='student's_info'> element
	var table = document.getElementById("found");
	
	//Delete previous students, if any
	for (var j = table.rows.length; j > 0; j--)
		{
			table.deleteRow(0);
		}
	
	//Search for any matching last names
	for (var i = 0; i < student.length; i++)
		{
			var temp = student[i].lName.toLowerCase();
			//If last name matches, then print out first and last name
			if (temp === searchInput)
				{
					/*
					//Another way to add <p> - Reference
					document.getElementById('found').innerHTML = document.getElementById('found').innerHTML + student[i].fName + " " + student[i].lName + "<br><br>";
					*/
					
					//create an empty <tr>
					var row = table.insertRow(0);

					//Insert new cells <td>
					var cell1 = row.insertCell(0);
					
					//Create a new <p> element
					var newBtn = document.createElement("button");
					//Prepare Text for the new <p>
					var node = document.createTextNode(student[i].fName + " " + student[i].lName);
					//Append the text
					newBtn.appendChild(node);
					var num = i;
					newBtn.id = num;
					
					//Add a listener to button
					newBtn.addEventListener("click", getCourses);
					//newBtn.onclick = getCourses;
					
					//Append new result
					cell1.appendChild(newBtn);
				}
		}
}

//Displays a student's information in the info box
function getCourses()
{
	//Get index of student
	var i = Number(this.id);
	var replaceText = "Grades for " + student[i].fName + ' ' + student[i].lName + ':';

	document.getElementById('studentName').innerHTML = replaceText;
	
	//Find <table id='student's_info'> element
	var table = document.getElementById("student_info");
	
	//Delete previous student's info, if any
	for (var j = table.rows.length; j > 0; j--)
		{
			table.deleteRow(0);
		}
	
	//create an empty <tr>
	var row = table.insertRow(0);
	
	//Insert new cells <td>
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	
	cell1.innerHTML = "Course";
	cell2.innerHTML = "Grade";
	
	
	for (var j = 0; j < student[i].course.length; j++)
		{
			//create an empty <tr>
			var newRow = table.insertRow(j+1);

			//Insert new cells <td>
			var newCell1 = newRow.insertCell(0);
			var newCell2 = newRow.insertCell(1);
			
			newCell1.innerHTML = student[i].course[j];
			newCell2.innerHTML = student[i].grades[j];
		}
}

//Write a JavaScript program to delete the rollno property from the following
//object. Also print the object before or after deleting the property. (2mks)
//Sample object: var student = {name : &quot;David Rayy&quot;, sclass : &quot;VI&quot;, rollno :12 };

// Sample object
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

// Print the object before deleting the property
console.log("Before deleting the rollno property:", student);

// Delete the rollno property
delete student.rollno;

// Print the object after deleting the property
console.log("After deleting the rollno property:", student)
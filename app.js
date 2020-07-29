console.log("it worked");

'use strict';

// ********** Global Variables **********
Tutor.arrayOfTutors = [];
var tutorProperties = ['Name','Phone', 'Email', 'Subject', 'Level', 'Website', 'Description'];


// ********** Function Definitions **********

// definition of our Tutor Object Constructor
function Tutor (tutorName, tutorPhone, tutorEmail, tutorSubject, tutorLevel, tutorWebsite, tutorDesc) {
  this.tutorName = tutorName;
  this.tutorPhone = tutorPhone;
  this.tutorEmail = tutorEmail;
  this.tutorSubject = tutorSubject;
  this.tutorLevel = tutorLevel;
  this.tutorWebsite = tutorWebsite;
  this.tutorDesc = tutorDesc;

  // add this newly created Tutor object (tutor volunteer person) to our overall list of tutors which is stored as an array.  That array is a property of the Tutor Object Constructor
  Tutor.arrayOfTutors.push(this);
}

Tutor.prototype.renderTutorTable = function() {
  // table target must be updated in HTML and name match what is given here

  // step 1 Find Target
  var targetTable = document.getElementById('tableOfTutors');
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  var tutorsRow = document.createElement('tr');

  // step 2.5: put contents into newly created row element
  // 



};



// var tutorProperties = ['Name','Phone', 'Email', 'Subject', 'Level', 'Website', 'Description'];

Tutor.prototype.renderHeader = function() {
  // step 1 Find Target
  var targetTable = document.getElementById('tableOfTutors');
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  var tutorsRow = document.createElement('tr');

  // step 2.5: put contents into newly created row element
  // contents of a row, is the list of cells... in this case, we can use th
  // step 1 is already done, because the target will be the row

  // step 2 is to create the new element
  var headerCell = document.createElement('th');
  // step 2.5 is fill the new cell with content
  headerCell.textContent = tutorProperties[0];
  // step 3 append new cell to parent
  tutorsRow.appendChild(headerCell);

  // step 3 of creating the row, is to append the row to the table
  targetTable.appendChild(tutorsRow);

};

// Tutor.renderHeader();

var Steph = new Tutor('Steph', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');

Steph.renderHeader();

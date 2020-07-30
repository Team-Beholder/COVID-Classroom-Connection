'use strict';

// ============= Global Variables =============
Tutor.arrayOfTutors = [];
var tutorProperties = ['Name','Phone', 'Email', 'Subject', 'Level', 'Website', 'Description'];
var tutorProp = ['tutorName', 'tutorPhone', 'tutorEmail', 'tutorSubject', 'tutorLevel', 'tutorWebsite', 'tutorDesc'];

// ============= Function Definitions =============
// ============= Tutor Domain Definitions =============

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

Tutor.prototype.renderTutorInTheTable = function() {

  // step 1 Find Target
  var targetTable = document.getElementById('tableOfTutors');
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  for (var i = 0; i < Tutor.arrayOfTutors.length; i++) {
    var tutorsRow = document.createElement('tr');

    for (var j = 0; j < tutorProperties.length; j++) {
      var tutorCell = document.createElement('td');

      // step 2.5: put contents into newly created row element
      tutorCell.textContent = Tutor.arrayOfTutors[i][tutorProp[j]];
      tutorsRow.appendChild(tutorCell);
    }
    // step 3 of creating the row, is to append the row to the table
    targetTable.appendChild(tutorsRow);
  }
};

Tutor.prototype.renderHeader = function() {
  // step 1 Find Target
  var targetTable = document.getElementById('tableOfTutors');
  // clear the target in case something is already there
  targetTable.innerHTML = '';
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  var tutorsRow = document.createElement('tr');

  // step 2.5: put contents into newly created row element
  // contents of a row, is the list of cells... in this case, we can use th
  // step 1 is already done, because the target will be the row
  for (var i = 0; i < tutorProperties.length; i++) {
    // step 2 is to create the new element
    var headerCell = document.createElement('th');
    // step 2.5 is fill the new cell with content
    headerCell.textContent = tutorProperties[i];
    // step 3 append new cell to parent
    tutorsRow.appendChild(headerCell);
  }
  // step 3 of creating the row, is to append the row to the table
  targetTable.appendChild(tutorsRow);
};

// ********** Function Calls **********

var tutorsFromLS = localStorage.getItem('tutorListStorage');
var parsedTutors = JSON.parse(tutorsFromLS);

if (parsedTutors !== null){
  for (var i = 0; i < parsedTutors.length; i++) {
    new Tutor(parsedTutors[i].tutorName, parsedTutors[i].tutorPhone, parsedTutors[i].tutorEmail, parsedTutors[i].tutorSubject, parsedTutors[i].tutorLevel, parsedTutors[i].tutorWebsite, parsedTutors[i].tutorDesc);
  }

} else {
  new Tutor('Steph', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Tif', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Michael', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');
  new Tutor('Tif', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Michael', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');
  new Tutor('Steph', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Tif', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Michael', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');
  new Tutor('Tif', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Michael', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');

  // new Tutor(more tutors);

  setTutorLocalStorage();
}

function setTutorLocalStorage() {
  var stringifiedTutorArray = JSON.stringify(Tutor.arrayOfTutors);
  localStorage.setItem('tutorListStorage',stringifiedTutorArray);
}

console.log("it worked");

'use strict';

// ********** Global Variables **********
Tutor.arrayOfTutors = [];
var tutorProperties = ['Name','Phone', 'Email', 'Subject', 'Level', 'Website', 'Description'];
var tutorProp = ['tutorName', 'tutorPhone', 'tutorEmail', 'tutorSubject', 'tutorLevel', 'tutorWebsite', 'tutorDesc'];


// ********** Tutor Constructor Definitions **********

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

var Steph = new Tutor('Steph', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
var Tif = new Tutor('Tif', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
var Michael = new Tutor('Michael', '2065798587','email@any.com','math','high school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');

// new Tutor(more tutors);


// Steph.renderHeader();
// Steph.renderTutorTable();





// =============  Form Section  =============

var tutorForm = document.getElementById('tutor-registration-form');
tutorForm.addEventListener('submit',submitEventHandler);

function submitEventHandler(event) {
  event.preventDefault();

  console.log('made it to callback');

  var tutorName = event.target.tutorName.value;
  var tutorPhone = event.target.tutorPhone.value;
  var tutorEmail = event.target.tutorEmail.value;
  var tutorSubject = event.target.tutorSubject.value;
  var tutorLevel = event.target.tutorLevel.value;
  var tutorWebsite = event.target.tutorWebsite.value;
  var tutorDesc = event.target.tutorDesc.value;

  new Tutor(tutorName, tutorPhone, tutorEmail, tutorSubject, tutorLevel, tutorWebsite, tutorDesc);

  sayThankYou();
  setTutorLocalStorage(); // TODO: added a verb to function that was listed in GH Projects, announce/buy-in.
}

function sayThankYou() {
  var target = document.getElementById('confirmation-registration');
  target.textContent = 'Your registration information has been received.  Thank you for signing up to help today\'s youth successfully learn in this new and different environment.  You\'re help will be greatly appreciated!';
}

function setTutorLocalStorage() {
  var stringifiedTutorArray = JSON.stringify(Tutor.arrayOfTutors);
  localStorage.setItem('tutorListStorage',stringifiedTutorArray);
}

'use strict';

// ============= Global Variables =============
Tutor.arrayOfTutors = [];
var tutorProperties = ['Name','Phone', 'Email', 'Subject', 'Level', 'Website', 'Description'];
var tutorProp = ['tutorName', 'tutorPhone', 'tutorEmail', 'tutorSubject', 'tutorLevel', 'tutorWebsite', 'tutorDesc'];

// ============= Function Definitions =============
function Tutor (tutorName, tutorPhone, tutorEmail, tutorSubject, tutorLevel, tutorWebsite, tutorDesc) {
  this.tutorName = tutorName;
  this.tutorPhone = tutorPhone;
  this.tutorEmail = tutorEmail;
  this.tutorSubject = tutorSubject;
  this.tutorLevel = tutorLevel;
  this.tutorWebsite = tutorWebsite;
  this.tutorDesc = tutorDesc;
  Tutor.arrayOfTutors.push(this);
}

Tutor.prototype.renderTutorInTheTable = function () {

  var targetTable = document.getElementById('tableOfTutors');
  for (var i = 0; i < Tutor.arrayOfTutors.length; i++) {
    var tutorsRow = document.createElement('tr');
    for (var j = 0; j < tutorProperties.length; j++) {
      var tutorCell = document.createElement('td');
      if (j === 5) {
        var a = document.createElement('a');
        var link = document.createTextNode('Website');
        a.appendChild(link);
        a.title = 'Website';
        a.href = Tutor.arrayOfTutors[i][tutorProp[j]];
        tutorCell.appendChild(a);
      } else if (j === 2) {
        var emailLink = 'mailto:' + Tutor.arrayOfTutors[i][tutorProp[j]];
        var a = document.createElement('a');
        var link = document.createTextNode('email');
        a.appendChild(link);
        a.title = 'email';
        a.href = emailLink;
        tutorCell.appendChild(a);
      } else {
        tutorCell.textContent = Tutor.arrayOfTutors[i][tutorProp[j]];
      }
      tutorsRow.appendChild(tutorCell);
    }
    targetTable.appendChild(tutorsRow);
  }
};

Tutor.prototype.renderHeader = function() {

  var targetTable = document.getElementById('tableOfTutors');
  targetTable.innerHTML = '';
  var tutorsRow = document.createElement('tr');
  for (var i = 0; i < tutorProperties.length; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = tutorProperties[i];
    tutorsRow.appendChild(headerCell);
  }
  targetTable.appendChild(tutorsRow);
};

function setTutorLocalStorage() {
  var stringifiedTutorArray = JSON.stringify(Tutor.arrayOfTutors);
  localStorage.setItem('tutorListStorage',stringifiedTutorArray);
}

// ********** Function Calls **********

var tutorsFromLS = localStorage.getItem('tutorListStorage');
var parsedTutors = JSON.parse(tutorsFromLS);

if (parsedTutors !== null){
  for (var i = 0; i < parsedTutors.length; i++) {
    new Tutor(parsedTutors[i].tutorName, parsedTutors[i].tutorPhone, parsedTutors[i].tutorEmail, parsedTutors[i].tutorSubject, parsedTutors[i].tutorLevel, parsedTutors[i].tutorWebsite, parsedTutors[i].tutorDesc);
  }
} else {
  new Tutor('Steph', '555-579-8587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Tif', '555-596-1673','email@any.com','english','high school', 'www.google.com', 'I am more than happy to help.');
  new Tutor('Kirby', '555-839651','email@any.com','math','middle school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');
  new Tutor('Brandon', '555-5798587','email@any.com','reading','elementary', 'www.google.com', 'I like to tutor.');
  new Tutor('Philip', '555-5798587','email@any.com','geography','high school', 'www.google.com', 'I\'m a retired teacher:)');
  new Tutor('Diddy', '555-5798587','email@any.com','math','middle school', 'www.google.com', 'I am helpful!');
  new Tutor('Terra', '555-5798587','email@any.com','science','high school', 'www.google.com', 'I\m great at science projects!');
  new Tutor('Mario', '555-5798587','email@any.com','spelling','elementary', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');
  new Tutor('Drake', '555-5798587','email@any.com','math','high school', 'www.google.com', 'I am helpful!');
  new Tutor('Cloud', '555-5798587','email@any.com','reading','middle school', 'www.google.com', 'I am the most helpful of all and good at subjects for all grade levels!');

  setTutorLocalStorage();
}

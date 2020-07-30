'use strict';

// =============  Function Definitions  =============

function submitEventHandler(event) {
  event.preventDefault();

  var tutorName = event.target.tutorName.value;
  var tutorPhone = event.target.tutorPhone.value;
  var tutorEmail = event.target.tutorEmail.value;
  var tutorSubject = event.target.tutorSubject.value;
  var tutorLevel = event.target.tutorLevel.value;
  var tutorWebsite = event.target.tutorWebsite.value;
  var tutorDesc = event.target.tutorDesc.value;

  new Tutor(tutorName, tutorPhone, tutorEmail, tutorSubject, tutorLevel, tutorWebsite, tutorDesc);

  sayThankYou();
  setTutorLocalStorage();
}

function sayThankYou() {
  var target = document.getElementById('confirmation-registration');
  target.textContent = 'Thank you, ' + Tutor.arrayOfTutors[Tutor.arrayOfTutors.length - 1].tutorName + '! Your registration information has been received.  Thank you for signing up to help today\'s youth successfully learn in this new and different environment.  You\'re help will be greatly appreciated!';
}

// ================= Function Calls ===================
var tutorForm = document.getElementById('tutor-registration-form');
tutorForm.addEventListener('submit',submitEventHandler);

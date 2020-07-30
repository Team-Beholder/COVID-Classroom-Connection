'use strict';

// ================= Global Variables =================
Resource.arrayOfResources = [];
var resourceProperties = ['Resource Name', 'Description', 'Link'];
var resourceProp = ['resourceName', 'resourceDesc', 'resourceLink', 'resourceTopic'];
var resourcesToShow = '';

// ================= Function Definitions =================
// ================= Resource Domain Definitions =================

// definition of our Resource Object Constructor
function Resource (resourceName, resourceDesc, resourceLink, resourceTopic) {
  this.resourceName = resourceName;
  this.resourceDesc = resourceDesc;
  this.resourceLink = resourceLink;
  this.resourceTopic = resourceTopic;

  // add this newly created Resource object to our overall list of resources which is stored as an array.  That array is a property of the Resource Object Constructor
  Resource.arrayOfResources.push(this);
}

Resource.prototype.renderResourceInTheTable = function() {
  // step 1 Find Target
  var targetTable = document.getElementById('resourceDataTable');
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  for (var i = 0; i < Resource.arrayOfResources.length; i++) {
    if (Resource.arrayOfResources[i].resourceTopic === resourcesToShow) {  // change sorting string to be varible by eventhandler
      var resourceRow = document.createElement('tr');

      for (var j = 0; j < resourceProp.length-1; j++) {
        var resourceCell = document.createElement('td');

        // step 2.5: put contents into newly created row element
        resourceCell.textContent = Resource.arrayOfResources[i][resourceProp[j]];
        resourceRow.appendChild(resourceCell);
      }
      // step 3 of creating the row, is to append the row to the table
      targetTable.appendChild(resourceRow);
    }
  }
};

Resource.prototype.renderHeader = function() {
  // step 1 Find Target
  var targetTable = document.getElementById('resourceDataTable');
  // clear the target in case something is already there
  targetTable.innerHTML = '';
  // step 2 Create New Element (and also Step 1 of target for each table cell)
  var resourceRow = document.createElement('tr');

  // step 2.5: put contents into newly created row element
  // contents of a row, is the list of cells... in this case, we can use th
  // step 1 is already done, because the target will be the row
  for (var i = 0; i < resourceProperties.length; i++) {
    // step 2 is to create the new element
    var headerCell = document.createElement('th');
    // step 2.5 is fill the new cell with content
    headerCell.textContent = resourceProperties[i];
    // step 3 append new cell to parent
    resourceRow.appendChild(headerCell);
  }
  // step 3 of creating the row, is to append the row to the table
  targetTable.appendChild(resourceRow);
};

function handleClickOnPic(event) {
  switch (event.target.id) {

    case 'suppliesImg':
      resourcesToShow = 'supplies';
      break;
    
    case 'classroomImg':
      resourcesToShow = 'classroom';
      break;

    case 'activitiesImg':
      resourcesToShow = 'activities';
      break;
  }

  if (Resource.arrayOfResources.length > 0 && resourcesToShow !== '') {
    Resource.arrayOfResources[0].renderHeader();
    Resource.arrayOfResources[0].renderResourceInTheTable();
  }
};

// ====================== Function Calls ========================
// ================= Resouce Object Instantiation ==============

new Resource ('Kids In Need Foundation','The Kids In Need Foundation’s mission is to ensure that every child is prepared to learn and succeed in the classroom by providing free school supplies nationally to students most in need.','<a href="https://www.kinf.org/">Link</a>','supplies');
new Resource ('Share the Warmth','Hosts an ansdfsarents to purchase school supplies for their children at a nominal cost.','<a href="https://sharethewarmth.ca/what-we-do/school-supplies/">Link</a>','supplies');
new Resource ('Discount School Supply','Their focus is the highest quality products at the lowest possible prices, supported by an extraordinary level of service.','<a href="https://www.discountschoolsupply.com/">Link</a>','supplies');
new Resource ('Staples','Retail office supply store.','<a href="https://www.staples.com/deals/School-Supplies/BI783896">Link</a>','supplies');
new Resource ('Target','Retail store.','<a href="https://www.target.com/c/school-office-supplies/-/N-5xsxr">Link</a>','supplies');

new Resource ('Discunt School Supply','Home schoolroom furniture and supplies','<a href="https://www.discountschoolsupply.com/all-categories/school-supplies/teacher-supplies/hybrid-learning/c/offer_pphl0720">Link</a>','classroom');
new Resource ('Pintrest Ideas','Ideas for setting up your child\'s working area','<a href="https://www.pinterest.com/teachers/homeschool/">Link</a>','classroom');
new Resource ('Khan Academy','Free online educational resource targeting numerous educational subjects','<a href="https://www.khanacademy.org/">Link</a>','classroom');

// =================== Event Listener Domain =====================
var resourcePicLinks = document.getElementById('resourceLinks');
resourcePicLinks.addEventListener('click', handleClickOnPic);

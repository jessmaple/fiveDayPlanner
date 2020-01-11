// 1. Create an app that has time slots from 9AM to 5PM
// 2. App should contain time slots, time slots should contain:
// - Time
// - A field to hold user Input
// - A save button

// 3. Save button should store time and user input in localStorage
// 4. App should display current day

var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

//https://devhints.io/moment

var currentDate = moment().format("dddd, MMMM Do YYYY");
$(".showDate").html(currentDate);

function showPlanner() {
    
  var row = $("<div class = 'row'>");
  var columnOne = $("<div class = 'col-sm-2'>");
  columnOne.html(workHours[0] + "AM");

  var columnTwo = $("<div class = 'col-sm-8'>");
  columnTwo.html("<textarea style='width:100%'>");

  var columnThree = $("<div class = 'col-sm-2'  >");
  columnThree.html("<button class='btn btn-primary'> save");

  row.append(columnOne, columnTwo, columnThree);

  $("#displayPlanner").append(row);
  
}

showPlanner();

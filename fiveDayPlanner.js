//1. Create time slots from 9AM to 9PM in divs (columns should have time, field for user Input, and save button)
//2. Create columns using bootstrap rows
//3. Add click listener to "save" button
//4. Use array to store time and user input in localStorage
//5. Select text box to obtain


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

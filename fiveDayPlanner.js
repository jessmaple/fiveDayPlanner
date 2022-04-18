//1. Create time slots from 9AM to 9PM in divs (columns should have time, field for user Input, and save button)
//2. Create columns using bootstrap rows
//3. Add click listener to "save" button
//4. Use array to store time and user input in localStorage
//5. Select text box to obtain

var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//https://devhints.io/moment

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();
$(".showDate").html(currentDate);

function showPlanner() {
  for (let index = 0; index < workHours.length; index++) {
    var getTextAreaInput = localStorage.getItem("textArea" + index);

    var row = $("<div class = 'row'>");
    var columnOne = $("<div class = 'col-sm-2 text-right'>");

    var midDay = " AM";
    if (workHours[index] >= 12) {
      midDay = " PM";
    }

    var standardHour = workHours[index];
    if (standardHour >= 13) {
      standardHour = standardHour - 12;
    }

    columnOne.html(standardHour + midDay);

    var columnTwo = $("<div class = 'col-sm-8'>");

    var textArea = $("<textarea style='width:100%' >");
    textArea.attr("id", "textArea" + index);
    //* current hour is red, past hour is grey, future hour is green
    var color = "bg-danger";

    if (workHours[index] > currentHour) {
      color = "bg-success";
    }
    if (workHours[index] < currentHour) {
      color = "bg-secondary";
    }

    textArea.attr("class", color);
    textArea.val(getTextAreaInput);
    columnTwo.append(textArea);

    var columnThree = $("<div class = 'col-sm-2'  >");
    var btn = $("<button class='btn btn-primary save'> ");
    btn.text("save");
    columnThree.append(btn);

    row.append(columnOne, columnTwo, columnThree);

    $("#displayPlanner").append(row);
  }
}

showPlanner();

$(".save").on("click", function() {
  for (let index = 0; index < workHours.length; index++) {
    var textAreaInput = $("#textArea" + index).val();
    localStorage.setItem("textArea" + index, textAreaInput);
  }
});

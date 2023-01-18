// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let time = dayjs().format('H');
  let currentDay = dayjs().format('dddd, MMMM DD, YYYY')
  $('#today-is').text(currentDay);

  let timeBox = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
  for (let i = 0; i < timeBox.length; i++) {
    $(`#${timeBox[i]}`).children('textarea')[0].value = localStorage.getItem(timeBox[i]);

    if (time == timeBox) {
      console.log('hello present');
      $('textarea').removeClass('future').removeClass('past').addClass('present');
    } else if (time < timeBox) {
      console.log('hello past');
      $('textarea').removeClass('present').removeClass('future').addClass('past');
    } else if (time > timeBox) {
      console.log('hello future');
      $('textarea').removeClass('past').removeClass('present').addClass('future');
   };
  };

  let saveBtn = $('.saveBtn');
  function saveEvent () {
    let newEvent = $(this).siblings('textarea')[0].value;
    let newId = $(this).parent('div').attr('id');
    localStorage.setItem(newId, newEvent);

  };
  saveBtn.on('click', saveEvent);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

$(function () {
  let time = dayjs().format('H');
  let currentDay = dayjs().format('dddd, MMMM DD, YYYY')
  $('#today-is').text(currentDay);

  let timeBox = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
  for (let i = 0; i < timeBox.length; i++) {
    $(`#${timeBox[i]}`).children('textarea')[0].value = localStorage.getItem(timeBox[i]);

    if (time == timeBox) {
      $('textarea').removeClass('future').removeClass('past').addClass('present');
    } else if (time < timeBox) {
      $('textarea').removeClass('present').removeClass('future').addClass('past');
    } else if (time > timeBox) {
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
  
});

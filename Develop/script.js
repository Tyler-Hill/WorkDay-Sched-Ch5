$(function () {
  let buttons = $(".saveBtn");
  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    localStorage.setItem(parent, description);
  });

  let date = dayjs().format("MMM D, YYYY");
  $("#currentDay").text(date);

  $(".time-block").each(function () {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    let hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour > dayjs().hour()) {
      $(this).addClass("future");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
    console.log(dayjs().hour());
  });

  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

$(document).ready(function () {


  $('#burger-submit').click(function () {
    $("#devour").hide();
  });

  $('#burger-submit').click(function () {

    $('#devour').show();

  });
})





$(document).ready(() => {


  console.log("test")


  $.get("/api/burger", function (data) {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("burger");

        row.append("<p>" + data[i].burgers.burger_name + "<p>");

        $("#burger-area").prepend(row);
      };
    };
  })




  $("#burger-submit").on("click", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val().trim(),
      devour: 0
    };

    console.log(newBurger);

    $.post("/api/burgers", newBurger)

      .then(function (res) {
        console.log(res);
        const row = $("<div>");
        row.addClass("burger");


        row.append("<p>" + newBurger.burger_name + "<p>");

        $("#burger-area").prepend(row);
      });


    $("#burger_name").val("");

  })
})
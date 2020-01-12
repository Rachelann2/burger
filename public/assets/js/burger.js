
$(document).ready(function () {


  console.log("test")
  $("#addBurger").on("click", function () {
    console.log("add burger...");

    var burger = {
      "burger_name": $(burgerName).val(),
      "devour": $(burgerName).data("eaten")
    };
  })

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


    $("#burger_name").val();

  });

  $("#devour").on("click", function (event) {
    event.preventDefault();

    console.log("test");
    const eatenBurger = {
      burger_name_final: $("#burger-area-devoured").val().trim(),
      devour: true
    };

    console.log(eatenBurger);
  });




})
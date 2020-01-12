var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//when page loads we run this route
router.get("/", function (req, res) {

  //go to the models folder and run the all function in there
  burger.all(function (data) {

    //render the index page and store all data back into the 
    //hdbData so we can plug that into the page 

    // res.json(data);
    res.render("index", { hdbData: data })
  })

});

router.post("/api/burgers", function (req, res) {

  burger.create(["burger_name", "devour"], [req.body.burger_name, req.body.devour], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;

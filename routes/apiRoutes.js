const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {

  // your components will use this to query MongoDB for all saved articles

  // axios
  //   .get("URL", { params: req.query })
  //   .then(({ data: { results } }) => res.json(results))
  //   .catch(err => res.status(422).json(err));

});

router.post("/articles", (req, res) => {

  // your components will use this to save an article to the database
  
});

router.delete("/articles", (req, res) => {

  // your components will use this to delete a saved article in the database
  
});

module.exports = router;

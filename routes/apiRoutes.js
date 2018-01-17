const axios = require("axios");
const router = require("express").Router();

router.get("/nyt/:start/:end/:topic", function(req, res){

  let searchParams = req.params;

  res.json(searchParams);

  // import axios from "axios";
  // const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // const APIKEY = "";
  
  // export default {
  //   search: function (query) {
  //     return axios.get(BASEURL, {
  //       params: {
  //         'api-key': APIKEY,
  //         'q': query,
  //         'begin_date': "20160101",
  //         'end_date': "20180101"
  //       }
  //     });
  //   }
  // };

});

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

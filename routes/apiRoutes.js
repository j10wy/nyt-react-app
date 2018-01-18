const axios = require('axios');
const router = require('express').Router();

router.get("/nyt/:start/:end/:topic", function (request, response) {

  let NYTURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

  let params = request.params;

  axios.get(NYTURL, {
    params: {
      'api-key': process.env.NYT_API,
      'q': params.topic,
      'begin_date': params.start,
      'end_date': params.end
    }
  }).then(res => {

    let nytResponse = res.data.response.docs;
    let sendToReact = nytResponse.map((item)=>{
      return {
        url:item.web_url,
        headline:item.headline.main,
        snippet:item.snippet,
        pub_date:item.pub_date,
        img: item.multimedia.url
      };
    });

    response.send(sendToReact);

  }).catch(err => {
    console.log(err);
  });

});

router.get("/articles", (req, res) => {

  // your components will use this to query MongoDB for all saved articles

});

router.post("/articles", (req, res) => {

  // your components will use this to save an article to the database

});

router.delete("/articles", (req, res) => {

  // your components will use this to delete a saved article in the database

});

module.exports = router;
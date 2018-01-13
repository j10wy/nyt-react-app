const axios = require("axios");
const router = require("express").Router();

router.get("/whatever", (req, res) => {
  axios
    .get("URL", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

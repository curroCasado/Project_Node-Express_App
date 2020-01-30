const express = require("express");

const router = express.Router();

const speakerRoute = require("./speakers");
const feedbackRoute = require("./feedback");

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.render("index", {
      page: "Home"
    });
  });
  router.use("/speakers", speakerRoute());
  router.use("/feedback", feedbackRoute());

  return router;
};

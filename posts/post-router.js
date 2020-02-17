const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  // list of posts
});

router.get("/:id", (req, res) => {
  // a post by its ID
});

router.post("/", (req, res) => {
  // add a post
});

router.put("/:id", (req, res) => {
  // update a post
});

router.delete("/:id", (req, res) => {
  // remove a post
});

module.exports = router;

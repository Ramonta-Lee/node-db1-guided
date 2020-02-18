const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  // list of posts
  // SELECT * FROM Posts
  // all database operations return a promise either using async/await or .then and .catch
  db.select("*")
    .from("posts")
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json({ error: "failed to get the list of posts" });
    });
});

router.get("/:id", (req, res) => {
  // a post by its ID
  // a different syntax from above; does same
  // select * from posts where id = :id
  getById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to get the post" });
    });
  // db("posts")
  //   .where({ id: req.params.id })
  //   .first() // grab the first item on the returned array
  //   .then(post => {
  //     res.status(200).json(post);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({ error: "failed to get the  post" });
  //   });
});

router.post("/", (req, res) => {
  // add a post
  // insert into posts () values ()

  db("posts")
    .insert(req.body, "id") // takes a second parameter; this will generate a warning on the console when using sqlite, IGNORE this.
    .then(ids => {
      return getById(ids[0]);
      db("posts")
        .where("id", ids[0])
        .then(post => {
          res.status(201).json(ids);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "failed to add the  post" });
    });
});

router.put("/:id", (req, res) => {
  // update a post
  const changes = req.body;
  const { id } = req.params;
  db("posts")
    .where({ id }) // remember this statement or ALL records will be updated (BAD PANDA!!)
    .update(changes) // Could be partial changes, only one column is enough
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "failed to update the post" });
    });
});

router.delete("/:id", (req, res) => {
  // remove a post
  const { id } = req.params;
  db("posts")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "failed to remove the post" });
    });
});

module.exports = router;

function getById(id) {
  return db("posts")
    .where({ id })
    .first();
}

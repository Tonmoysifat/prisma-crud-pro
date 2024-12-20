const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  createPost,
  updatePost,
  myPosts,
  allPosts,
  deletePost,
} = require("../controllers/postController");

router.route("/create-post").post(isLoggedIn, createPost);
router.route("/update-post/:id").put(isLoggedIn, updatePost);
router.route("/delete-post/:id").delete(isLoggedIn, deletePost);
router.route("/my-post").get(isLoggedIn, myPosts);
router.route("/all-post").get(allPosts);

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { upload } = require("../controllers/upload.controller");
//function upload is being imported from the controller js file

// Configure multer storage and limits for single file upload
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({
  storage: storage,
});
// This line of code initializes the multer middleware for handling 
//file uploads. multer is a Node.js middleware used for processing 
//multipart/form-data (typically used for file uploads). It provides 
//easy handling of file uploads and integrates with the Express.js framework.

// Use the upload middleware for the POST route
router.route("/").post(uploadMiddleware.single("file"), upload);
//router.route("/").post(...): This sets up a route handler for the 
//root URL path ("/") with an HTTP POST method. The router object is 
//likely an instance of express.Router()

module.exports = router;

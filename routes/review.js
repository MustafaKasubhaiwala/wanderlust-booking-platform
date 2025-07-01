const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema ,reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Review  = require("../models/review.js");
const listings = require("../routes/listing.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

/* Delete */

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;
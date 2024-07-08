const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js")
const Listing = require("../models/listing.js");
const  {isLoggedIn} = require("../middleware.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message.join(","))
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//Index Route
router.get("/", wrapAsync( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("../views/listings/index.ejs", {allListings});
}));

//New Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("../views/listings/new.ejs");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested doesn't exist");
        res.redirect("/listings");
    }
    console.log(listing)
    res.render("../views/listings/show.ejs", {listing});
}));

//Create Route
router.post("/",isLoggedIn , validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created")
    res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested doesn't exist");
        res.redirect("/listings");
    }
    req.flash("success", "Listing is Edited")
    res.render("../views/listings/edit.ejs", {listing});
}));

//Update Route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    if(!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted")
    res.redirect("/listings");
}));

module.exports = router;
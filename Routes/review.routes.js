const express = require('express');
const { getAllReview, getReviewByUser, getReviewByService, checkReview, updateReview, deleteReview, saveReview} = require('../controllers/review.controllers');
const router = express.Router();




router.get('/list', getAllReview);
router.get('/user/:id', getReviewByUser);
router.get('/serviceid/:id', getReviewByService);
router.delete('/:id', deleteReview);
router.patch('/:id', updateReview);
router.get('/', checkReview);
router.post('/', saveReview);


module.exports = router;
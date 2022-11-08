const express = require('express');
const { getAllReview, getReviewByUser, getReviewByService, checkReview, updateReview, deleteReview, saveReview} = require('../controllers/review.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllReview);
router.get('/user/', verifyJWT, getReviewByUser);
router.get('/service/:id', getReviewByService);
router.delete('/:id', deleteReview);
router.patch('/:id', updateReview);
router.get('/', checkReview);
router.post('/', saveReview);


module.exports = router;
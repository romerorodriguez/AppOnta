const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/categories', categoryController.createCategory);
router.get('/categories/:id_user', categoryController.getCategories);

module.exports = router;
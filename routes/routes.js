const { Router } = require('express');

const {
  addProducts,
  getProducts,
  deleteProducts,
  updateProducts,
  viewInDiffrentCurreny,
  productsFullInfo,
} = require('../controllers/ProductsController');

const router = new Router();

router.get('/getAll', getProducts);
router.post('/add', addProducts);
router.patch('/update', updateProducts);
router.delete('/delete', deleteProducts);
router.get('/currency', viewInDiffrentCurreny);
router.get('/fullInfo', productsFullInfo);

module.exports = router;

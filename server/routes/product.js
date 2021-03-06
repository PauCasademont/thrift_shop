import express from 'express';

import { createProduct, getProducts, getProduct, getUserProducts, updateProduct } from '../controllers/product.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.get('/user/:user_id', getUserProducts);

export default router;
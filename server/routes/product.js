import express from 'express';

import { createProduct, getProducts, getUserProducts } from '../controllers/product.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/user/:user_id', getUserProducts);

export default router;
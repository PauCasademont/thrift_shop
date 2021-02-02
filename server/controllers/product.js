import mongoose from 'mongoose';

import ProductModel from '../models/product.js';

export const createProduct = async (req, res) => {
    const { title, description, price, image, userId} = req.body;

    try {
        const owner = mongoose.Types.ObjectId(userId);
        const result = await ProductModel.create({ title, description, price, image, owner});
        res.status(201).json({result});
    } catch (error) {
        res.status(409).json({ message: "Something went wrong"});
        console.log(error);
    }
}
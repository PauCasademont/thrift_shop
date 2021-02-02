import mongoose from 'mongoose';

import ProductModel from '../models/product.js';

export const createProduct = async (req, res) => {
    const { title, description, price, image, owner} = req.body;

    try {
        const ownerObjectId = mongoose.Types.ObjectId(owner);
        const result = await ProductModel.create({ title, description, price, image, owner: ownerObjectId});
        res.status(201).json({result});
    } catch (error) {
        res.status(409).json({ message: "Something went wrong"});
        console.log(error);
    }
}
import mongoose from 'mongoose';

import ProductModel from '../models/product.js';

export const createProduct = async (req, res) => {
    const { title, description, category, price, image, owner} = req.body;

    try {
        const ownerObjectId = mongoose.Types.ObjectId(owner);
        const result = await ProductModel.create({ title, description, category, price, image, owner: ownerObjectId});
        res.status(201).json({result});
    } catch (error) {
        res.status(409).json({ message: "Something went wrong"});
        console.log(error);
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch(error) {
        res.status(404).json({ message: "Something went wrong"});
        console.log(error);
    }
}

export const getUserProducts = async (req, res) => {
    const { user_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(user_id)){
        return res.status(404).json({ message: `No valid user id: ${user_id}`})
    } 

    try{
        const products = await ProductModel.find({ owner: user_id});
        res.status(200).json(products);
    } catch(error) {
        res.status(404).json({ message: "Something went wrong"});
        console.log(error);
    }
}

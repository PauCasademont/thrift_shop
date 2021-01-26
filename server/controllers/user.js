import bcrypt from 'bcryptjs';

import UserModel from '../models/user.js';

export const singup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const oldUser = await UserModel.findOne({ username });
        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await UserModel.create({ username, password: hashedPassword });
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};
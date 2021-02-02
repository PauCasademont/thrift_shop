import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    image: String,
    owner: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model('Product', productSchema);
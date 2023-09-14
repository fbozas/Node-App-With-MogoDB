const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    product: { type: String, required: [true, 'Product is required field'] },
    cost: { type: Number, required: [true, 'Cost is required field'] },
    description: { type: String  },
    quantity: { type: Number, required: [true, 'Quantity is required field'] }
},
{
    collection: 'products',
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
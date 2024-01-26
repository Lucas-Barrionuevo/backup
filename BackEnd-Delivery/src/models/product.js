import mongoose from 'mongoose';

const { Schema } = mongoose;

export const NAME_MAX_LENGTH = 20;
export const ELEMENT_MIN_LENGTH = 3;
export const DESCRIPTION_MAX_LENGTH = 50;
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: ELEMENT_MIN_LENGTH,
        maxlength: NAME_MAX_LENGTH
      },
      description: {
        type: String,
        required: false,
        minlength: ELEMENT_MIN_LENGTH,
        maxlength: DESCRIPTION_MAX_LENGTH
      },
      price: {
        type: Number,
        required: true,
      },
      stock : {
        type: Number,
        required: true
      }
});

export default mongoose.model('Product', ProductSchema);
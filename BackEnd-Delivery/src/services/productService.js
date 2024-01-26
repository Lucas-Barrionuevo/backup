import ProductSchema from '../models/product';

export const find = () => ProductSchema.find();
export const create = (newProduct) => ProductSchema.create(newProduct);
export const put = (filter, newValues) => ProductSchema.findOneAndUpdate(filter,newValues);
export const deleteProd = (args) => ProductSchema.findOneAndDelete(args);
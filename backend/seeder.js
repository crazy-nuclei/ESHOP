const dotenv = require('dotenv');
const mongoose = require('mongoose');
const products = require('./data/products');
const users = require('./data/users');
const Product = require('./models/productSchema');
const User = require('./models/userSchema');
const Order = require('./models/orderSchema');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleData = products.map(product => {
            return {
                ...product,
                user: adminUser
            }
        });
        await Product.insertMany(sampleData);
        console.log('Data Imported !')
        process.exit();
    } catch (err) {
        console.error(error.message);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log('Data Destroyed !')
        process.exit()
    } catch (err) {
        console.error(error.message);
        process.exit(1);
    }
}


if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";

// await mongoose.connect(process.env.ATLAS_URI);
// // Require Models for delete and create operations
// import Post from '../models/Post.js';
import User from "../models/user.js";
import Item from "../models/item.js";
import Admin from "../models/admin.js";

// try {
//   const users = [
//     {
//       email: 'john@doe.com',
//       password: '123456',
//       username: 'johndoe123',
//       name: "John Doe"
//     },
//     {
//       email: 'boba@fett.com',
//       password: 'jetpackdude',
//       username: 'bobafett123',
//       name: "Boba Fett"
//     },
//     {
//       email: 'darth@vader.com',
//       password: 'iamyourfather',
//       username: 'darthlord123',
//       name: "Darth Vader"
//     },
//   ];

//   await Item.deleteMany({});
//   await User.deleteMany({});

//   const createdUsers = await User.create(users);

//   console.log('Users: ', createdUsers);

//   const items = [
//     {
//       title: 'Star Wars',
//       price: 8.50
//     },
//     {
//       title: 'NHK ni Yokouso volume 1',
//       price: 7.30
//     },
//     {
//       title: 'Blue Velvet',
//       price: 7.80
//     },
//   ];

//   const createdItems = await Item.create(items);

//   console.log('Items: ', createdItems);

// } catch (err) {
//   console.log(err);
// } finally {
//   await mongoose.connection.close();
// }

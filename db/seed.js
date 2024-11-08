import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";
// import con from "./conn.js";

// Require Models for delete and create operations
import User from "../models/user.js";
import Item from "../models/item.js";
import Admin from "../models/admin.js";

const con = async () => {
  try {
    const con = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  }
};

const seed = async () => {
  await con();

  try {
    const users = [
      {
        email: "john@doe.com",
        password: "12345678",
        username: "johndoe123",
        name: "John Doe",
      },
      {
        email: "boba@fett.com",
        password: "jetpackdude",
        username: "bobafett123",
        name: "Boba Fett",
      },
      {
        email: "darth@vader.com",
        password: "iamyourfather",
        username: "darthlord123",
        name: "Darth Vader",
      },
      {
        email: "luke@skywalker.com",
        password: "noyournot",
        username: "jedi@whatever",
        name: "Luke Skyewalker",
      },
      {
        email: "mance@rayder.com",
        password: "barbarian@whatever",
        username: "wildlingsLeader",
        name: "Mance Raydar",
      },
      {
        email: "jon@snow.com",
        password: "jonsnow@whatever",
        username: "iknownothing",
        name: "Jons Snow",
      },
      {
        email: "wallace@huckabee.com",
        password: "wallce@whatever",
        username: "wallaby",
        name: "Wallace huckabee",
      },
    ];

    await Item.deleteMany({});
    await User.deleteMany({});
    await Admin.deleteMany({});

    const createdUsers = await User.insertMany(users);

    console.log("Users: ", createdUsers);

    const items = [
      {
        title: "Star Wars",
        price: 8.5,
        description: "Star Wars is cool",
      },
      {
        title: "NHK ni Yokouso volume 1",
        price: 7.3,
        description: "See the world through a shut-in",
      },
      {
        title: "Blue Velvet",
        price: 7.8,
        description: "This ugly but beautiful world",
      },
      {
        title: "Twin peaks Seaon 1",
        price: 45.0,
        description:
          "Young detective tries to solve the murder of a girl in a strange town",
      },
      {
        title: "GOT Season 8",
        price: 55.0,
        description: "Winter is coming",
      },
      {
        title: "Last Of Us Deluxe Pack",
        price: 70.0,
        description: "Mushroom Zombies everywehre",
      },
      {
        title: "FF7 part 3 Reunion and Revengeance",
        price: 70.0,
        description: "Sephiroth's plans come to fruition",
      },
    ];

    const createdItems = await Item.insertMany(items);

    console.log("Items: ", createdItems);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
};

export default seed;

const Schema = require("mongoose").Schema;
const ObjectId = Schema.Types.ObjectId;
const bcrypt = require("bcryptjs");

const db = require("../db-connection/mongodb-connection");
const schema = require("../Schema/schema");

user = {};

user.createUser = async (body) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("User", schema.UserSchema);
    const user = await myModel.findOne({ email: body.email });

    if (user) {
      throw new Error("User with this email already exists");
    }

    const newUser = new myModel(body);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error("Failed to create user");
    throw error;
  }
};

user.login = async function (body) {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("User", schema.UserSchema);

    const user = await myModel.findOne({ email: body.email });
    if (!user) {
throw new Error("Invalid credentials");    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    console.error("Failed to login user");
    throw error;
  }
};

user.getAllUsers = async () => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("User", schema.UserSchema);
    const users = await myModel.find();
    return users;
  } catch (error) {
    return { message: "Error fetching users" };
  }
};

user.getUser =async (profile) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("User", schema.UserSchema);
    const users = await myModel.findOne({ email: profile.email });
    return users;
  } catch (error) {
    return { message: "Error fetching users" };
  }
};

user.linkGithub = async () => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("github", schema.githubSchema);
    return myModel
  } catch (error) {
    console.error("Error linking GitHub collection");
  }
};

module.exports = user;

import User from "../config/mongooseSchema/mongooseSchema.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SESSION_SECRET;

export async function addUser({ add }) {
  const errors = [];
  if (!validator.isEmail(add.email)) {
    errors.push({ message: "email is invalid" });
  }
  if (
    validator.isEmpty(add.password) ||
    !validator.isLength(add.password, { min: 5 })
  ) {
    errors.push({ message: "password is less than 5 character" });
  }
  if (errors.length > 0) {
    const error = new Error("Your input is invalid");
    throw error;
  }
  const existingUser = await User.findOne({ email: add.email });

  if (existingUser) {
    const error = new Error("user exist already");
    return error;
  }
  const hashedPW = await bcrypt.hash(add.password, 12);
  const user = new User({
    email: add.email,
    userName: add.userName,
    password: hashedPW,
  });

  const createdUser = await user.save();
  return { ...createdUser._doc, _id: createdUser._id.toString() };
}

export async function login({ email, password }) {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("user not found");
      error.code = 401;
      throw error;
    } else {
      const passwordEquality = await bcrypt.compare(password, user.password);
      if (!passwordEquality) {
        const error = new Error("invalid password");
        error.code = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          userId: user._id.toString(),
          email: user.email,
        },
        secret,
        { expiresIn: "1h" }
      );
      return { token: token, userId: user._id.toString() };
    }
  } catch (error) {
    throw error;
  }
}



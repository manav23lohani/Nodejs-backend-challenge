const mongoose = require("mongoose");
const { isEmail } = require("validator");
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      validate: [isEmail, "Please enter a  valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const validate = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us your first name!"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your last name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email address!"],
    unique: true,
    lowercase: true,
    validate: [validate.isEmail, "Please provide a valid email address!"],
  },
  mobile: {
    type: String,
    required: [true, "Please provide your mobile no.!"],
    unique: true,
    validate: [validate.isMobilePhone, "Please provide a valid mobile no.!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      //this works only on save!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  address: {
    type: String,
    required: [true, "Please provide an address!"],
  },
});

userSchema.pre("save", async function (next) {
  //only run if password is modified
  if (!this.isModified("password")) return next();

  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

//here correctPassword is instance method so it will be available globally
userSchema.methods.correctPassword = async function (
  //here we are passing the candidatePassword because password are set to false in schema
  candidatePassword,
  userPassword
) {
  //here userPassword is not hashed coming from post request during login and
  //candidatePassword is hashed
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

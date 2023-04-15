const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("Users", DataSchema);
module.exports = UserModel;

const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  // user: {
  //     type: String,
  //     required: true
  // },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('database', UserSchema)

module.exports = User



// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // // Antes de salvar, criptografar a senha
// // userSchema.pre("save", async function (next) {
// //   if (this.isModified("password")) {
// //     this.password = await bcrypt.hash(this.password, 10);
// //   }
// //   next();
// // });

// module.exports = mongoose.model("basic_login", userSchema);

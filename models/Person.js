const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
});

// userSchema.methods.generateAuthToken = function() { 
//   const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
//   return token;
// }

module.exports = Person = mongoose.model("persons", personSchema);

// function validateUser(user) {
//   const schema = {
//     name: Joi.string().min(5).max(50).required(),
//     email: Joi.string().min(5).max(255).required().email(),
//     // password: Joi.string().min(5).max(255).required()
//   };

//   return Joi.validate(user, schema);
// }

// exports.validate = validateUser;
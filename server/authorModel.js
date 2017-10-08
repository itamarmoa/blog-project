let db = require("./db");

let scheme = db.Schema({
  "name": {
    type: String,
    required: true
  },
  "email": {
    type: String
  },
  "phone": String,
});

let Author = db.model("Author", scheme);

module.exports = Author;

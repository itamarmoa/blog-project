const db = require("./db");
const mongoosePaginate = require('mongoose-paginate');

let scheme = db.Schema({
  "title": {
    type: String,
    required: true
  },
  "author": {
    type: db.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  "date": {
    type: Date,
    default: Date.now
  },
  "mdPath": {
    type: String,
    required: true
  },
  "htmlPath": {
    type: String
  },
  "tags": [
    {type: String}
  ],
  "description": {
    type: String,
    required: true
  }
});

scheme.plugin(mongoosePaginate);

let Post = db.model("Post", scheme);

module.exports = Post;

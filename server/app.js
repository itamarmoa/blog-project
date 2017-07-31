const express = require('express');
let app = express();

const posts = require('./posts');

let router = express.Router();

router.route("/posts")
  .get((req, res, next) => {
    if(req.query.title){
      let title = req.query.title;
      let [post] = posts.filter(item => item.title == title);
      return res.json(post);
    }
    next()
  })
  .get((req, res) => {
    res.json(posts);
  });
router.route("/posts/:pagenum")
  .get((req, res) => {
    let pageNum = req.param.pagenum;
    console.log(posts.length);
  });

app.use('/data', express.static('../data'));

app.use("/api",router);
app.listen(9090);

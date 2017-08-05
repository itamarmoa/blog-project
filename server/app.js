const express = require('express');
let app = express();

const posts = require('./posts');
const Counter = require('./Counter');
const Totaller = require('./Totaller');

let router = express.Router();

router.route("/posts")
  .get((req, res, next) => {
    if(req.query.title){
      // Return post by title
      let title = req.query.title;
      let [post] = posts.filter(item => item.title === title);
      return res.json(post);
    }
    if(req.query.page){
      // Return posts by page
      let pageNum = req.query.page;
      let pagePosts = posts.slice(0,3);
      return res.json(pagePosts)
    }
    if(req.query.tag){
      // Return posts by tag
      let tag = req.query.tag;
      let pagePosts = posts.filter(item => item.tags.includes(tag));
      return res.json(pagePosts);
    }
    if(req.query.author){
      // Return posts by author
      let author = req.query.author;
      let pagePosts = posts.filter(item => item.author === author);
      return res.json(pagePosts);
    }
    next()
  })
  .get((req, res) => {
    // Return all posts
    res.json(posts);
  });

router.route('/posts/list/:type')
  .get((req, res, next)=>{
      let result = Counter(Totaller(posts, req.params.type));

      return res.json(result)
  });

app.use('/data', express.static('./data'));

app.use("/api",router);
app.listen(9090,()=>{
  console.log("Server is running on port 9090...")
});

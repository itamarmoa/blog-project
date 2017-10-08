const express = require('express');
let app = express();
let bodyParser = require("body-parser");


const posts = require('./posts');
const Counter = require('./Counter');
const Totaller = require('./Totaller');
const Dater = require('../src/services/Dater');

let Author = require("./authorModel");
let Post = require("./PostModel");

app.use(bodyParser.json());

let router = express.Router();

router.route("/post/:id")
  .get((req, res) => {
    let {id} = req.params;

    Post.findById(id)
      .populate("author")
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err))
  });

router.route("/posts")
  .get((req, res) => {
    let {author, tag, month, page = 1, limit = 3} = req.query,
      filter = {};
    limit = parseInt(limit);
    page = parseInt(page);

    if(author)
      filter.author = author;
    if(tag)
      filter.tags = tag;
    if(month)
      filter.month = month;

      Post.paginate(filter, {page, limit, populate: "author"})
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err))
  })
  // .get((req, res, next) => {
  //   if(req.query.title){
  //     // Return post by title
  //     let title = req.query.title;
  //     let [post] = posts.filter(item => item.title === title);
  //     return res.json(post);
  //   }
  //   if(req.query.page){
  //     let pageValue = req.query.page;
  //     // Checks if to return all posts
  //     if(pageValue === "all"){
  //       return res.json(posts)
  //     }
  //     // Return posts by page number
  //     let postsLimit = 3;
  //     let end = (pageValue * postsLimit);
  //     let pagePosts = posts.slice((end - postsLimit) , end);
  //
  //     return res.json(pagePosts)
  //   }
  //   if(req.query.tag){
  //     // Return posts by tag
  //     let tag = req.query.tag;
  //     let pagePosts = posts.filter(item => item.tags.includes(tag));
  //     return res.json(pagePosts);
  //   }
  //   if(req.query.author){
  //     // Return posts by author
  //     let author = req.query.author;
  //     let pagePosts = posts.filter(item => item.author === author);
  //     return res.json(pagePosts);
  //   }
  //   if(req.query.month){
  //     // Return posts by month
  //     let month = req.query.month;
  //     let pagePosts = posts.filter(item => Dater.convert(item.date,'year-month-name') === month);
  //     return res.json(pagePosts);
  //   }
  //   next()
  // })
  // .get((req, res) => {
  //   // Return all posts
  //   res.json(posts);
  // })
  .post((req, res)=>{
    let {title, mdPath, tags, description, date, author} = req.body,
      post = new Post({title, mdPath, author, tags, description, date});
      post.save()
      .then(post => res.json(post))
      .catch(err => res.status(500).send(err));

  });


router.route('/posts/list/')
  .get((req, res, next)=>{
    let tags = Counter(Totaller(posts, 'tags'));
    let authors = Counter(Totaller(posts, 'author'));
    let months = Counter(Totaller(posts, 'date'));
    let totalPosts = posts.length;
    let result = {
      totalPosts,
      tags,
      authors,
      months
    };

    return res.json(result)
  });

router.route('/posts/list/:type')
  .get((req, res, next)=>{
      let result = Counter(Totaller(posts, req.params.type));

      return res.json(result)
  });

router.route('/authors')
  .get((req, res) => {
    Author.find(function(err, authors){
      if(!err)
        res.json(authors);
      else
        res.status(500).send(err);
    });
  })
  .post((req, res) => {
    let author = new Author(req.body);
    author
      .save()
      .then(author => res.json(author))
      .catch(err => res.status(500).send(err));
});

app.use('/data', express.static('./data'));

app.use("/api",router);
app.listen(9090,()=>{
  console.log("Server is running on port 9090...")
});

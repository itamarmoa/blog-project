const {convert} = require('../src/services/Dater');

function Totaller(posts,type) {
  let result = [];
  posts.map(
    post=>{
      if(type === 'tags') {
        post.tags.map(
          tag => {
            // if(!result.includes(tag)){
            result.push(tag)
            // }
          })
      }
      else if(type === 'date'){
        result.push(convert(post[type], 'year-month-name'));
      }
      else{
        result.push(post[type]);
      }
    });

  return result
}

module.exports = Totaller;

function Counter(arr) {
  let tags = [],
      prev;

  arr.sort();
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] !== prev ) {
      tags.push({
        name: arr[i],
        occur: 1
      });
    } else {
      tags.map((item)=>{
        if(item.name === arr[i]){
          item.occur ++
        }
      })
    }
    prev = arr[i];
  }
  return tags
}
module.exports = Counter;

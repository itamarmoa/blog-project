function Counter(arr) {
  let result = [],
      prev;

  arr.sort();
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] !== prev ) {
      result.push({
        name: arr[i],
        occur: 1
      });
    } else {
      result.map((item)=>{
        if(item.name === arr[i]){
          item.occur ++
        }
      })
    }
    prev = arr[i];
  }
  return result
}
module.exports = Counter;

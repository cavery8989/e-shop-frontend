import _ from 'underscore'
const helpers = {};


helpers.condenseBasket = (basket) =>{
  var condensedList = basket.reduce((mem,cur)=>{
    let index =  _.find(mem,(obj) => obj.book_name === cur.book_name);
    if(index){
      index.quantity += 1;
      index.idArr.push(cur.id);
      return mem;
    }else {
      let bookObj = {book_name: cur.book_name,img: cur.img,price: cur.price, quantity: 1, idArr: [cur.id]};
      mem.push(bookObj);
      return mem;
    }
  },[]);

  return condensedList;

};

export default helpers

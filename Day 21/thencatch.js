let count = true;

let countValue = new Promise((resolve,reject) => {
  let lotnum=1;
  let prizeNum=Math.floor(Math.random()*5);

  if(lotnum==prizeNum){
    resolve("Win")
  }
  else{
    reject("Next Time")
  }
});

countValue.then(msg => console.log(msg)).catch(err => console.log(err));
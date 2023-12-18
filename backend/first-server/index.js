const express = require('express');
const app = express();
const port = 3000;

function sumOfN(n){
  let sum = 0
  for(i=0; i<=n ; i++){
    sum += i
   }


return sum
}

app.get('/', (req, res) => {
   const n = req.query.n;
   let add = sumOfN(n)
   res.send(add.toString())
   

   // res.send(add.toString());: The result of the calculation ('add') is sent as the HTTP response. Before sending it, the result is converted to a string using the toString() method. This is done because the send method expects a string or a buffer as its argument.

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// to accespt paramiter from local ==> /? n=100

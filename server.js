const express = require('express')
const axios=require('axios').default;
const app = express()
app.use(express.static('./'));
const port = 3000;

app.get('/wp-content/themes/greenEx/php/calc.php', (req, res) => {
	console.log("QUERY: ", req.query);
	axios.get(`https://greenex.pro/wp-content/themes/greenEx/php/calc.php`, {params: req.query}).then(
	function(d){
		console.log("data: ",d.data)
		res.json(d.data)
		}).catch(function(er){
			console.log('err: ',er.toString())
			res.send(er.toString());
			})

  
})

let a = new Map();
a.set(1, {price: 1});
a.set(2, {price: 2.20});
a.set(3, {price: 3});
console.log("size: ", a.size);
let c = [];
a.forEach(function(el,i){
	c.push(el.price);
})
console.log("array: ", c)
let b = c.reduce(function(ac, v){
	
	var returns = ac + v;
	return returns;
}, 10)
console.log("total sum: ", b.toFixed(2))
let da = "504.10";
console.log("da: ", Number(parseFloat(da).toFixed(2)))
/*
if(k<=-128*1){
		futs[0].style.left=`${128*6+k}px`;
	}
	
	if(k<=-128*2){
		futs[1].style.left=`${128*7+k}px`;
	}
	if(k<=-128*3){
		futs[2].style.left=`${128*8+k}px`;
	}
	if(k<=-128*4){
		futs[3].style.left=`${128*9+k}px`;
	}
	if(k<=-128*5){
		futs[4].style.left=`${128*10+k}px`;
	}
	if(k<=-128*6){
		futs[5].style.left=`${128*11+k}px`;
	}
	*/
var arrp=[0,1,2,3,4,5]
let stri='';
let k=0;
arrp.forEach(function(el,i, arr){
	stri+=`if(k<=-128*(i+1){
	arr[i].style.left=\`\${128*(arrp.length+i)+k}px\`
	}`
})

console.log('stri: ', stri)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')
const app = express();


app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))  

app.listen(3000);

var cont =1;
var answersArray = new Array();

function Connection(contador,ip){
	this.number=contador;
	this.date = Date().toString();
	this.ip=ip;
}

app.get('/', (request, response) => {  
  	answersArray.push(new Connection(cont,request.ip)),
	response.json({
    	Connections: JSON.stringify(answersArray)
  }),
	cont++;
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})


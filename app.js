const express = require("express");
const app = new express();
const port = process.env.PORT||2000

const nav=[{
      link:"/books",name:"books"
   },
   {
      link:'/login',name:'Login'
    },
    {
      link:'/signup',name:'signup'
    },
    {
      link:'/AddBook',name:'Add Book'
    },
    {
      link:'/Author',name:'Authors'
    },
    {
      link:'/AddAuthor',name:'Add Author'
    }
],
booksRoutes = require('./src/routes/booksRoutes')(nav)
addbookRouter = require('./src/routes/addbookRouter')(nav)
authorRouter = require('./src/routes/authorRoutes')(nav)
addauthorRoutes = require('./src/routes/addAuthorRoutes')(nav)
loginRouter = require('./src/routes/loginRoutes')(nav)
signupRoutes = require('./src/routes/signupRoutes')(nav)

app.set('view engine','ejs');
app.use(express.static('./public')) // or __dirname +
app.set('views','./src/views') //or __dirname+'./src/views'
app.use('/books',booksRoutes);
app.use('/addBook',addbookRouter);
app.use('/author',authorRouter);
app.use('/addAuthor',addauthorRoutes)
app.use('/login',loginRouter)
app.use('/signup',signupRoutes)
app.get('/',function(req,res){
   res.render('index',{
       nav,
        title:"Library"
   });
});
app.listen(port,()=>{
  console.log("server ready at:" +port)});
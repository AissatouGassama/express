const express=require("express");
const app=express();

app.use(express.static('public'));

const heureOuvrable=(request, response,next)=>{
    let maDate=new Date();

    let currentDay=maDate.getDay();
    let currentHour=maDate.getHours();
    
    if(currentDay > 1 || currentDay < 5){
        if(currentHour < 9 || currentHour >17){
            response.end('Lapplication est ferme !')
            
        }
        else{
            next();
        }
    }
    
}

app.use(heureOuvrable);

//EJS
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/' ,(req,res)=>{
    res.render('pages/acceuil')
    
    
});
//HOME PAGE
app.get('/acceuil',(req,res)=>{
    res.render('pages/acceuil')
});

// CONTACT PAGE
app.get('/contact' ,(req,res)=>{
    res.render('pages/contact')
    
    
});
// SERVICES PAGE
app.get('/services', (req,res)=>{
    res.render('pages/services')
})
// ACCEUIL PAGE
app.get('/acceuil', (req,res)=>{
    res.render('pages/acceuil')
})

app.listen(8000, ()=>{
    console.log('server listening on port 8000')
    
});



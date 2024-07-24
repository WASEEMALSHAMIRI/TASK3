////////////////////////////////////////
const express =require("express")
const path =require("path");
const app =express()
const port=process.env.port||5000
var hbs =require("hbs");
const dirctory= path.join(__dirname,"../public/views")
const publicdirctorys= path.join(__dirname,"../public")
const stacdirctry= path.join(__dirname,"../public/static")
hbs.registerPartials(stacdirctry)
///////////////////////////////////////

app.set('view engine', 'hbs');
app.set('views', dirctory);
app.use(express.static(publicdirctorys))
app.get('/',(req,res)=>{
    res.render("Home",{
        title:"Home",
        Dscrebt:"The latest and most powerful phones",
        Imge:"images/PHONES.JPG"


    })
})

app.get('/apple',(req,res)=>{
    res.render("apple",{
        title:"Apple",
        name:"iphone 14 promax",
        version:2024,
        storage:265 +"gb",
        color:"black , white , selvor",
        Imge:"images/ipon.jpg"
    })
})


app.get('/Samsung',(req,res)=>{
    res.render("Samsung",{
        title:"Samsung",
        name:"Galaxy S23",
        version:2024,
        storage:265 +"gb",
        color:"black , white , selvor",
        Imge:"images/Best-Samsung-phones_2c8f.jpg"
    })
})

app.get('/Huwai',(req,res)=>{
    res.render("Huwai",{
        title:"Huawei",
        name:"Nova y5",
        version:2024,
        storage:512 +"gb",
        color:"black , white , selvor",
        Imge:"images/huwai.jpg"
    })
})


app.get('/Oppo',(req,res)=>{
    res.render("Oppo",{
        title:"Oppo",
        name:"Reno 8T",
        version:2024,
        storage:512 +"gb",
        color:"black , white , selvor",
        Imge:"images/OIP.jpeg"
    })
})
/////////////////////////////

app.listen(port,()=>{
    console.log("start app")
})

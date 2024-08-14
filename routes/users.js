const express = require('express');
const router = express.Router();
let users = [
    {
        name:"pepporoni pizza",
        id:1,
        category:"pizza",
        price:200
    },
    {
       name:"italian pizza",
        id:2,
        category:"pizza",
        price:250
    },
    {
        name:"Cheese Pizza",
        id:3,
        category:"pizza",
        price:250
    },
    {
        name:"veggie Pizza",
        id:4,
        category:"pizza",
        price:300   },
    {
        name:"cocca cola",
        id:5,
        category:"beverages",
        price:80
    },
    { 
        name:"pepsi",
        id:6,
        category:"beverages",
        price:80
    },
    { 
        name:"chicken pizza",
        id:7,
        category:"combo",
        price:150
   }
    
]


router.get("/",(req,res) =>{
    res.send(users);
})


router.get("/:name" ,(req,res)=>{
    const name=req.params.name;
    let filtered_users = users.filter(user => user.name === name);
    res.send(filtered_users);
})

router.delete("/:name", (req,res)=>{
    const name = req.params.name;
    users = users.filter(user => user.name !=name);
    res.send('User with the pizza name ${name} deleted.');
})

router.post("/" ,(req,res) =>{

    users.push({
"name" : req.query.name,
"id" : req.query.id,
"category" : req.query.category,
"price" : req.query.price,

    })
    res.send("The user has been added");
})
router.put("/:name" , (req,res)=>{
    const name = req.params.name;
    let filtered_users = users.filter(user => user.name === name);
    if(filtered_users.length>0){
        let filtered_user = filtered_users[0];
        let name = req.query.name;
        let category = req.query.category;
        let id= req.query.id;
        let price= req.query.price;
        if(name){
            filtered_user.name = name;
        }
        if(category){
            filtered_user.category = category;
        }
        if(id){
            filtered_user.id = id;
        }
        if(price){
            filtered_user.price = price;
        }
        users = users.filter(user => user.name != name);
        users.push(filtered_user);
        res.send("User has been updated!");
    }else{
        res.send("Unable to find user!");
    }
})
    
module.exports = router;
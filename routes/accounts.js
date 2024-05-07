const express = require('express')
const router = express.Router()
const connection = require('../connections/mysql')

router.get('/', (res, rep)=>{
    rep.render('login')
}).get('/login', (res, rep)=>{
    rep.render('login')
}).get('/signup', (res, rep) =>{
    rep.render('signup')
}).post('/signup', (res, rep) => {
    isExistsQL = `SELECT * FROM accounts WHERE username="${res.body.username}"`
    connection(isExistsQL, (result) => {
        console.log(result)
        rep.redirect('/')
    })
})

module.exports = router;

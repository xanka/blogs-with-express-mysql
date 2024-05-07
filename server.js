const express = require("express")
const connect = require("./connections/mysql")
const app = express()
const ArticlesRouter = require('./routes/articles')
const AccountsRouter = require('./routes/accounts')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/static'))

app.get('/', (res, rep) => {
    const articles = connect('SELECT * from Articles', function(articles) {
        rep.render('index', {articles: articles})
    })
})

app.use('/articles',ArticlesRouter)
app.use('/user',AccountsRouter)

app.listen(3000)
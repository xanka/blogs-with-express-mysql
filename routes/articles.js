const express = require('express')
const router = express.Router()
const Article = require('../connections/mysql')

// listing article
router.get('/', (res, rep) => {
    Article("SELECT * FROM Articles", (articles) => {
        rep.render('listing', { articles: articles },)
    })
})

// view article
router.get('/view/:id', (res, rep) => {
    Article(`SELECT * FROM Articles WHERE id=${res.params.id}`, (article) => {
        rep.render('detail', { item: article[0] })
    })
})

// save exists article
router.put('/save/:id', (res, rep) => {
    let query = `UPDATE Articles set title="${res.body.title}", description="${res.body.description}" WHERE id=${res.body.id}`;
    Article(query, () => {
        // redirect to view article
        rep.redirect(`/articles/view/${res.body.id}`)
    })
})

// edit article form 
router.get('/edit/:id', (res, rep) => {
    Article(`SELECT * FROM Articles WHERE id=${res.params.id}`, (article) => {
        rep.render('form_edit', { formData: article[0] })
    })
})

// add new article
router.get('/new', (res,rep) => {
    rep.render('form_new', {formData:{}})
})

router.post('/save', (res,rep) => {
    Article(`INSERT INTO Articles (title, description) VALUES ("${res.body.title}", "${res.body.description}")`, (result) => {
        rep.redirect(`/articles/view/${result.insertId}`)
    })
})

module.exports = router;

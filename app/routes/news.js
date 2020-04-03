const dbConnection = require('../../config/dbConnection');

module.exports = app => {

const connection = dbConnection();
    app.get('/', (_req, res) => {
        connection.query('SELECT * FROM news', (_err, result) => {  
        res.render('news/news', {
        news: result
        });
    });
});

app.post('/news', (req, res) => {
    const { title, news 
    } = req.body;
    connection.query('INSERT INTO news SET?', {
        title,
        news
    }, (_err, _result) => {
        res.redirect('/');
    });
});

}
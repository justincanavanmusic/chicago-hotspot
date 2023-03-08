const express = require('express');
const { engine } =require('express-handlebars');
const sequelize = require('./config/connection');
// const controller = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.use(controller)

app.get('/', (req, res) => {
    res.render('jclogin')
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
})
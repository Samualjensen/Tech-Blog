require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'super secret secret',
    cookie: {},
    resave: false,
    saveUninitialzed: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

const handlebars = require('handlebars');
handlebars.registerHelper('format_date', function(date) {
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    return `${month}/${day}/${year}`;
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/home-routes'))
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(
            `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
        )
    );
});

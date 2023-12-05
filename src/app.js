const express = require('express');
const {default: helmet} = require('helmet')
const morgan = require('morgan');
const compression = require('compression')
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome Fantipjs'
    })
});

module.exports = app;
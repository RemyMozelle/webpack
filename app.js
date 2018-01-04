const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('layout', 'layouts/layout');

app.use(expressLayout);
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
})

app.listen(3000, () => {
  console.log('vous être connectez port 3000')
});
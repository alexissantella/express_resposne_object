const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(morgan('common')); // let's see what 'common' format looks like

const books = require('./books-data.js');

app.get('/books', (req, res) => {
  const {search = " "} = req.query;
  if (sort) {
    if (!['title', 'rank'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of title or rank');
    }
  }
    let results = books
        .filter(book =>
            book
                .title.toLowerCase()
                .includes(search.toLowerCase()));
    res
    .json(results);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});
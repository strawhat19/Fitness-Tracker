const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const routes = require(`./routes`);
const PORT = process.env.PORT || 3000;
const db = require(`./models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));

app.use(logger(`dev`));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
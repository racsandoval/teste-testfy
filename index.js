import Routes from './routes/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import Apis from './apis/index.js';

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
Routes(app);
Apis(app);

app.listen(3000, function(){
    console.log("index.js is running");
});
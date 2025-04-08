mongoose = require( 'mongoose' );
methodOverride = require( 'method-override' );

const MongoDB = require("mongodb").MongoClient;
const express = require("express");
const router= express.Router();
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const app = express();
//database


mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost/recipe_db' );
const db = mongoose.connection;

db.once( 'open', () => {
  console.log( 'Successfully connected to MongoDB using Mongoose!' );
} );


const path = require( 'path' );
app.use (
    express.urlencoded({
    extended: false
    })
    );
    
dbURL = "mongodb://localhost:27017",
dbName = "recipe_db";


MongoDB.connect( dbURL,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    family : 4
    },
    
    ( error, client ) => {
        console.log('pass 0');
    if ( error ) throw error;
    let db = client.db( dbName );
    db.collection( 'contacts' )
    .find()
    .toArray( ( error, data ) => {
    if ( error ) throw error;
    console.log( data );
    } );
    db.collection( 'contacts' )
    .insertOne( {
    name: 'Freddie Mercury',
    email: 'fred@queen.com'
    }, ( error, db ) => {
    if ( error ) throw error;
    console.log( 'insertOne Done!' );
    } );
    } 
    
    
    );
    




//middleware

//set views
app.set("view engine", "ejs");
app.use(layouts);

app.set( 'views', path.join(__dirname, 'views'));
app.set("port", process.env.PORT || 3000);
app.get("/", homeController.index);

console.log("pass 1");
app.get("/home", homeController.home);
console.log('pass 2');
app.get("/users", homeController.showUsers);
app.get("/contact", homeController.postedSignUpForm);
console.log('pass 2a');
app.post('/users/submit', homeController.addUsers );


app.listen(app.get("port"), () => { 
console.log(
`Server running at http://localhost:${app.get(
"port"
)}`
);
});

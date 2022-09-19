var dbConfig = require("./config/db.config");
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// database connection

const db = require("./models");
const { isValidInputTimeValue } = require("@testing-library/user-event/dist/utils");
const Role = require("./models/role.model");
const ROLE = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
})
.catch(err => {
  console.error("Connection error",err);
  process.exit();
})


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

function initial(){
  Role.estimatedDocumentCount((err,count) => {
    if (!err && count === 0){

      new Role({
        name: "user"
      }).save(err => {
        if(err) {
          console.log("error",err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if(err) {
          console.log("error",err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if(err) {
          console.log("error",err);
        }

        console.log("added 'admin' to roles collection");
      });

    }
  });
}
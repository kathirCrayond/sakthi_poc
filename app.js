//IMPORTS
const express = require("express");
const app = express();
const cors = require("cors");
app.set('view engine', 'ejs');

//CONSTANTS
const PORT = process.env.PORT || 8000;

//MIDDLEWARES
app.use(express.json()); //to return files as json
app.use(cors()); //for cross origin  files

//ROUTES
app.use("/api", require("./routes/api_route"));


app.get('/', (req, res) => {
 const {email} = req.query
  
  res.render('home', { name: email });

});
//SERVER PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const mysql = require("mysql");
const app = express();
const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.routes");

// mongodb connection
//mongodb+srv://root:<password>@cluster0.zdebp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://root:<password>@cluster0.zdebp.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://akshay:agencywale%40143@cluster0.njwh2.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://root:admin@cluster0.zdebp.mongodb.net/mySecondDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

/* mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.zdebp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  }
*/
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

/* const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'agency-data'
});

db.connect( (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("MYSQL connected...")
    }

}); */

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);

app.listen(3000, () =>{
    console.log(`server is running on port ${process.env.PORT}`);
});
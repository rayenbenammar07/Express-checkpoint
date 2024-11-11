const express = require("express");
const app = express();
app.use(express.static(__dirname))
app.set("view engine", "ejs")
function workinghours(req, res, next) {
    let now = new Date();
    let day = now.getDay();
    let hours = now.getHours();
    if (day >= 2 && day <= 5 && hour >= 9 && hour <= 18) {
        next();
    }else{res.send("out of working hours:Monday to friday, 9am to 6pm")}
}
app.use(workinghours);
app.get("/", (rep, res) => {
    res.render("index")
})
app.get("/", (rep, res) => {
  res.render("service");
});
app.get("/", (rep, res) => {
  res.render("contact");
});
app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server is running on port 5000");
})
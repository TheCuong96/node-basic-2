import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
import initAPIRoute from "./routes/api";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;

//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

// init api route
initAPIRoute(app);

//init web route
initWebRoute(app);

// app.get("/", (req, res) => {
//     res.render("index.ejs");
// });
// app.get("/about", (req, res) => {
//     res.send(`I'm Eric!`);
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

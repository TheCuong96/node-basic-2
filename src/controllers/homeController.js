import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query("SELECT * FROM `users` ", function (err, results, fields) {
        return res.render("index.ejs", { dataUser: JSON.stringify(results) });
    });
};

module.exports = {
    getHomepage,
};

import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
    //logic
    connection.query("SELECT * FROM `users` ", function (err, results, fields) {
        return res.render("index.ejs", { dataUser: results });
    });
};

module.exports = {
    getHomepage,
};

import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/edit-user/:id", homeController.getEditPage);
    router.post("/update-user", homeController.postUpdateUser);

    router.post("/delete-user", homeController.deleteUser);

    router.get("/", homeController.getHomepage);
    router.get("/detail/user/:id", homeController.getDetailPage);
    router.post("/create-new-user", homeController.createNewUser);
    router.get("/about", (req, res) => {
        res.send(`I'm Eric!`);
    });

    return app.use("/", router);
};

export default initWebRoute;

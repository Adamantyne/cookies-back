//npm install cookie-parser
import express from "express";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/setCookie", (req, res) => {
    res.cookie(`value`, ``, {
        maxAge: 600000,
        secure: false,
        sameSite: "lax",
        httpOnly: true
    });
    res.send("Cookie criado!");
});

app.post("/updateCookie", (req, res) => {
    const {value} = req.body;
    res.cookie(`value`, `${value}`, {
        maxAge: 600000,
        secure: false,
        sameSite: "lax",
        httpOnly: false
    });
    res.send("Cookie atualizado!");
});

app.get("/deleteCookie", (req, res) => {
    res.clearCookie("value");
    console.log(req.cookies);
    res.status(200).send("Cookie deletado!")
});

app.get("/getCookie", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});
app.listen(5000, () => { console.log(chalk.green("servidor ok")) });
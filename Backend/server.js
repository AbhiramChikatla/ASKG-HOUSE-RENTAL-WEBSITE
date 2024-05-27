// imports

import express from "express";
import { mongoose } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import { MongoClient } from "mongodb";
import { userModel } from "../src/models/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// code written for accepting cookies
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

// Database Name
const dbName = "ASKG";

// jwt secret

const jwtSecret = "lasd4831231#^";

await client.connect();
await mongoose.connect(process.env.MONGO_URI, {
    dbName: dbName,
});
console.log("Connected successfully to server");
const db = client.db(dbName);

//  instantiations
const app = express();
const port = 3000;

//  middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

// functions

// api's

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// for fetching all the data of the houses
app.get("/houses_data", async (req, res) => {
    const collection = db.collection("houses_data");

    let findResult = await collection.find({}).limit(20).toArray();
    // findResult = findResult.slice(0, 20);
    res.send(findResult);
});
app.get("/slider_info", async (req, res) => {
    const collection = db.collection("houses_data");

    // updated new query
    let findResult = await collection.find({}).limit(20).toArray();
    // findResult = findResult.slice(0, 20);
    res.send(findResult);
});
app.get("/agents_data", async (req, res) => {
    const collection = db.collection("agents_data");

    // updated new query

    let findResult = await collection.find({}).limit(5).toArray();
    // findResult = findResult.slice(0, 5);
    res.send(findResult);
});

app.post("/contact", (req, res) => {
    // const {}
    // console.log(req.body);
    const { name, email, phone, msg } = req.body;
    console.log(name, email, phone, msg);
    res.send("Hello World! from /contact page");
});

app.post("/createaccount", async (req, res) => {
    const { username, mail, password } = req.body;
    // console.log(username, mail, password);

    // this authentication is not required bcoz mongoose will take care of it
    // if (!(username && mail && password)) {
    //     res.status(400).json("please enter all the fields");
    // }
    const existingUser = await userModel.findOne({ email: mail });
    if (existingUser) {
        res.status(200).send({ success: false, msg: "User already exists" });
        return;
    }
    //  code for encryption
    try {
        const EncPassword = await bcrypt.hash(password, 10);

        const createUser = await userModel.create({
            username,
            email: mail,
            password: EncPassword,
        });
        const token = jwt.sign({ username: username, email: mail }, jwtSecret, {
            expiresIn: "2 days",
        });
        // createUser.token = token;
        // createUser.password = undefined;
        console.log(createUser);

        // res.send({
        //     success: true,
        //     msg: "Account Created Successfully",
        //     token:token
        // });
        res.cookie("token", token).send({
            success: true,
            msg: "Account Created Successfully",
            user: createUser,
        });
    } catch (error) {
        // res.status(400).json({ success: false, error: error });
        console.log(error);
    }
});
app.post("/login", async (req, res) => {
    // collecting data
    const { email, password } = req.body;
    console.log(email, password);

    // processing skip this part bcoz mongoose will take care of it

    // finding the document
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        res.send({ success: false, msg: "User not found" });
    }

    // password checking
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (isMatch) {
        res.send({ success: true, msg: "Login Successful" });
    } else {
        res.send({ success: false, msg: "Incorrect Password" });
    }
    // sent a message through the response
});
app.post("/newpassword", (req, res) => {
    const { oldpassword, newpassword } = req.body;
    console.log(oldpassword, newpassword);
    res.send({ oldpassword, newpassword });
});
app.post("/subscribe_info", async (req, res) => {
    const collection = db.collection("subscribers");
    const { email } = req.body;
    // const findResult=await collection.insertOne({email: email})
    //     .then((result) => {
    //         console.log(`added ${email} to subscribers`);
    //         res.send(`Added ${email} to subscribers.`);
    //     })
    //     .catch((err)=>{
    //         console.error(err);
    //         res.status(500).send(err);
    //     });
    const findResult = await collection.insertOne({ email: email });
    res.send({ sucess: true, result: findResult });
});

app.get("/profile", (req, res) => {
    // res.json("all done")
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    
    }else{
        res.json(null)
    }
});

app.post("/listing", async (req, res) => {
    const collection = db.collection("houses_data");
    let { address, price, category, bedrooms } = req.body;

    let no_of_beds = bedrooms.match(/\d+/g)[0];
    let min_val = price.match(/\d+/g)[0];
    let max_val = price.match(/\d+/g)[1];
    no_of_beds = parseInt(no_of_beds);
    min_val = parseInt(min_val);
    max_val = parseInt(max_val);

    // let findResult = await collection.find({ numBathrooms: no_of_beds - 1 }).toArray();
    let findResult = await collection
        .find({
            $and: [
                { numBathrooms: no_of_beds - 1 },
                {
                    price: {
                        $gt: min_val,
                        $lt: max_val,
                    },
                },
            ],
        })
        .toArray();

    res.send(findResult);
});
app.post("/propertydetails", (req, res) => {
    // const {}
    // console.log(req.body);
    const { name, email, phone, date } = req.body;
    console.log(name, email, phone, date);
    res.send("Hello World! from /contact page");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

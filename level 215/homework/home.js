// maintenanceM Middleware
// const express = require("express");

// const app = express();

// function maintenanceM(req, res, next) {
//     if (Math.random() > 0.8) {
//         return res.json({
//             message: "Server is under maintenance"
//         });
//     }

//     next();
// }

// app.use(maintenanceM);

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//     res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

// app.listen(3000);
















// ageM Middleware
// const express = require("express");

// const app = express();

// function ageM(req, res, next) {
//     const age = Number(req.query.age);

//     if (age >= 18) {
//         return next();
//     }

//     res.json({
//         message: "You must be 18 or older"
//     });
// }

// app.get("/movies", ageM, (req, res) => {
//     res.send("Welcome to the movie page.");
// });

// app.listen(3000);












// tokenM Middleware
// const express = require("express");

// const app = express();

// function tokenM(req, res, next) {
//     const token = req.headers.token;

//     if (token === "abcd1234") {
//         return next();
//     }

//     res.json({
//         message: "Invalid token"
//     });
// }

// app.get("/profile", tokenM, (req, res) => {
//     res.send("User Profile");
// });

// app.listen(3000);




















// loggerM + secretM
// const express = require("express");

// const app = express();

// function loggerM(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// }

// function secretM(req, res, next) {
//     if (req.query.secret === "open") {
//         return next();
//     }

//     res.send("Access Denied");
// }

// app.get("/secret", loggerM, secretM, (req, res) => {
//     res.send("Secret Page");
// });

// app.listen(3000);



















// visitM Middleware
// const express = require("express");

// const app = express();

// let visits = 0;

// function visitM(req, res, next) {
//     visits++;   
//     console.log(`Visit: ${visits}`);
//     next();
// }

// app.use(visitM);

// app.get("/", (req, res) => {
//     res.send("Home");
// });

// app.get("/about", (req, res) => {
//     res.send("About");
// });

// app.get("/shop", (req, res) => {
//     res.send("Shop");
// });

// app.listen(3000);
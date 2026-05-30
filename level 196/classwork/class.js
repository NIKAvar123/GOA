// const express = require("express");

// const app = express();

// app.use(express.json());

// // მთვლელები
// const counters = {
//     GET: 0,
//     POST: 0,
//     PUT: 0,
//     DELETE: 0,
//     PATCH: 0
// };

// // Middleware
// app.use((req, res, next) => {

//     const method = req.method;

//     if (counters[method] !== undefined) {
//         counters[method]++;
//     }

//     console.clear();

//     console.log("=== REQUEST COUNTERS ===");
//     console.log("GET:", counters.GET);
//     console.log("POST:", counters.POST);
//     console.log("PUT:", counters.PUT);
//     console.log("DELETE:", counters.DELETE);
//     console.log("PATCH:", counters.PATCH);

//     next();
// });

// // Routes
// app.get("/", (req, res) => {
//     res.send("GET request");
// });

// app.post("/", (req, res) => {
//     res.send("POST request");
// });

// app.put("/", (req, res) => {
//     res.send("PUT request");
// });

// app.delete("/", (req, res) => {
//     res.send("DELETE request");
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





// const http = require("node:http");

// const PORT = 3012;

// let GET = 0;
// let POST = 0;
// let PUT = 0;
// let DELETE = 0;

// const server = http.createServer((req, res) => {

//     // მეთოდის შემოწმება
//     if (req.method === "GET") {
//         GET++;
//     }

//     if (req.method === "POST") {
//         POST++;
//     }

//     if (req.method === "PUT") {
//         PUT++;
//     }

//     if (req.method === "DELETE") {
//         DELETE++;
//     }

//     console.clear();

//     console.log("GET:", GET);
//     console.log("POST:", POST);
//     console.log("PUT:", PUT);
//     console.log("DELETE:", DELETE);

//     res.end("request was successful");
// });

// server.listen(PORT, () =>
//     console.log(`Server is running on http://localhost:${PORT}`)
// );








// const http = require('node:http');

// const PORT = 3012;

// // მეთოდების მთვლელი
// const data = {
//   GET: 0,
//   POST: 0,
//   PUT: 0,
//   DELETE: 0,
//   PATCH: 0
// };

// const server = http.createServer((req, res) => {
//   const method = req.method;

//   // თუ ასეთი მეთოდი არსებობს — გავზარდოთ რაოდენობა
//   if (data[method] !== undefined) {
//     data[method]++;
//   } else {
//     data[method] = 1;
//   }

//   // კონსოლში გამოვიტანოთ სტატისტიკა
//   console.clear();
//   console.log('Request statistics:');
//   console.table(data);

//   res.end('request was successful');
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



















const http = require("node:http");

const PORT = 3012;

const data = {
    GET: 0,
    POST: 0,
    PUT: 0,
    DELETE: 0
};

const server = http.createServer((req, res) => {

    data[req.method]++;

    // Header
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    // HTML response
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Backend HTML</title>
        </head>
        <body>

            <h1>Hello From Backend</h1>

            <p>GET requests: ${data.GET}</p>
            <p>POST requests: ${data.POST}</p>
            <p>PUT requests: ${data.PUT}</p>
            <p>DELETE requests: ${data.DELETE}</p>

        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
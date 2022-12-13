/*
Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine. 
It is used to develop I/O intensive web applications like video streaming sites, single-page applications,
 and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.
 */

/**
 * Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. 
 * It essentially means a Node.js based server never waits for an API to return data.  
 * The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

* Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

* Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. 
*Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. 
*Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

* No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.
 */

/**
 * REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell
 * Read,eval,print,loop
 */

/**
 * Control flow in programming is the order in which statement or function is executed or evaluated.
 * Most of the programming languages have linear control flow,execution of statement happens one after another 
 */

/**
 * Explain the steps how “Control Flow” controls the functions calls?
 *  Control the order of execution
 * Collect data
 *    Limit concurrency
  *Call the following step in the program.

 */

/**
    * setTimeout/clearTimeout – This is used to implement delays in code execution.
*setInterval/clearInterval – This is used to run a code block multiple times.
*setImmediate/clearImmediate – This is used to set the execution of the code at the end of the event loop cycle.
*process.nextTick – This is used to set the execution of code at the beginning of the next event loop cycle.
ex-1: console.log('first');
    setTimeout(() => {
        console.log('third');
    }, 0);
    setImmediate(() => {console.log('fourth');});
    process.nextTick(() => {
            console.log('second');
    });

ex-2: console.log('first');
    setTimeout(() => {
        console.log('fourth');
    }, 1000);
    setImmediate(() => {console.log('third');});
    process.nextTick(() => {
            console.log('second');
    });
    */


// Global objects => it can be accessed in all the modules
//console.log(process.argv) // process, console are also global objects
console.log(__dirname);
console.log(__filename);
console.log(Buffer.alloc(10));


/* event loop: https://www.knowledgehut.com/tutorials/node-js/node-js-events
*  call stack              event-loop               Api-block
**************************event queue***************************************
*When using Node.js, a special library module called libuv is used to perform async operations. 
This library is also used, together with the back logic of Node, to manage a special thread pool 
called the libuv thread pool.This thread pool is composed of four threads used to delegate operations 
that are too heavy for the event loop. I/O operations, Opening and closing connections, setTimeouts are the 
example of such operations.
*libuv: libuv is a C library originally written for Node.js to abstract non-blocking I/O
*So whenever asynchronous calls are observed during execution, those are moved to API block and 
the call stack is continued. When the asynchronous operation is done say setTimeout, the execution 
of call-backs is done by the event loop i.e. it moved the callback of setTimeout to Event Queue. And 
event loop will be keeping monitoring the call stack to get empty. And once it is empty then call back 
is pushed to call stack and executed. 
*/

/*
 * ***event loop order of operations
 * timers: Callbacks scheduled by setTimeout() or setInterval() are executed in this phase
 * pending call backs: I/O callbacks deferred to the next loop iteration are executed her
 * idle, ignore: Used internally only.
 * poll -> Retrieves new I/O events.
 * check: It invokes setIntermediate() callbacks.
 * close call back: It handles some close callbacks. Eg: socket.on(‘close’, …)
 */
let clearSetInterval = setInterval(() => {
    console.log("set interval")
}, 1000);
clearInterval(clearSetInterval);
let clearSetTimeout = setTimeout(() => {
    console.log("set timeout");
}, 1000);
clearTimeout(clearSetTimeout);

// setImmediate(()=>{
//     console.log("set immediate")
// })

/*errors in node
 *Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
 *System errors
 *User-specified errors
 *Assertion errors
 */

// DNS module
const dns = require('dns');
dns.lookup('www.javatpoint.com', (err, addresses, family) => {
    console.log('addresses:', addresses);
    console.log('family:', family);
});

// net module => Node.js provides the ability to perform socket programming
const net = require("net");
net.createServer((socket) => {
    socket.write("hello");
}).listen(4200);

// Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions
const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('Welcome to JavaTpoint')
    .digest('hex');
console.log(hash);

// debugger => node debug main.js

// process: provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc

// child process: The Node.js child process module provides the ability to spawn child processes. 
//which helps to run other processes in the current environment i.e. it can be used to communicate with other processes. 
const child = require('child_process');
child.exec("ls", (err, stdout, stderr) => {
    console.log(stdout);
})

// Buffer: Buffer class to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not nice to binary data. So, when dealing with TCP streams or the file system, it's necessary to handle octet streams.
const buff = Buffer.from("helllo", 'utf-8');
console.log(buff);
console.log(buff.toString())

/**
 * Streams are the objects that facilitate you to read data from a source and write data to a destination. There are four types of streams in Node.js:
 *Readable: This stream is used for read operations.
 *Writable: This stream is used for write operations.
 *Duplex: This stream can be used for both read and write operations.
 *Transform: It is type of duplex stream where the output is computed according to input.
 */

/**
 * Each type of stream is an Event emitter instance and throws several events at different times. Following are some commonly used events:

*Data:This event is fired when there is data available to read.
*End:This event is fired when there is no more data available to read.
*Error: This event is fired when there is any error receiving or writing data.
*Finish:This event is fired when all data has been flushed to underlying system.
 */

//  fs: file system moudle fs.readFile()
//  queryString module for params
// zlib: for zip and unzip functionaliity
// assert module is the most elementary way to write tests

/**event loop
 * Node.js uses event driven programming. It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for event to occur. It is the one of the reason why Node.js is pretty fast compared to other similar technologies.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.emit('data_received');
eventEmitter.on('data_received', () => {})


const http = require('http'); //create a server

const url = require('url'); // url module => req.url does not have direct access for query params and payload
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     console.log(url.parse(req.url))
//     res.end('hello')
// }).listen(8000);

// https
// var https = require("https");
// var fs = require("fs");
// var options = {
//     hostname: "en.wikipedia.org",
//     port: 443,
//     path: "/wiki/Sachin_Tendulkar",
//     method: "GET"
// };
// var req = https.request(options, function (res) {
//     var responseBody = "";
//     console.log("Response from server started.");
//     console.log(`Server Status: ${res.statusCode} `);
//     console.log("Response Headers: %j", res.headers);
//     res.setEncoding("UTF-8");
//     res.on("data", function (chunk) {
//         console.log(`--data length-- ${chunk.length}`);
//         responseBody += chunk;
//     });
//     res.on("end", function () {
//         fs.writeFile("Sachin-Tendulkar.html", responseBody, function (err) {
//             if (err) {
//                 throwerr;
//             }
//             console.log("File Downloaded");
//         });
//     });
// });
// req.on("error", function (err) {
//     console.log(err.message);
// });
// req.end();

// Hapi js

const express = require('express');
const app = express();


// create server

app.listen(3000, () => {
    console.log("server started");
})

/*app.listen(3000,"localhost",2,()=>{
    console.log("server created");
    // app.listen(port, [host], [backlog], [callback]])
    //A port number on which the server should accept incoming requests.
    //Name of the domain. You need to set it when you deploy your apps to the cloud.
    //The maximum number of queued pending connections. The default is 511.
    //An asynchronous function that is called when the server starts listening for requests.
})
*/

//routes

app.get('/', function (req, res) {
    res.send("Hello world!");
});

app.post('/post', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

app.get('id/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

app.get('/pattern/:id([0-9]{5})', function (req, res) { //pattern matched routes
    res.send('id: ' + req.params.id);
});

//  above routes are diffcult to maintain so we use express.Router module
const router = express.Router();
router.post('/', function (req, res) {
    res.send('route on things.');
});

app.use('/router', router);

// Middlewears or plugin

/*Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware
function in the application’ s request - response cycle.These functions are used to modify req and res objects
for tasks like parsing request bodies, adding response headers, etc.
*/

app.use("/test", function (req, res, next) { //if you don't mention route it will be excuted for all routes
    console.log("A new request received at " + Date.now());
    next();
});

// View Engine
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/static_view', function (req, res) {
    res.render('index');
});

app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {
        name: "TutorialsPoint",
        url: "http://www.tutorialspoint.com"
    });
});

// static file serve
/* 
Static files are files that clients download as they are from the server. Create a new directory, public. 
Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware.
*/
app.use('/static', express.static('public'));
// <script src = "/static/main.js" />


// Body parser

/*
Forms are an integral part of the web. Almost every website we visit offers us forms that submit or fetch some information for us. 
To get started with forms, we will first install the body-parser(for parsing JSON and url-encoded data) and multer(for parsing 
multipart/form data) middleware
*/

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use("/form", bodyParser.json()); //parsig json data


app.use("/form", bodyParser.urlencoded({
    extended: true
})); // for parsing application/xwww- or form-urlencoded


app.use("/form", upload.array()); // for parsing multipart/form-data

app.post("/form", function (req, res) {
    res.json(req.body);
});

// cookies

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', function (req, res) {
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
});

app.get('/clear_cookie', function (req, res) {
    res.clearCookie('name');
    res.send('cookie foo cleared');
});

//  sessions
const session = require('express-session');

app.use(session({
    secret: "Shh, its a secret!"
}));

app.get('/session', function (req, res) {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }
});

// authenctication

function checkSignIn(req, res, next) {
    req.session.user = "sriram";
    if (req.session.user) {
        next(); //If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        console.log(req.session.user);
        next(err); //Error, trying to access unauthorized page!
    }
}

app.get('/protected_page', checkSignIn, function (req, res) {
    res.render('index')
});

//  error handling

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//  DB

/**
 * MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++.
 * MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, 
 * and easy scalability. MongoDB works on concept of collection and document.
 */

/**
  * Advantages of MongoDB over RDBMS
  *Schema less − MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.

* Structure of a single object is clear.

* No complex joins.

* Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.

*Tuning.

*Ease of scale-out − MongoDB is easy to scale.

*Conversion/mapping of application objects to database objects not needed.

*Uses internal memory for storing the (windowed) working set, enabling faster access of data.
  */

//   create db: use mydb;
//   show data bases: show dbs;
//     drop data base: db.dropDatabase();
//    create collecions: db.createCollection(name,options);
/**
 * capped:	Boolean	(Optional) If true, enables a capped collection. Capped collection is a fixed size collection 
 * that automatically overwrites its oldest entries when it reaches its maximum size. If you specify true, 
 * you need to specify size parameter also.
 * autoIndexId:	Boolean	(Optional) If true, automatically create index on _id field.s Default value is false.
 *size:	number	(Optional) Specifies a maximum size in bytes for a capped collection. If capped is true, then you need to specify this field also.
 *max:	number	(Optional) Specifies the maximum number of documents allowed in the capped collection.
 */
//    drop collection: db.test.drop()
//data types: string, integer, boolean, double, min/max, array, timestamp, object,null,symbol, data, objeect id, binary data, code, regex
// insert docuemnt: db.COLLECTION_NAME.insert(document) or insertOne() or insertMany()
// read: db.COLLECTION_NAME.find();
// pretty: db.COLLECTION_NAME.find().pretty() in json format
// update: db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)
//ex: db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})
/*db.mycol.update({'title':'MongoDB Overview'},
   {$set:{'title':'New MongoDB Tutorial'}},{multi:true}) */
//db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
// update is for updating values
// save is for updating the document
//delete: db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)
// truncate: db.mycol.remove({})
// find().limit(number)=> limit the records
// find().limit(number).skip(number)
// sort: db.COLLECTION_NAME.find().sort({KEY:1})
//index: db.COLLECTION_NAME.createIndex({KEY:1}) and db.COLLECTION_NAME.dropIndex()
// replica: mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"
//Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth
//backup: mongodump => stroe the data in dump dir
// restore: mongorestore => restore the data
// aggregate: db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
/**
 * the formation of a number of things into a cluster
 * $sum,$avg,$min,$max,$push,$addToSet,$first,$last
 * Pipeline Concept: $project,$match, $group,$sort,$skip, $limit, $unwind
 * db.mycol.aggregate([{ $group : {_id : "$by_user", last_url : {$last : "$url"}} }])
 * below is for find();
 * =: find({'name': 'sriram'})
 * <: find({'id': {'$lt':50}})
 * <=: lte
 * > :gt
 * >=: gte
 * !=: ne
 * and,or,not,nor => {$and : [ ]}
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sriram');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);
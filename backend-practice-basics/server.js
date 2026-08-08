/* The address of this server connected to the internet is:
URL -> http://localhost:8383
IP -> 127.0.0.1:8383 */

const express = require("express");
const app = express();
const PORT = 8383;

let data = ["james"];

/* MIDDLEWARE */
app.use(express.json());

/* Together this create an ENDPOINT - (Cannot GET /) Add HTTP VERBS same thing as (method) and Routes or paths 
The method informs the nature of request and the route is a further
subdirectory (basically we direct the request to the body of code to respond
appropriately, and these location or routes are called endpoints). */

/* TYPE 1 - Website endpoints (this are for sending back html and they come when a user enters a url in the browser). */

app.get("/", (req, res) => {
   console.log("User requested the home page website");
   /* this is endpoint number 1 */
   res.send(`
      <body style="background:pink;
      color:blue;">
         <h1>DATA:</h1>
         <p>${JSON.stringify(data)}</p>
         <a href="/dashboard">Dashboard</a>
      </body>
      <script>console.log("This is my script")</script>
      `);
});

app.get("/dashboard", (req, res) => {
   res.send(`
      <body>
         <h1>Dashboard Page</h1>
         <a href="/">Home</a>
      </body>
      `);
});

/* TYPE 2 - API endpoints (non-visual or something like when we send our username and password behind the scene). */
/* CRUD-method create(post) read(get) update(put) and delete(delete method) */
app.get("/api/data", (req, res) => {
   console.log("This one was for data");
   res.status(599).send(data);
});

app.post("/api/data", (req, res) => {
   /* When someone want to create a user (for example when they click the sign-up button)
   The user clicks the sign up button after entering their credentials, and
   their browser is wired up to send out a network request to the server to hanlde that action. */
   const newEntry = req.body;

   console.log(newEntry);

   data.push(newEntry.name);

   res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
   data.pop();
   console.log("deleted the element at the end of the array");
   res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));

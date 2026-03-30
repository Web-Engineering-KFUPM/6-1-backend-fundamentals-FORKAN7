// TODO 1: Import Express


// TODO 2: Create the Express app and store it in a variable named app
const app = express();


// TODO 3: Allow React to access the server
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}); 






// TODO 5: Create the home route "/"
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});





// TODO 6: Create the "/about" route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// TODO 7: Create the "/student" route


// TODO 4: Start the server on port 3000


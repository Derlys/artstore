let express = require("express"),
  cors = require("cors");
const req = require("express");
let app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("server running on port 3000"));

let ciudades = [
  "Paris",
  "Barcelona",
  "Barranquilla",
  "Monte video",
  "Santiago de chile",
  "Mexico DF",
  "Nueva York",
];
app.get("/ciudades", (req, res, next) =>
  res.json(
    ciudades.filter(
      (c) => c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1
    )
  )
);

let misProducts = [];
app.get("/my", (req, res, next) => res.json(misProducts));
req.body.nuevo = undefined;
app.post("/my", (req, res, next) => {
  console.log(req.body);
  misProducts.push(req.body.nuevo);
  res.json(misProducts);
});

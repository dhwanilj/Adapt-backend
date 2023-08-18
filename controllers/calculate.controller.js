const { StatusCodes } = require("http-status-codes");
const NodeStl = require("node-stl");
const path = require("path");

const calculateMass = async (req, res) => {
  const { name, quantity, file, printer, material, box} = req.body;
  let density;

  if (material === "Nylon12") {
    density = 1.015; // Density value for Nylon12
  } else if (material === "Aluminium") {
    density = 2.7; // Density value for Metal
    // Add more cases as needed for other materials
  } 
  let stl = new NodeStl(path.join(__dirname, "../uploads", `${file}`), {
    density,
  });

  console.log(path.join(__dirname, "../uploads", `${file}`));

  return res.status(StatusCodes.OK).json({ name, quantity, stl, printer, material, box });
};

module.exports = { calculateMass };

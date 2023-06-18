const express = require("express");
const app = express();
const { matrixProduct } = require("./test");

app.get("/", function (req, res) {
  res.status(200).send("A api esta online");
});

app.get("/matriz", async function (req, res) {
  const matrix1 = req.query.matrix1;
  const matrix2 = req.query.matrix2;
  matrixProduct(matrix1, matrix2).then((result) => {
    res.status(200).json({
      status: true,
      msg: "Sucesso",
      result,
    });
  });
});

app.listen(3000);

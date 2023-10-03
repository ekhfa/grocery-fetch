const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:9090"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/hello", (req, res) => {
  try {
    res.send({ msg: "hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/product/create", async (req, res) => {
  try {
    let { title, categories, description, price, images } = req.body;

    price = parseFloat(price);

    const product = await prisma.product.create({
      data: {
        title,
        categories,
        description,
        price,
        images,
      },
    });

    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For getting all the products
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

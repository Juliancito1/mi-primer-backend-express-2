import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 3000; 


app.use(express.json()); 
app.use(morgan("dev"));
app.use(cors());



app.get("/", (req, res) => {
  res.send("Hola Mundo")
  // res.json({message: "Hola Mundo"});
});

app.get("/productos", (req, res) => {
  res.send("Lista Productos")
  // res.json({
  //   productos: [
  //     {id: 1, nombre: "Producto 1", precio: 10.99},
  //     {id: 2, nombre: "Producto 2", precio: 19.99},
  //     {id: 3, nombre: "Producto 3", precio: 5.99}
  //   ]
  // });
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando desde el puerto ${PORT}`);
})


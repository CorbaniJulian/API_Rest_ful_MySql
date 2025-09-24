import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Rest ful");
});


app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
res.send("post")
});

app.put("/users", (req, res) => {
res.send("put")
});

app.delete("/users", (req, res) => {
  res.send("delete")
});
app.use((req,res)=>{
res.status(404).send("pagina inexistente")
})

app.listen(PORT, () => {
  console.log(`servidor de piola en http://localhost:${PORT}`);
});
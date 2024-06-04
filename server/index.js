const express = require("express");
const mongose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
// const userRouter = require("./routes/user");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
// app.use("/user", userRouter);
app.get("/", (req, res) => res.json({ msg: "Hello From The Express Server" }));

mongose.connect(
  "mongodb+srv://nbanerjee02asn:8Qt1zuOKS97nXqhV@cluster0.vg0jben.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }
);

app.listen(PORT, () => console.log(`App Started On Port ${PORT}`));

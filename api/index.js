const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const socket = require("socket.io");

const authRoute = require("./routes/auth");
const authRoutes = require("./routes/chatauth");
const messageRoutes = require("./routes/messages");
const clientauthRoute = require("./routes/client_auth");
const lawyerRoute = require("./routes/lawyer");
const caseRoute = require("./routes/case");
const teamRoute = require("./routes/team");
const clientRoute = require("./routes/client");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/clientAuth", clientauthRoute);
app.use("/api/lawyers", lawyerRoute);
app.use("/api/cases", caseRoute);
app.use("/api/client", clientRoute);
app.use("/api/team", teamRoute);
app.use("/api/chatauth", authRoutes);
app.use("/api/messages", messageRoutes);

const server = app.listen(process.env.port, () => {
  console.log("Backend is running.");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

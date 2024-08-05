const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/charges-by-tenants", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Database successfully connected ✅"))
.catch((err) => console.error("Mongodb connection failed ❌", err));

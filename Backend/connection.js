const mongoose = require("mongoose");
//updated here
mongoose
  .connect(
   "mongodb+srv://killerbean:killerbean@cluster0.bir4ggo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

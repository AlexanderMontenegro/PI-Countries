const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = 3001;

conn.sync({ force: true }).then(() => {

server.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))

import express from "express"
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"
/**
 * Connect on mongoDB
 */
db.on("error", console.log.bind(console, 'Erro de conexão: '))
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso.")
})
/**
 * Start to use express and routes
 */
const app = express();
app.use( express.json() )
routes(app);

export default app
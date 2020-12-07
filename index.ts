import { Application } from "./dependencies.ts"
import $ from "./router.ts"

// Server and Router
const app = new Application()

// Middlewares
app.use( $.routes() )
app.use( $.allowedMethods() ) // GET, POST, PUT, DELETE

// Listen
console.log( "Listening on http://localhost:3000" )
await app.listen({ port: 3000 })


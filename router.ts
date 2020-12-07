import { Router } from "./dependencies.ts"

const $ = new Router()

// Routes
$.get( "/", ({ response }) => {
    response.body = "Hello from Deno!"
})

$.get( "/users/:id", ({ response, params }) => {
    const { id } = params

    response.body = {
        id,
        name: "Diego",
        email: "diego.ulloa@outlook.com"
    }
})

export default $

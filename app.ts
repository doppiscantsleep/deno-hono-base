import { Hono } from "jsr:@hono/hono"
const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

Deno.serve(app.fetch)
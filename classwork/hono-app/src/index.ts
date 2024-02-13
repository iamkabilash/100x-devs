import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("hello"));
  return c.text("Hello Hono");
});

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    next();
  } else {
    return c.text("Not authorized");
  }
}

app.use(authMiddleware);

export default app;

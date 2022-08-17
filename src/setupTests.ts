import { setupServer } from "msw/node";
import { rest } from "msw";
import "@testing-library/jest-dom";

const server = setupServer(
  rest.post("/login", async (req, res, ctx) => {
    const body = await req.text();
    const params = new URLSearchParams(body);
    if (
      params.get("username") === "admin" &&
      params.get("password") === "admin"
    ) {
      return res(ctx.status(200));
    } else {
      return res(ctx.status(401));
    }
  })
);

beforeAll(async () => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => server.resetHandlers());

afterAll(async () => {
  server.close();
});

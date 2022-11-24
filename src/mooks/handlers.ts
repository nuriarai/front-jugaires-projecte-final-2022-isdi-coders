import { rest } from "msw";
import { UserRegisterData } from "../types/types";

const urlApi = process.env.REACT_APP_API;

const handlers = [
  rest.post(`${urlApi}/users/register`, async (req, res, ctx) => {
    const user = await req.json<UserRegisterData>();
    const { username } = user;

    if (username === "registeredUser") {
      return res(
        ctx.status(409),
        ctx.json({ error: "Aquest usuari ja està registrat" })
      );
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),
];

export default handlers;

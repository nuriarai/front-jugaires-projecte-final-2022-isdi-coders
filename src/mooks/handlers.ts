import { rest } from "msw";
import { UserCredentialsData, UserRegisterData } from "../types/types";
import { mockGamesList, mockGamesListOfFive } from "./mocksGames";

const urlApi = process.env.REACT_APP_API;

const { id } = mockGamesListOfFive[0];

const mockOfOne = mockGamesListOfFive[3];

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

  rest.post(`${urlApi}/users/login`, async (req, res, ctx) => {
    const UserLoginData = await req.json<UserCredentialsData>();
    const { password } = UserLoginData;

    if (password !== "adminadmin") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Usuari o password incorrecte" })
      );
    }

    return res(ctx.status(201), ctx.json({ token: "adminToken" }));
  }),

  rest.get(`${urlApi}/games/games`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockGamesList));
  }),

  rest.get(`${urlApi}/games/games`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No s'ha pogut carregar el llistat de partides" })
    );
  }),

  rest.get(`${urlApi}/games/games?page=1`, async (req, res, ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({
        isPreviousPage: false,
        isNextPage: true,
        totalPages: 3,
        games: mockGamesList,
      })
    );
  }),

  rest.delete(`${urlApi}/games/delete/${id}`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json("Partida esborrada"));
  }),

  rest.delete(`${urlApi}/games/delete/${id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No s'ha pogut esborrar la partida" })
    );
  }),

  rest.post(`${urlApi}/games/create`, async (req, res, ctx) => {
    return res.once(ctx.status(201), ctx.json({ mockOfOne }));
  }),

  rest.post(`${urlApi}/games/create`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No s'ha pogut crear la partida." })
    );
  }),

  rest.get(`${urlApi}/games/game/${mockOfOne.id}`, async (req, res, ctx) => {
    const game = mockOfOne;
    return res.once(ctx.status(200), ctx.json({ game }));
  }),

  rest.get(`${urlApi}/games/game/${mockOfOne.id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "No s'ha trobat aquesta partida" })
    );
  }),
];

export default handlers;

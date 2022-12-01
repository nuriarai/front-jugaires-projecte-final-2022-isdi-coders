import { renderHook } from "@testing-library/react";
import localStorageMock from "../../mooks/mockLocalStorage";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import useToken from "./useToken";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Given a useToken custom hook", () => {
  describe("When its method deleteToken is invoked and there is the token 'token' in local storage", () => {
    test("Then the token should be removed from local storage", async () => {
      const { result } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      await result.current.deleteToken();

      expect(localStorageMock.getItem("token")).toBe(undefined);
    });
  });
});

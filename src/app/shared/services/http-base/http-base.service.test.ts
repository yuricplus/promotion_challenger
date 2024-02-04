import axios from "axios";
import { HttpBaseService } from "./http-base.service";


jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: () => {
          return Promise.resolve({
            data: {
              price: 1,
              name: 'Produto Teste',
              id: 2
            }
          })
        },
      }
    }
  }
});

describe("HttpBaseService", () => {
  it("should return data from the API", async () => {

    const service = new HttpBaseService();
    const response = await service.get("https://api.example.com/data");

    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("price");
    expect(response).toHaveProperty("name");
  });
});
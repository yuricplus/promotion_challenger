import axios from "axios";
import { HttpBaseService } from "./http-base.service";

describe("GetService", () => {
  it("should return data from the API", async () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({id: '', titulo: ''}))
    const service = new HttpBaseService();
    const data = await service.get("https://api.example.com/data");

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("titulo");
  });
});
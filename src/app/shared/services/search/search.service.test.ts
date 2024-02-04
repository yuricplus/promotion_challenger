import { SearchService } from "./search.service";


jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: () => {
          return Promise.resolve({
            data: {
              price: 1,
              name: 'Produto Teste',
              id: 2,
              description: ''
            }
          })
        },
      }
    }
  }
});

describe("HttpBaseService", () => {
  const service = new SearchService();

  it("should return search from the API", async () => {
    const response = await service.searchProducts('Xbox', 1);

    expect(response).toHaveProperty("id");
  });

  it("should return search category from the API", async () => {
    const response = await service.searchCategory();
    expect(response).toHaveProperty("id");
  });

  it("should return search category from the API", async () => {
    const response = await service.getDescription('1');
    expect(response).toHaveProperty("description");
  });

  it("should return search details from the API", async () => {
    const response = await service.getProductsDetails('1');
    expect(response).toHaveProperty("price");
  });
});
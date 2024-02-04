import { formatPrice } from "./currency-format.service";

describe("GetService", () => {
    it("should format number to currency", () => {
        const value = formatPrice(42);
        expect(value).toBeTruthy()
    });
});
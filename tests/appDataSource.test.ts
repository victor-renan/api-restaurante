import { describe, expect, test } from "@jest/globals";
import { dataSource } from "../src/models/appDataSource";

describe('ASDF', () => {
    test('Valores devem bater', () => {
        expect(typeof(dataSource)).toBe("object");
    });
});
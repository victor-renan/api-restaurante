"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const appDataSource_1 = require("../src/models/appDataSource");
(0, globals_1.describe)('ASDF', () => {
    (0, globals_1.test)('Valores devem bater', () => {
        (0, globals_1.expect)(typeof (appDataSource_1.dataSource)).toBe("object");
    });
});
//# sourceMappingURL=appDataSource.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroMiddlaware = void 0;
const AppError_1 = require("../errors/AppError");
const erroMiddlaware = (err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: res.message,
        });
    }
};
exports.erroMiddlaware = erroMiddlaware;
//# sourceMappingURL=errosMiddlaware.js.map
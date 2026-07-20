"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStock = exports.updateStock = exports.getStock = exports.getStocks = exports.createStock = void 0;
const service = __importStar(require("./stock.service"));
const createStock = async (req, res, next) => {
    try {
        const stock = await service.createStock(req.body);
        res.status(201).json(stock);
    }
    catch (err) {
        next(err);
    }
};
exports.createStock = createStock;
// export const getStocks = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const stocks = await service.getAllStock();
//     res.json(stocks);
//   } catch (err) {
//     next(err);
//   }
// };
const getStocks = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const pageSize = Number(req.query.pageSize) || 50;
        const search = req.query.search || undefined;
        const type = req.query.type || undefined;
        const [stocks, total] = await service.getAllStock(page, pageSize, { search, type });
        res.json({ stocks, total, page, pageSize });
    }
    catch (err) {
        next(err);
    }
};
exports.getStocks = getStocks;
const getStock = async (req, res, next) => {
    try {
        const stock = await service.getStockById(Number(req.params.id));
        res.json(stock);
    }
    catch (err) {
        next(err);
    }
};
exports.getStock = getStock;
const updateStock = async (req, res, next) => {
    try {
        const stock = await service.updateStock(Number(req.params.id), req.body);
        res.json(stock);
    }
    catch (err) {
        next(err);
    }
};
exports.updateStock = updateStock;
const deleteStock = async (req, res, next) => {
    try {
        await service.deleteStock(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteStock = deleteStock;
//# sourceMappingURL=stock.controller.js.map
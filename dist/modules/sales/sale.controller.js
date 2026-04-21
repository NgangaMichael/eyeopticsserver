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
exports.deleteSale = exports.updateSale = exports.getSale = exports.getSales = exports.createSale = void 0;
const service = __importStar(require("./sale.service"));
const createSale = async (req, res, next) => {
    try {
        const sale = await service.createSale(req.body);
        res.status(201).json(sale);
    }
    catch (err) {
        next(err);
    }
};
exports.createSale = createSale;
const getSales = async (req, res, next) => {
    try {
        const sales = await service.getAllSales();
        res.json(sales);
    }
    catch (err) {
        next(err);
    }
};
exports.getSales = getSales;
const getSale = async (req, res, next) => {
    try {
        const sale = await service.getSaleById(Number(req.params.id));
        res.json(sale);
    }
    catch (err) {
        next(err);
    }
};
exports.getSale = getSale;
const updateSale = async (req, res, next) => {
    try {
        const updated = await service.updateSale(Number(req.params.id), req.body);
        res.json(updated);
    }
    catch (err) {
        next(err);
    }
};
exports.updateSale = updateSale;
const deleteSale = async (req, res, next) => {
    try {
        await service.deleteSale(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=sale.controller.js.map
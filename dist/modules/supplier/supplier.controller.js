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
exports.deleteSupplier = exports.updateSupplier = exports.getSupplier = exports.getSuppliers = exports.createSupplier = void 0;
const service = __importStar(require("./supplier.service"));
const createSupplier = async (req, res, next) => {
    try {
        const supplier = await service.createSupplier(req.body);
        res.status(201).json(supplier);
    }
    catch (err) {
        next(err);
    }
};
exports.createSupplier = createSupplier;
const getSuppliers = async (req, res, next) => {
    try {
        const suppliers = await service.getAllSuppliers();
        res.json(suppliers);
    }
    catch (err) {
        next(err);
    }
};
exports.getSuppliers = getSuppliers;
const getSupplier = async (req, res, next) => {
    try {
        const supplier = await service.getSupplierById(Number(req.params.id));
        res.json(supplier);
    }
    catch (err) {
        next(err);
    }
};
exports.getSupplier = getSupplier;
const updateSupplier = async (req, res, next) => {
    try {
        const supplier = await service.updateSupplier(Number(req.params.id), req.body);
        res.json(supplier);
    }
    catch (err) {
        next(err);
    }
};
exports.updateSupplier = updateSupplier;
const deleteSupplier = async (req, res, next) => {
    try {
        await service.deleteSupplier(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteSupplier = deleteSupplier;
//# sourceMappingURL=supplier.controller.js.map
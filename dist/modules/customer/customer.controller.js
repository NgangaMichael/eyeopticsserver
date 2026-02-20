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
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomers = void 0;
const service = __importStar(require("./customer.service"));
/* =========================
   GET ALL CUSTOMERS
   ========================= */
const getCustomers = async (req, res, next) => {
    try {
        const customers = await service.getAllCustomers();
        res.json(customers);
    }
    catch (err) {
        next(err);
    }
};
exports.getCustomers = getCustomers;
/* =========================
   CREATE CUSTOMER
   ========================= */
const createCustomer = async (req, res, next) => {
    try {
        const customer = await service.createCustomer(req.body);
        res.status(201).json(customer);
    }
    catch (err) {
        next(err);
    }
};
exports.createCustomer = createCustomer;
/* =========================
   UPDATE CUSTOMER
   ========================= */
const updateCustomer = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const customer = await service.updateCustomer(id, req.body);
        res.json(customer);
    }
    catch (err) {
        next(err);
    }
};
exports.updateCustomer = updateCustomer;
/* =========================
   DELETE CUSTOMER
   ========================= */
const deleteCustomer = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        await service.deleteCustomer(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customer.controller.js.map
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
exports.deleteOrder = exports.updateOrder = exports.getOrder = exports.getOrders = exports.createOrder = void 0;
const service = __importStar(require("./order.service"));
const createOrder = async (req, res, next) => {
    try {
        const order = await service.createOrder(req.body);
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
};
exports.createOrder = createOrder;
const getOrders = async (req, res, next) => {
    try {
        const orders = await service.getAllOrders();
        res.json(orders);
    }
    catch (err) {
        next(err);
    }
};
exports.getOrders = getOrders;
const getOrder = async (req, res, next) => {
    try {
        const order = await service.getOrderById(Number(req.params.id));
        res.json(order);
    }
    catch (err) {
        next(err);
    }
};
exports.getOrder = getOrder;
const updateOrder = async (req, res, next) => {
    try {
        const order = await service.updateOrder(Number(req.params.id), req.body);
        res.json(order);
    }
    catch (err) {
        next(err);
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res, next) => {
    try {
        await service.deleteOrder(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=order.controller.js.map
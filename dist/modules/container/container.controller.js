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
exports.receiveContainer = exports.deleteItem = exports.bulkAddItems = exports.addItem = exports.deleteContainer = exports.updateItem = exports.updateContainer = exports.getContainer = exports.getContainers = exports.createContainer = void 0;
const service = __importStar(require("./container.service"));
const createContainer = async (req, res, next) => {
    try {
        const container = await service.createContainer(req.body);
        res.status(201).json(container);
    }
    catch (err) {
        next(err);
    }
};
exports.createContainer = createContainer;
const getContainers = async (req, res, next) => {
    try {
        const containers = await service.getAllContainers();
        res.json(containers);
    }
    catch (err) {
        next(err);
    }
};
exports.getContainers = getContainers;
const getContainer = async (req, res, next) => {
    try {
        const container = await service.getContainerById(Number(req.params.id));
        res.json(container);
    }
    catch (err) {
        next(err);
    }
};
exports.getContainer = getContainer;
const updateContainer = async (req, res, next) => {
    try {
        const container = await service.updateContainer(Number(req.params.id), req.body);
        res.json(container);
    }
    catch (err) {
        next(err);
    }
};
exports.updateContainer = updateContainer;
const updateItem = async (req, res, next) => {
    try {
        const item = await service.updateContainerItem(Number(req.params.id), Number(req.params.itemId), req.body);
        res.json(item);
    }
    catch (err) {
        next(err);
    }
};
exports.updateItem = updateItem;
const deleteContainer = async (req, res, next) => {
    try {
        await service.deleteContainer(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteContainer = deleteContainer;
const addItem = async (req, res, next) => {
    try {
        const item = await service.addItemToContainer(Number(req.params.id), req.body);
        res.status(201).json(item);
    }
    catch (err) {
        next(err);
    }
};
exports.addItem = addItem;
const bulkAddItems = async (req, res, next) => {
    try {
        const result = await service.bulkAddItems(Number(req.params.id), req.body.items);
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.bulkAddItems = bulkAddItems;
const deleteItem = async (req, res, next) => {
    try {
        await service.deleteContainerItem(Number(req.params.id), Number(req.params.itemId));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteItem = deleteItem;
const receiveContainer = async (req, res, next) => {
    try {
        const container = await service.receiveContainer(Number(req.params.id));
        res.json(container);
    }
    catch (err) {
        next(err);
    }
};
exports.receiveContainer = receiveContainer;
//# sourceMappingURL=container.controller.js.map
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
exports.receiveContainer = exports.deleteContainerItem = exports.bulkAddItems = exports.addItemToContainer = exports.deleteContainer = exports.updateContainerItem = exports.updateContainer = exports.getContainerById = exports.getAllContainers = exports.createContainer = void 0;
const repo = __importStar(require("./container.repository"));
const createContainer = async (data) => {
    return repo.createContainer(data);
};
exports.createContainer = createContainer;
const getAllContainers = async () => {
    return repo.getAllContainers();
};
exports.getAllContainers = getAllContainers;
const getContainerById = async (id) => {
    const container = await repo.getContainerById(id);
    if (!container)
        throw { status: 404, message: "Container not found" };
    return container;
};
exports.getContainerById = getContainerById;
const updateContainer = async (id, data) => {
    const container = await repo.getContainerById(id);
    if (!container)
        throw { status: 404, message: "Container not found" };
    if (container.status === "received")
        throw { status: 403, message: "Cannot edit a received container" };
    return repo.updateContainer(id, data);
};
exports.updateContainer = updateContainer;
const updateContainerItem = async (containerId, itemId, data) => {
    const container = await repo.getContainerById(containerId);
    if (!container)
        throw { status: 404, message: "Container not found" };
    // Prevent editing if already received
    if (container.status === "received") {
        throw { status: 403, message: "Cannot edit items in a received container" };
    }
    return repo.updateContainerItem(itemId, data);
};
exports.updateContainerItem = updateContainerItem;
const deleteContainer = async (id) => {
    const container = await repo.getContainerById(id);
    if (!container)
        throw { status: 404, message: "Container not found" };
    if (container.status === "received")
        throw { status: 403, message: "Cannot delete a received container" };
    return repo.deleteContainer(id);
};
exports.deleteContainer = deleteContainer;
const addItemToContainer = async (containerId, item) => {
    const container = await repo.getContainerById(containerId);
    if (!container)
        throw { status: 404, message: "Container not found" };
    // if (container.status === "received") throw { status: 403, message: "Cannot add items to a received container" };
    return repo.addItemToContainer(containerId, item);
};
exports.addItemToContainer = addItemToContainer;
const bulkAddItems = async (containerId, items) => {
    const container = await repo.getContainerById(containerId);
    if (!container)
        throw { status: 404, message: "Container not found" };
    // if (container.status === "received") throw { status: 403, message: "Cannot add items to a received container" };
    if (!items || items.length === 0)
        throw { status: 400, message: "No items provided" };
    return repo.bulkAddItems(containerId, items);
};
exports.bulkAddItems = bulkAddItems;
const deleteContainerItem = async (containerId, itemId) => {
    const container = await repo.getContainerById(containerId);
    if (!container)
        throw { status: 404, message: "Container not found" };
    if (container.status === "received")
        throw { status: 403, message: "Cannot remove items from a received container" };
    return repo.deleteContainerItem(itemId);
};
exports.deleteContainerItem = deleteContainerItem;
const receiveContainer = async (id) => {
    return repo.receiveContainer(id);
};
exports.receiveContainer = receiveContainer;
//# sourceMappingURL=container.service.js.map
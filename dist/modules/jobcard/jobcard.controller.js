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
exports.deleteJobCard = exports.updateJobCard = exports.getJobCard = exports.getJobCards = exports.createJobCard = void 0;
const service = __importStar(require("./jobcard.service"));
const createJobCard = async (req, res, next) => {
    try {
        const card = await service.createJobCard(req.body);
        res.status(201).json(card);
    }
    catch (err) {
        next(err);
    }
};
exports.createJobCard = createJobCard;
const getJobCards = async (req, res, next) => {
    try {
        const cards = await service.getAllJobCards();
        res.json(cards);
    }
    catch (err) {
        next(err);
    }
};
exports.getJobCards = getJobCards;
const getJobCard = async (req, res, next) => {
    try {
        const card = await service.getJobCardById(Number(req.params.id));
        res.json(card);
    }
    catch (err) {
        next(err);
    }
};
exports.getJobCard = getJobCard;
const updateJobCard = async (req, res, next) => {
    try {
        const card = await service.updateJobCard(Number(req.params.id), req.body);
        res.json(card);
    }
    catch (err) {
        next(err);
    }
};
exports.updateJobCard = updateJobCard;
const deleteJobCard = async (req, res, next) => {
    try {
        await service.deleteJobCard(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteJobCard = deleteJobCard;
//# sourceMappingURL=jobcard.controller.js.map
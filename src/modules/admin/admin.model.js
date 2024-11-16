"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const mongoose_1 = require("mongoose");
// Interfaces
// Mongoose Schema
const ScheduleSchema = new mongoose_1.Schema({
    className: {
        type: String,
        required: true,
        trim: true,
    },
    trainer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
        default: 10,
    },
    trainees: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
}, {
    timestamps: true,
});
exports.Schedule = (0, mongoose_1.model)("Schedule", ScheduleSchema);

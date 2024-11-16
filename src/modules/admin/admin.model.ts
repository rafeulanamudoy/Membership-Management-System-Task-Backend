import { Schema, model, Document } from "mongoose";
import { ISchedule } from "./admin.interface";

// Interfaces

// Mongoose Schema
const ScheduleSchema = new Schema<ISchedule>(
  {
    className: {
      type: String,
      required: true,
      trim: true,
    },
    trainer: {
      type: Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    date: {
      type: Date,
      required: true,
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
        type: Schema.Types.ObjectId,
        ref: "Trainee",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Schedule = model<ISchedule>("Schedule", ScheduleSchema);

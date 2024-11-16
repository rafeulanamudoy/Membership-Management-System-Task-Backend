import { Schema } from "mongoose";

// Interfaces
export type ISchedule = {
  className: string;
  trainer: Schema.Types.ObjectId; // Reference to Trainer model
  date: Date;
  duration: number; // In minutes
  maxCapacity: number;
  trainees: Schema.Types.ObjectId[]; // Reference to Trainee model
  // Reference to Admin model
};

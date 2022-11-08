const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

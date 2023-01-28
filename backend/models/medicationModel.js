const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dosage: {
      type: Number,
      required: true,
    },
    times_taken: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medication", medicationSchema);

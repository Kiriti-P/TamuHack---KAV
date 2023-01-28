const express = require("express");
const {
  createMedication,
  getMedication,
  getMedications,
  deleteMedication,
  updateMedication,
} = require("../controllers/medicationController");

const router = express.Router();

// GET all medications
router.get("/", getMedications);

// GET a single medication
router.get("/:id", getMedication);

// POST a new medication
router.post("/", createMedication);

// DELETE a medication
router.delete("/:id", deleteMedication);

// UPDATE a medication
router.patch("/:id", updateMedication);

module.exports = router;

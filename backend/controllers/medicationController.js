const Medication = require("../models/medicationModel");
const mongoose = require("mongoose");

// get all medication
const getMedications = async (req, res) => {
  const medications = await Medication.find({}).sort({ createdAt: -1 });

  res.status(200).json(medications);
};

// get single medication
const getMedication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medication" });
  }
  const medication = await Medication.findById(id);
  if (!medication) {
    return res.status(404).json({ error: "No such medication" });
  }

  res.status(200).json(medication);
};

// create new medication
const createMedication = async (req, res) => {
  const { title, dosage, times_taken } = req.body;

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({error: "Please fill in all the fields", emptyFields })
  }


  // add doc to db
  try {
    const medication = await Medication.create({ title, dosage, times_taken });
    res.status(200).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteMedication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medication" });
  }

  const medication = await Medication.findOneAndDelete({ _id: id });

  if (!medication) {
    return res.status(40).json({ error: "No such medication" });
  }
  res.status(200).json(medication);
};

//update a workout
const updateMedication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medication" });
  }
  const medication = await Medication.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!medication) {
    return res.status(40).json({ error: "No such medication" });
  }
  res.status(200).json(medication);
};

module.exports = {
  getMedications,
  getMedication,
  createMedication,
  deleteMedication,
  updateMedication,
};

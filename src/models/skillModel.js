const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;

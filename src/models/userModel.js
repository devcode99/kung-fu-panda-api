const mongoose = require("mongoose");

/**
 * USER SCHEMA
 */
const UserSchema = mongoose.Schema(
  {
    // user profile image
    profile: String,

    // Name Data
    firstName: String,
    middleName: String,
    lastName: String,

    gender: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    DOB: { type: Date, required: false },
    bloodGroup: String,

    // Contact information
    contact: String,
    emergencyContact: String,

    // Address information
    permanentAddress: String,
    livingAddress: String,

    DOJ: { type: Date, required: false },

    employeeId: { type: Number, unique: true, required: true, index: true },
    employeeType: {
        type: String,
        require: true,
        enums: ["trainee", "employee"]
    },
    weekOff: String,
    reference: String,
    recruitment: {
        type: String,
        default: "campus",
        enums: ["campus", "direct"]
    },
    notification: Boolean,

    // Past company data for employee
    companyDetails: [{
      companyName: String,
      technology: String,
      yearOfExperience: Number,
    }],

    // College data for trainee
    collegeDetails: [{
      instituteName: String,
      fieldName: String,
      passingYear: String,
      CGPA: Number,
    }],

    // Store the skills (learning for trainee) id
    // TODO: Need to update the controller logic to store the skill ids
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ],

    status: {
      label: String,
      color: String,
      bgColor: String,
    },

    emergencyContactDetails: [{
        name: String,
        relationship: String,
        contact: String,
    }],

    // Language data of the user
    // TODO: Need to fix the language key as name for the inside one
    language: [{ // language -> languages
      language: String, // language -> name
      fluency: String,
      competency: String,
    }],

    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
      }
    ],
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

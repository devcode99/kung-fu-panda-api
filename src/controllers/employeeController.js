const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function create(req, res, next) {
  try {
    const { password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const oldUser = await User.findOne({ email: req.body.email });
    if (oldUser) {
      return res.send({ success: false, error: "User already exists" });
    }
    await User.create({
      ...req.body,
      password: encryptedPassword,
      confirmPassword: encryptedPassword,
      skills: [],
      createdDate: new Date(),
      lastUpdated: new Date(),
      status: { label: "Active", color: "#000000", bgColor: "#FFFFFF" },
    });
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, error: "User not registered, try again!", error: error });
  }
}

async function getAll(req, res, next) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await User.findOne({ employeeId: req.params.id });
    delete user.password;
    delete user.confirmPassword;
    res.send(user);
  } catch (error) {
    next(error);
  }
}

async function filterEmployees(req, res, next) {
  try {
    const { employeeName, employeeID, type, status, offset = 0, limit = 5 } = req.body;
    let data = [];
    if (employeeName?.length > 0) data.push({ _id: { $in: employeeName } });
    if (employeeID) data.push({ employeeId: { $eq: employeeID } });
    if (type?.length > 0) data.push({ employeeType: { $in: type } });
    if (status?.length > 0) data.push({ status: { $in: status } });
    const usersDetails = await User.find(data?.length > 0 ? { $and: data } : {}).skip(offset).limit(limit);
    const usersCount = await User.find(data?.length > 0 ? { $and: data } : {});
    res.send({ data: usersDetails, count: usersCount?.length ?? 0 });
  } catch (error) {
    next(error);
  }
}

async function updatePersonalDetails(req, res, next) {
  try {
    const { firstName, middleName, lastName, gender, DOB, employeeId } = req.body;
    const result = { firstName, middleName, lastName, gender, DOB };
    const query = { employeeId };
    const update = { $set: result };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function updateContactDetails(req, res, next) {
  try {
    const { livingAddress, permanentAddress, email, contact, employeeId } = req.body;
    const result = { livingAddress, permanentAddress, email, contact };
    const query = { employeeId };
    const update = { $set: result };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function insertEmergencyContactDetails(req, res, next) {
  try {
    const { details, employeeId } = req.body;
    const query = { employeeId };
    const update = { $set: { emergencyContactDetails: details } };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function deleteEmergencyContactDetails(req, res, next) {
  try {
    const { id, employeeId } = req.body;
    const data = await User.updateOne({ employeeId }, { $pull: { emergencyContactDetails: { _id: id } } });
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function insertCompanyDetails(req, res, next) {
  try {
    const { details, employeeId } = req.body;
    const query = { employeeId };
    const update = { $set: { companyDetails: details } };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function deleteCompanyDetails(req, res, next) {
  try {
    const { id, employeeId } = req.body;
    const data = await User.updateOne({ employeeId }, { $pull: { companyDetails: { _id: id } } });
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function insertCollegeDetails(req, res, next) {
  try {
    const { details, employeeId } = req.body;
    const query = { employeeId };
    const update = { $set: { collegeDetails: details } };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function deleteCollegeDetails(req, res, next) {
  try {
    const { id, employeeId } = req.body;
    const data = await User.updateOne({ employeeId }, { $pull: { collegeDetails: { _id: id } } });
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function insertLanguageDetails(req, res, next) {
  try {
    const { details, employeeId } = req.body;
    const query = { employeeId };
    const update = { $set: { language: details } };
    const data = await User.updateOne(query, update);
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function deleteLanguageDetails(req, res, next) {
  try {
    const { id, employeeId } = req.body;
    const data = await User.updateOne({ employeeId }, { $pull: { language: { _id: id } } });
    res.send({ success: true, data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  getAll,
  getUserById,
  filterEmployees,
  updatePersonalDetails,
  updateContactDetails,
  insertEmergencyContactDetails,
  deleteEmergencyContactDetails,
  insertCompanyDetails,
  deleteCompanyDetails,
  insertCollegeDetails,
  deleteCollegeDetails,
  insertLanguageDetails,
  deleteLanguageDetails,
};

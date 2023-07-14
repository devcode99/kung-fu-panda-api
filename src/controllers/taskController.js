const Task = require("../models/taskModel");
const dayjs = require("dayjs");

async function create(req, res) {
  const {
    work,
    hours,
    updateContent,
    type,
    projectTitle,
    clientChat,
    skillTitle,
    createdDate,
    employeeId,
  } = req.body;
  try {
    const data = await Task.create({
      work,
      hours,
      updateContent,
      type,
      projectTitle,
      clientChat,
      skillTitle,
      createdDate,
      lastUpdated: new Date(),
      employeeId,
    });
    res.send({ success: true, data });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

async function update(req, res) {
  const {
    work,
    hours,
    updateContent,
    type,
    projectTitle,
    clientChat,
    skillTitle,
    lastUpdated,
  } = req.body;

  const id = req.params.id;

  try {
    const result = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          work,
          hours,
          updateContent,
          type,
          projectTitle,
          clientChat,
          skillTitle,
          lastUpdated,
        },
      }
    );
    if (!result) {
      return res.status(404).send("Task not found");
    }
    res.send({ success: true, data: result });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await Task.deleteOne({ _id: id });
    res.status(200).send({ success: true });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

async function filterTasks(req, res) {
  const {
    employeeId,
    startDate,
    endDate,
    work,
    type,
    projectTitle,
    skillTitle,
    offset = 0,
    limit = 10,
  } = req.body;

  const query = {
    employeeId: employeeId || { $exists: true },
    createdDate: {
      $gte: startDate || dayjs().startOf("day").format(),
      $lte: endDate || dayjs().endOf("day").format(),
    },
    work: work || { $exists: true },
    type: type?.length > 0 ? { $in: type } : { $exists: true },
    projectTitle: projectTitle?.length > 0 ? { $in: projectTitle } : { $exists: true },
    skillTitle: skillTitle?.length > 0 ? { $in: skillTitle } : { $exists: true },
  };

  try {
    const tasks = await Task.find(query)
      .sort({ createdDate: -1 })
      .skip(offset)
      .limit(limit);

    const count = await Task.countDocuments(query);

    res.send({ count, data: tasks });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

async function checkTodayUpdates(req, res) {
  const { employeeId } = req.body;

  try {
    const todayStart = dayjs().startOf("day").format();
    const todayEnd = dayjs().endOf("day").format();

    const tasks = await Task.find({
      employeeId,
      createdDate: { $gte: todayStart, $lte: todayEnd },
    });

    const totalHours = tasks.reduce((sum, task) => sum + task.hours, 0);

    res.send({ totalHours });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

async function getByEmployeeId(req, res) {
  const employeeId = req.params.employeeId;

  try {
    const result = await Task.find({ employeeId });
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.send({ success: false, error: "Something went wrong, Try again!" });
  }
}

module.exports = {
  create,
  update,
  remove,
  filterTasks,
  checkTodayUpdates,
  getByEmployeeId,
};

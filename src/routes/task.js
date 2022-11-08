const Get_Task = (req, res, next) => {
  res.send("Get single task");
};

const Get_AllTask = (req, res, next) => {
  res.send("Get All Task");
};

const Create_Task = (req, res, next) => {
  res.send("Create Task");
};

const Update_Task = (req, res, next) => {
  res.send("Update Task");
};

const Delete_Task = (req, res, next) => {
  res.send("Dlt Task");
};

module.exports = {
  Get_Task,
  Get_AllTask,
  Create_Task,
  Update_Task,
  Delete_Task,
};

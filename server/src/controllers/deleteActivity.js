
const { Activity } = require('../db');

const deleteActivity = async (name) => {
  const activity = await Activity.findOne({ where: { name } });

  if (!activity) {
    return false;
  }

  await activity.destroy();
  return true;
};

module.exports = deleteActivity;

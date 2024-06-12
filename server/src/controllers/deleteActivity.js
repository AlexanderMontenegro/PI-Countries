const { Activity } = require("../db");

const deleteActivity = async (name) => {
  try {
    const activity = await Activity.findOne({ where: { name } });
    if (activity) {
      await activity.destroy();
      return true;
    }
    return false;
  } catch (error) {
    
    throw new Error('Error deleting activity');
  }
};

module.exports = deleteActivity;

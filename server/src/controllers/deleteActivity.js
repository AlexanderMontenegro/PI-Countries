
const { Activity } = require('../db');

const deleteActivity = async (name) => {
    const activity = await Activity.findOne({ where: { name } });
    if (activity) {
        await activity.destroy();
        return true;
    }
    return false;
};

module.exports = deleteActivity;

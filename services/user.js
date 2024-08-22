const User = require("../models/user");

const user = {
  async getUserInfo({ user_name, password }) {
    const result = await User.findOne({
      where: { user_name, password },
    });
    return result ? result.dataValues : null;
  },
  async getUserInfoById(id) {
    const result = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    return result ? result.dataValues : null;
  },
};

module.exports = user;

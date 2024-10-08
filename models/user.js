const { DataTypes } = require("sequelize");
const seq = require("../lib/db");

const User = seq.define(
  "user",
  {
    // id 会被sequelize自动创建, 管理
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名, 唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否为管理员, 0: 不是管理员(默认); 1: 是管理员",
    },
  },
  {
    timestamps:true,
    createdAt: "createdTime",
    updatedAt: "updatedTime",
  }
);

// 强制同步数据库(创建数据表)
User.sync({ force: true });

module.exports = User;

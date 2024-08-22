const { Sequelize } = require("sequelize");

const {
  mysql: { host, database, user, password },
} = require("../config");
const seq = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });

module.exports = seq;

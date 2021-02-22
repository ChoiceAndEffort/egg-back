'use strict';
module.exports = app => {
  const {
    STRING,
    BIGINT,
  } = app.Sequelize;

  const Checked = app.model.define('checked', {
    // bigint 带符号的范围是-9223372036854775808到9223372036854775807。无符号的范围是0到18446744073709551615。
    // int  普通大小的整数。带符号的范围是-2147483648到2147483647。无符号的范围是0到4294967295。
    // 就是值得范围的问题，如果需要大于int的范围，就用bigint.
    id: {
      type: BIGINT,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    label: {
      type: STRING(50),
    },
    type: {
      type: BIGINT,
    },
    checked: {
      type: BIGINT,
    },
  },
  {
    // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    freezeTableName: true,
    // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
    timestamps: false,
  });
  return Checked;
};

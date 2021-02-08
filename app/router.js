'use strict';
// 用于汇总所有的接口请求,以及匹配到对应controller下对应的文件


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/findUsersList', controller.users);

};

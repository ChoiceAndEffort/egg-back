'use strict';
// 用于汇总所有的接口请求,以及匹配到对应controller下对应的文件


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/moduleOne/findConfig', controller.checked.index);
  router.post('/api/moduleOne/updateConfig', controller.checked.update);

  router.get('/api/moduleThree/findUsers', controller.emperors.index);
  router.post('/api/moduleThree/addUsers', controller.emperors.create);
  router.post('/api/moduleThree/deleteUsers', controller.emperors.delete);
  router.post('/api/moduleThree/updateUsers', controller.emperors.update);


};

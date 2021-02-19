# muban-back



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org



### 学习使用的文档
https://blog.csdn.net/weixin_34054931/article/details/89507733?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control

### 使用说明
- 参照官网搭建框架
- npm install --save egg-sequelize mysql2
- 在 config/plugin.js 中引入 egg-sequelize 插件
```js
module.exports = {
   sequelize: {
      enable: true,
      package: 'egg-sequelize'
   }
};
```
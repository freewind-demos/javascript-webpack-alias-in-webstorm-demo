JavaScript Webpack Alias in Webstorm Demo
=========================================

当我们在webpack.config.js中配置好了`alias`，可以让我们在js文件中import的时候使用alias来减化路径，
**必须重启webstorm**，才能让webstorm正确的识别并跳转。

在本demo中，可以使用webstorm打开`src/entry.js`，在import语句上"Go to -> Declaration"，
看能不能正确的跳转到`content.js`中。

```
npm install
npm run demo
```

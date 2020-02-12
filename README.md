This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[How to create a Chrome extension in React JS](https://veerasundar.com/blog/2018/05/how-to-create-a-chrome-extension-in-react-js/)

`npx create-react-app chrome-react-extension`  

## chrome://extensions/?errors

> Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' 'unsafe-eval'". Either the 'unsafe-inline' keyword, a hash ('sha256-OszmLM+w39Dhbyhsy44fcN2NAw5A3ARCfaJdO0SiW8o='), or a nonce ('nonce-...') is required to enable inline execution.

create-react-app [创建生产构建](https://www.html.cn/create-react-app/docs/production-build/) 高级配置 [advanced-configuration](https://www.html.cn/create-react-app/docs/advanced-configuration/)

.env

```js
INLINE_RUNTIME_CHUNK=false
```

相當於執行 yarn build

package.json (windows不支援寫在package.json scripts內)

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "INLINE_RUNTIME_CHUNK=false react-scripts build",
  },
```

[打造你的专属 Chrome 插件（一）](http://jartto.wang/2018/11/10/chrome-extensions-1/)
增加了INLINE_RUNTIME_CHUNK=false 用來控制打包的js 文件

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

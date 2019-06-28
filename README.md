# 🍏 Node.js

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
     alt="Markdown Monster icon"
     style="align-item:center; width: 350px; maring-bottom:25px; "/>

## 📔 Most used Node.js modules

- express
- dotenv
- path
- fs
- axios / request-native-promise
- moment
- body-parser
- cron
- lodash
- validator
- nodemailer

---

- mongoose
- connect-mongo
- express-session
- bcrypt [Check if it's depricated]
- cookieParser
- jsonwebtoken
- passport/passport-facebook/passport-jwt/passport-local
- cors / helmet

<!-- ![](https://i.imgur.com/j3b2eyl.png) -->

# 📽 Project Arhitecture

## 🌲 Structure of a project

```
├─ 📁 .vscode           [optional]
|   ├─ 📜 settings.json [optional]
|   └─ 📜 launch.json   [optional]
|
├─ 📁 node_modules (auto-generate)
|
├─ 📁 server
|   ├─ 📁 api
|   |   ├─ 📁 user
|   |   |   ├─ 📜 ❔ index.js
|   |   |   ├─ 📜 user.routes.js
|   |   |   ├─ 📜 user.model.js
|   |   |   ├─ 📜 user.controller.js
|   |   |   └─ 📜 user.service.js
|   |   └── ...
|   |
|   ├─ 📜 server.js
|   ├─ 📜 router.js
|   └──📁 services
|       ├─ 📜 logger.js
|       ├─ 📜 dbconfig.js
|       └─ 📜 [mostly singleton modules, services, mailer, middleware, varibales]
|
|
├─📁 public
|   ├─📁 views [.ejs, .html, .pug...]
|   ├─📁 scripts [frontend javascript files .js ]
|   ├─📁 stylesheets [.css, less. cess...]
|   ├─📁 images
|   └─📁 assets [optional][media: files, audio, video...]
|
├─ 📜 .eslintrc.json / .eslintrc.js
├─ 📜 .package.json
├─ 📜 .package-lock.json (auto-generate)
├─ 📜 .gitignore
├─ 📜 .env (.staging.env && .production.env)
├─ 📜 Procfile (if you are deploying on heroku)
└─ 📜 README.md
```

## 🖥 About arhitecture

### api\/\<something>

- `<something>.routes.js` - routers
- `<something>.model.js` - DB collection
- `<something>.controller.js` - logic
- `<something>.services.js` - queries

### 🗯 Documentation comments

```javascript
/**
*@description
*@return
*@params
*/
const functionName = [async]() => { };
```

#### 🔥Swagger

Swagger configuration is in the `server/services/swagger` folder
All documentation will be parsed from `server/services/swagger/docs` and name must finished with .swagger.js

### 📁 Logger

Currently in logger.js I use winston logger

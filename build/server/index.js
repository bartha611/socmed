"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentRoute = require("./routes/commentRoute");
const app = express_1.default();
const PORT = 3000;
// app.use(
//   require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
//   })
// );
app.use(express_1.default.static(`${__dirname}/dist`));
app.use("/", commentRoute);
app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map
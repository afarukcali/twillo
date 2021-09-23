"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
app.use((0, express_1.urlencoded)());
app.use((0, express_1.json)());
const httpPort = 3000;
app.get("/", (req, res) => {
  console.log("req.method", req.method);
  console.log("req.headers", JSON.stringify(req.headers));
  console.log("req.body", JSON.stringify(req.body));
  res.send({ "requset.headers.something": req.get("something"), "requset.body.raw1": req.body.raw1 });
});
app.post("/", (req, res) => {
  console.log("req.method", req.method);
  console.log("req.body", req);
  console.log("req.headers", JSON.stringify(req.headers));
  console.log("req.body", JSON.stringify(req.body));
  res.send({ "requset.headers.something": req.get("something"), "requset.body.raw1": req.body.raw1 });
});
app.listen(httpPort, (err) => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${httpPort}`);
});

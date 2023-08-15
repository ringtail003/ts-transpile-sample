"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_js_1 = require("./foo.js");
const foo_cjs_1 = require("./foo.cjs");
(0, foo_js_1.foo)();
(0, foo_cjs_1.fooC)();
import("./foo.mjs").then(m => m.fooM());

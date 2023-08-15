import { foo } from "./foo.js";
import { fooC } from "./foo.cjs";

foo();
fooC();

import("./foo.mjs").then(m => m.fooM());

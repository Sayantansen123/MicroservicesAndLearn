
const path = require("path");

console.log("Directory name:",path.dirname(__filename));
console.log("File Name:",path.basename(__filename));

//join paths

const joinPath = path.join("/base","document","user")
console.log(joinPath)

//resolved path
const resolvePath = path.resolve("user","profile")
console.log(resolvePath);

const normalizePath = path.normalize("/user/documents/../profile/node")
console.log(normalizePath)
function parseObject(obj, str) {
  keys = Object.keys(obj);
  keys.map(key => obj[key]).forEach(item => next(item, str));
}

function parseArray(array, str) {
  array.forEach(item => next(item, str));
}

function next(item, str) {
  if (typeof item === "string" && item.includes(str)) {
    console.log("FIND");
  } else if (Array.isArray(item)) {
    parseArray(item, str);
  } else if (typeof item === "object" && item + "" !== "null") {
    parseObject(item, str);
  }
}

function find(objectOrArray, str) {
  if (Array.isArray(objectOrArray)) {
    parseArray(objectOrArray, str);
  } else {
    parseObject(objectOrArray, str);
  }
}

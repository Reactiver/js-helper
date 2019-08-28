function parseObject(obj, str, path) {
  keys = Object.keys(obj);
  keys
    .map(key => obj[key])
    .forEach((item, index) => next(item, str, `${path}.${Object.keys(obj)[index]}`));
}

function parseArray(array, str, path) {
  array.forEach((item, index) => next(item, str, `${path}[${index}]`));
}

function next(item, str, path) {
  if (typeof item === "string" && item.includes(str)) {
    console.log(`path ${path}`);
  } else if (Array.isArray(item)) {
    parseArray(item, str, path);
  } else if (typeof item === "object" && item + "" !== "null") {
    parseObject(item, str, path);
  }
}

function find(objectOrArray, str) {
  if (Array.isArray(objectOrArray)) {
    parseArray(objectOrArray, str, 'array');
  } else {
    parseObject(objectOrArray, str, 'object');
  }
}

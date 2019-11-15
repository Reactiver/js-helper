function replaceUndefinedToNull(item) {
  if (Array.isArray(item)) {
    return JSON.parse(JSON.stringify(parseArray(item)));
  } else {
    return JSON.parse(JSON.stringify(parseObject(item)));
  }
}

function parseArray(array) {
  return array.map(item => {
    if (typeof item === "undefined") {
      return null;
    } else if (Array.isArray(item)) {
      return parseArray(item);
    } else if (typeof item === "object" && item !== null) {
      return parseObject(item);
    } else return item;
  });
}

function parseObject(object) {
  const tempObject = {};

  for (key in object) {
    if (typeof object[key] === "undefined") {
      tempObject[key] = null;
    } else if (Array.isArray(object[key])) {
      tempObject[key] = parseArray(object[key]);
    } else if (typeof object[key] === "object" && object[key] !== null) {
      tempObject[key] = parseObject(object[key]);
    } else {
      tempObject[key] = object[key];
    }
  }

  return tempObject;
}

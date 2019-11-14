# String finder
String finder - best way to find some text in big Object or Array!

---

### Examples

We want find where 'USA' is located in companies object.
``` js
companies = {
  samsung: {
    type: 'hardware company',
    age: 100,
    countries: ['Japan', 'USA', 'Russia', 'Germany']
  },
  microsoft: {
    type: 'software company',
    age: 30,
    countries: ['USA', 'Colombia', 'New Zeland', 'France', 'UAE']
  }
}

// use find()
find(companies, 'USA')
```

The console will show

```
path object.samsung.countries[1]
path object.microsoft.countries[0]
```

# Replace undefined to null
Replace all undefined value to null in Object or Array of any shape

---

### Examples

We want replace all undefined value to null in companies.
``` js
companies = {
  samsung: {
    type: 'hardware company',
    age: undefined,
    countries: ['Japan', undefined, 'Russia', 'Germany']
  },
  microsoft: {
    type: undefined,
    age: 30,
    countries: ['USA', 'Colombia', undefined, 'France', 'UAE']
  }
}
```

Function `replaceUndefinedToNull(companies)` return updated object(or array)

```js
{
  samsung: {
    type: 'hardware company',
    age: null,
    countries: ['Japan', null, 'Russia', 'Germany']
  },
  microsoft: {
    type: undefined,
    age: 30,
    countries: ['USA', 'Colombia', null, 'France', 'UAE']
  }
}
```

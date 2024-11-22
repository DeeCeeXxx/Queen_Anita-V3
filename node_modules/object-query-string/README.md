# Object Query String

Stringify objects as URL Query Strings.

A lightweight mock of jQuery.param function without any dependencies!

### Example

````javascript
// TypeScript
import { queryString } from 'object-query-string';

// Node.js
const { queryString } = require("object-query-string");

const query = queryString({
    filter: {
        brands: ["Audi"],
        models: ["A4", "A6", "A8"],
        accidentFree: true
    },
    sort: 'mileage'
});

````

returns

````
filter[brands][]=Audi&filter[models][]=A4&filter[models][]=A6&filter[models][]=A8&filter[accidentFree]=true&sort=milage
````

### Options 

```javascript
// queryString(params : string, options : object|undefined)

// default options
queryString(params, {
    separator: '&', // string 
    encode: encodeURIComponent, // function(string) : string
    encodeBrackets: false, // foo[baz]=1 or foo%5Bbaz%5D=1
});

```

-----

Inspired by [jQuery](https://jquery.com)'s param!
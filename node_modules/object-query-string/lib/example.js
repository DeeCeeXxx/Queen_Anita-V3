"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var tests = [
    [
        "query String",
        "query%20String"
    ],
    [
        {
            "first": "one",
            "second": "two",
            "third": []
        },
        "first=one&second=two"
    ],
    [
        {
            "first": "one",
            "second": "two",
            "third": undefined
        },
        "first=one&second=two"
    ],
    [
        {
            "filter": {
                "brands": ["Audi"],
                "models": ["A4", "A6", "A8"],
                "accidentFree": true
            },
            "sort": "mileage"
        },
        "filter[brands][]=Audi&filter[models][]=A4&filter[models][]=A6&filter[models][]=A8&filter[accidentFree]=true&sort=mileage"
    ],
    [
        {
            "filter": {},
            "sort": { "key": "requestId", "desc": true },
            "page": { "index": 0, "size": 20 }
        },
        "sort[key]=requestId&sort[desc]=true&page[index]=0&page[size]=20"
    ],
    [
        {
            "sort": [
                "value1",
                "value2",
                "value3",
                true
            ]
        },
        "sort[]=value1&sort[]=value2&sort[]=value3&sort[]=true"
    ],
    [
        {
            "filter": {
                "name": "David",
                "website": "deltazero.cz"
            }
        },
        "filter[name]=David&filter[website]=deltazero.cz"
    ],
    [
        {
            "stupidFilter": {
                "key1": {
                    "subkey1": "value1",
                    "subkey2": "value2"
                },
                "key2": ["value3", "value4", true, false, {
                        "key2.0": "2.0",
                        "key2.1": "2.1"
                    }]
            }
        },
        "stupidFilter[key1][subkey1]=value1&stupidFilter[key1][subkey2]=value2&stupidFilter[key2][]=value3&stupidFilter[key2][]=value4&stupidFilter[key2][]=true&stupidFilter[key2][]=false&stupidFilter[key2][4][key2.0]=2.0&stupidFilter[key2][4][key2.1]=2.1"
    ],
    [
        [1, 2, 3, true],
        "1&2&3&true"
    ],
    [
        {
            "cs": "Ó, náhlý úsvit oblažil zemětvář prolínajícím hřejivým dotekem svým.",
            "jp": "包含有字母表中所有字母并且言之成义的句子称为全字母句"
        },
        "cs=%C3%93%2C%20n%C3%A1hl%C3%BD%20%C3%BAsvit%20obla%C5%BEil%20zem%C4%9Btv%C3%A1%C5%99%20prol%C3%ADnaj%C3%ADc%C3%ADm%20h%C5%99ejiv%C3%BDm%20dotekem%20sv%C3%BDm.&jp=%E5%8C%85%E5%90%AB%E6%9C%89%E5%AD%97%E6%AF%8D%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%AD%97%E6%AF%8D%E5%B9%B6%E4%B8%94%E8%A8%80%E4%B9%8B%E6%88%90%E4%B9%89%E7%9A%84%E5%8F%A5%E5%AD%90%E7%A7%B0%E4%B8%BA%E5%85%A8%E5%AD%97%E6%AF%8D%E5%8F%A5"
    ]
];
console.log("Check if set tests (" + tests.length + ") pass set expectations", '\n[ok?]', '\t', '[query]');
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var item = tests_1[_i];
    var object = item[0], shouldEqual = item[1];
    var value = index_1.queryString(object);
    console.log(shouldEqual === value, '\t', value);
}
//# sourceMappingURL=example.js.map
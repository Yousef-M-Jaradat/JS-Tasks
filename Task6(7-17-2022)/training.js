const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(JSON.parse(json));
JSON.parse(json)//transfer from jason to object
console.log(obj.count);
console.log(obj.result);

//transfer from string jason to object
console.log(JSON.parse("{}"))
console.log(JSON.parse("true"))
console.log(JSON.parse('"foo"'))    
console.log(JSON.parse('[1, 5, "false"]'))
console.log(JSON.parse("null"))

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    console.log(key);
    return value;
});

//transfer from object to jason
console.log(typeof JSON.stringify({ x: 5, y: 6 }));
console.log(typeof JSON.stringify([Number(3),String('false'),Boolean(false)]));
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));

// In JSON, string values must be written with double quotes: 
// In JavaScript, you can write string values with double or single quotes:



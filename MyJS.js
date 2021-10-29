x = 10
Page3.html:26 Very Good
var arr = new Array;

arr[0] = "Java";
arr[1] = "Salesforce";
arr[2] = "J2EE";
arr[3] = "Spring";
arr[4] = "React Js";
arr[5] = "Angular JS";

console.log(arr);

//for(i ...)  // for loop works

arr.forEach(ele=>console.log(ele));

VM300:10 (6) ['Java', 'Salesforce', 'J2EE', 'Spring', 'React Js', 'Angular JS']
VM300:14 Java;
VM300:14 Salesforce;
VM300:14 J2EE;
VM300:14 Spring;
VM300:14 React Js;
VM300:14 Angular JS;
undefined
var arr = new Array;

arr[0] = "Java";
arr[1] = "Salesforce";
arr[2] = "J2EE";
arr[3] = "Spring";
arr[4] = "React Js";
arr[5] = "Angular JS";
arr[6] = 15;
15
console.log(arr);
VM405:1 (7) ['Java', 'Salesforce', 'J2EE', 'Spring', 'React Js', 'Angular JS', 15]
undefined
arr.sort();

(7) [15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring']
var arr2 = new Array;
arr2[0] = 4545;
arr2[1] = 45;
arr2[2] = 4540;
arr2[3] = 101;

var arr3 = arr2.concat(arr);
console.log(arr3);

VM645:8 (11) [4545, 45, 4540, 101, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring']
undefined
arr2[4] = true;
arr3 = arr2.concat(arr);
console.log(arr3);
VM792:3 (12) [4545, 45, 4540, 101, true, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring']
undefined
arr3.push(90);
console.log(arr3);
VM888:2 (13) [4545, 45, 4540, 101, true, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring', 90]
undefined
arr3.shift();
console.log(arr3);
VM999:2 (12) [45, 4540, 101, true, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring', 90]
undefined
arr3.pop();
console.log(arr3);
VM1085:2 (11) [45, 4540, 101, true, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring']
undefined
arr3.unshift("Rapipay");
console.log(arr3);
VM1203:2 (12) ['Rapipay', 45, 4540, 101, true, 15, 'Angular JS', 'J2EE', 'Java', 'React Js', 'Salesforce', 'Spring']
undefined
var x = arr3.includes('Angular JS');
console.log(x);
VM1356:2 true
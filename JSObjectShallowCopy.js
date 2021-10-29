var x = {"clientName":"Ramesh","PAN_Number":"ABCD1254N","Balance":5000};
x;
{clientName: 'Ramesh', PAN_Number: 'ABCD1254N', Balance: 5000}
var y = x;
y;
{clientName: 'Ramesh', PAN_Number: 'ABCD1254N', Balance: 5000}Balance: 5000PAN_Number: "ABCD1254N"clientName: "Mike"[[Prototype]]: Object
y.clientName = "Mike";
x.clientName;
'Mike'
var z = {};
Object.assign(z,x);
{clientName: 'Mike', PAN_Number: 'ABCD1254N', Balance: 5000}
z.clientName = "Amit";
x.clientName;
'Mike'
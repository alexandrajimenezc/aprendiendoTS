console.log('hola mundo');
//types
var myString = 'hello world';
myString = 22 + "";
//myString.split('');
var myNumber = 22;
var myBool = true;
var myVar = 'hello';
myVar = false;
//Strings
document.write(myString);
document.write(myNumber.toString());
//arrays
//var stringArray:any[] =["","",""]
//stringArray=[true,2,3]
var stringArray = ["item1", "item2", "item3"];
var numberArray = [1, 2, 3, 4, 5, 6];
var booleanArray = [true, false, true];
var anyArray = ["hola", 2, true, {}, []];
//tuple 
var strNumTuple;
strNumTuple = ['hola', 18];
function showTodo(todo) {
    console.log(todo.title + "- " + todo.text);
}
var myTodo = { title: 'saludarr', text: 'texto de algo ' };
showTodo(myTodo);
document.write();

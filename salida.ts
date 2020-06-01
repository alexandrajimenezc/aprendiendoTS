console.log('hola mundo')


//types

var myString: string = 'hello world'
myString=22 +"";
//myString.split('');

var myNumber:number = 22
var myBool: boolean = true

var myVar:any = 'hello';
myVar = false;

//Strings
document.write(myString)
document.write(myNumber.toString())

//arrays
//var stringArray:any[] =["","",""]
//stringArray=[true,2,3]
var stringArray:string[] =["item1","item2","item3"]
var numberArray:number[]= [1,2,3,4,5,6]
var booleanArray: boolean[]=[true,false,true]
var anyArray:any[] =["hola",2,true,{},[]]

//tuple 
var strNumTuple: [string,number] ;

strNumTuple=['hola',18]
//document.write(typeof(strNumTuple))

//void , undefined, null
//let myVoid: void = undefined;
//let myNull:null = null
//let myUndefined: undefined = undefined;

//document.write(typeof(myVoid))

//functions
/* 
 function getSum(num1:number,num2:number):number{
    return num1 + num2;


}  */

/*  let mySum = (
    num1:number | string ,
    num2:number| string):number =>{
        if(typeof(num1)=== 'string'){
            num1 = parseInt(num1)
        }
        if(typeof(num2)=== 'string'){
            num2 = parseInt(num2)
        }
    return num1 + num2;
} 
*/

/* function gName(
    firtName:string,
    lastName?:string):string{
   if(lastName== undefined){
       return firtName;
   }
    return `${firtName} ${lastName}`; 
}

document.write(gName("alexandra","JImenez")) */

/* 
function myvoidfunc():void {
    return
} */

//interfaces
interface ITodo{
    title: string;
     text: string;
}

function showTodo(todo: ITodo){
    console.log(`${todo.title}- ${todo.text}`)

}

let myTodo:ITodo ={title: 'saludarr',text:'texto de algo '}
showTodo(myTodo)

document.write();
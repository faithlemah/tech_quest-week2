const students = [
    {name:'Siddharth Abhimanyu', age:21}, 
    {name: 'Malar', age: 25},
    {name: 'Maari',age: 18},
    {name: 'Bhallala Deva',age:17},
    {name: 'Baahubali',age:16},
    {name: 'AAK chandran',age:23}, 
    {name: 'Gabbar Singh',age:33},
    {name: 'Mogambo',age:53},
    {name: 'Munnabhai',age:40},
    {name: 'SherKhan',age:20},
    {name: 'ChulbulPandey',age:19},
    {name: 'Anthony', age:28},
    {name: 'Devdas', age:56}
    ];

//the forEach iterates a function over every item in a particular array


function returnNewArray(){
    let newArray = []
    students.forEach(student => {
        if(student.age < 20){
            newArray.push(student)
        }        
    });
    console.log(newArray);

}

returnNewArray();


var obj = { name: 'Harry', age: '25', sex: 'male'};

function printAllKeys(x){ 

    let newObjectArray = [];
    
    newObjectArray.push(Object.keys(x))

    console.log(newObjectArray); 

}

printAllKeys(obj);

function printAllKeys2(x){ 

    let newObjectArray = [];
    
    newObjectArray = Object.keys(x)

    console.log(newObjectArray); 

}
printAllKeys2(obj);
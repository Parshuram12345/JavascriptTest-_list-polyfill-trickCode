const obj1 ={
    name:"parshuram",
    age:23,
    degree:["b.sc","m.sc"],
    foo:()=>{
        console.log("function is running")
    }
}

///deep copy ////
const newobj = [...obj1];
newobj.name="saini"
console.log(newobj)
console.log(obj1)
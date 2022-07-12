// 10-->12-->20-->21 linklist--A linked list is a linear data structure similar to an array.
//each element is a separate object that contains a pointer or a link to the next object in that list.
// Successive nodes are connected by pointers

const linklist = {
  head: {
    value: 10,
    next: {
      value: 12,
      next: {
        value: 20,
        next: {
          value: 21,
          next:null
        },
      },
    },
  },
};

// console.log(linklist)

//class of Linklist ----
class Linklist{
    constructor(data){
        this.head={
            value: data,
            next:null
        },
        this.tail = this.head,
        this.length =1
    }
}
const mylink = new Linklist(12)
console.log(mylink)
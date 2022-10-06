/* 
Clase que representa la lista enlazada.
Esta clase tendra la propiedad Head que representa el nodo inicial.
*/

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendNode(value){
        const newNode = new Node(value,null)
        if (this.head === null) {
            this.head = newNode
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    prependNode(value){
        if (this.head === null) {
            const newNode = new Node(value,null)    
            this.head = newNode
         }else{
            let list = this.head
            const newNode = new Node(value,list) 
            this.head = newNode;
        }
    }

    size(){
        if (this.head === null) return 0
        let count = 1;
        let current = this.head
        while (current.next) {
            count++
            current = current.next
        }
        return count
    }

    headNode(){
        return this.head
    }

    tailNode(){
        if (this.head === null) return null;
        let current = this.head
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    at(indice){
        if (this.head === null) return false;
        let current = this.head
        for (let index = 0; index < this.size(); index++) {
            if (index === indice) {
                return current;
            }
            current = current.next
        } 
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next
        }
    }

    findNode(value){
        let current = this.head;
        while(current){
            if (current.value === value) {
                return current
            }
            current = current.next
        }
        return null;
    }

    contains(value){
        let current = this.head;
        while(current){
            if (current.value === value) {
                return true
            }
            current = current.next
        }
        return false;
    }

    deleteNode(value){
        if (this.head.value === value) {
            this.head = this.head.next
        }else{
            let current = this.head;
            while (current.next) {
                if (current.next.value === value) {
                    current.next = current.next.next
                    return
                }
                current = current.next
            }
            current = current.next
        }
    }

    toString(){
        if (this.head === null) return null
        let string = ''
        let current = this.head
        while (current.next) {
            string += `(${current.value}) -> `
            current = current.next
        }
        string += `(${current.value}) -> null`
        return string
    }
}

// Clase que representa un nodo.
// Tendra la propiedad Value, dato de interes que se almacenara, 
// y la propiedad next, que representa el punto al siguiente elemento

class Node {
    constructor(value,next) {
        this.value = value
        this.next = next
    }
}

const linkedList = new LinkedList()
linkedList.appendNode(1)
linkedList.appendNode(2)
linkedList.appendNode(3)
linkedList.deleteNode(2)
linkedList.prependNode(1)
linkedList.prependNode(2)
linkedList.prependNode(3)
linkedList.appendNode(1)
linkedList.appendNode(2)
linkedList.appendNode(3)
linkedList.print()
console.log(linkedList.findNode(132));
console.log(linkedList.size())
console.log(linkedList.headNode());
console.log(linkedList.tailNode());
console.log(linkedList.at(3));
console.log(linkedList.toString());
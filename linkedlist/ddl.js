class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null
    }
}

class DLindedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

}

const list = new DLindedList();
list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();

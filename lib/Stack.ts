import { IDataScructure } from "./IDataStructure";

export class Stack implements IDataScructure {

    private items = []; 

    enqueue(value: any) {
        this.items.push(value);
    }
    peek(): void {
        return this.items[this.items.length-1];
    }
    poll(): any {
        return this.items.pop();
    }
    isEmpty(): boolean {
        if (this.size() == 0)
        {
            return true;
        }
        return false;
    }
    public size(): number {
        return this.items.length;
    }
}
import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private items = []; 

    enqueue(value: any) {
        this.items.push(value);
    }
    peek(): void {
        return this.items[0];
    }
    poll(): any {
        return this.items.shift();
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
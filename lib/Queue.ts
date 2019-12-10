import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    enqueue(value: any) {
        throw new Error("Method not implemented.");
    }
    peek(): void {
        throw new Error("Method not implemented.");
    }
    poll(): void {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        return false;
    }
    public size(): number {
        return 0;
    }
}
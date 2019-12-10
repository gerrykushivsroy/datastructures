export interface IDataScructure {
    size(): number;
    enqueue(value);
    peek(): void; 
    poll(): void; 
    isEmpty(): boolean;
}
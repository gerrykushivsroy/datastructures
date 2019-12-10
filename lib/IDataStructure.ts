export interface IDataScructure {
    size(): number;
    enqueue(value);
    peek(): any; 
    poll(): any; 
    isEmpty(): boolean;
}
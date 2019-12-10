import { EnumDataStructures } from "./EnumDataStructures";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory{
    public create (enumDatastructes : EnumDataStructures ){
        if (enumDatastructes == EnumDataStructures.FIFO)
        {
            return new Queue();
        }
        if (enumDatastructes == EnumDataStructures.LIFO)
        {
            return new Stack();
        }
    } 
}
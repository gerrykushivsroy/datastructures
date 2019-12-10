import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const queue = new Queue();
            const result = queue.size();
            expect(result).to.equal(0);
        })

        it("isEmpty", () => {
            const queue = new Queue();
            const result = queue.isEmpty();
            expect(result).to.equal(true);
        })

        it("poll when queue is empty", () => {
            const queue = new Queue();
            const result = queue.poll();
            expect(result).to.equal(undefined);
        })

        it("enque and peek value 3", () => {
            const queue = new Queue();
            queue.enqueue(3);
            const result = queue.peek();
            expect(result).to.equal(3);
        })

        it("enque and pool value 69", () => {
            const queue = new Queue();
            queue.enqueue(69);
            queue.enqueue(420);
            queue.enqueue(21); 
            const result = queue.peek();
            expect(result).to.equal(69);
        })

    })


    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})
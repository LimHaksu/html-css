// 출처 https://swexpertacademy.com/main/visualcode/main.do#/home/mainlayout

class PriorityQueue {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    add(value) {
        const heap = this.heap;

        heap[this.size] = value;

        let current = this.size;

        while (current > 0 && heap[current] < heap[parseInt((current - 1) / 2)]) {
            const temp = heap[parseInt((current - 1) / 2)];
            heap[parseInt((current - 1) / 2)] = heap[current];
            heap[current] = temp;
            current = parseInt((current - 1) / 2);
        }

        this.size++;
    }

    remove() {
        if (this.size <= 0) {
            return 'empty';
        }
        const heap = this.heap;

        const ret = heap[0];
        this.size--;
        heap[0] = heap[this.size];

        let current = 0;
        while (current * 2 + 1 < this.size) {
            let child;
            if (current * 2 + 2 == this.size) {
                child = current * 2 + 1;
            } else {
                child = heap[current * 2 + 1] < heap[current * 2 + 2] ? current * 2 + 1 : current * 2 + 2;
            }

            if (heap[current] < heap[child]) {
                break;
            }

            const temp = heap[current];
            heap[current] = heap[child];
            heap[child] = temp;

            current = child;
        }
        return ret;
    }
}

const pq = new PriorityQueue();

const arr = [10, 49, 38, 17, 56, 92, 8, 1, 13, 55];
arr.forEach((item) => {
    pq.add(item);
})
while (!pq.isEmpty()) {
    console.log(pq.remove());
}

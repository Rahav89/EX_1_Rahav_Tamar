class Counter {
    constructor(initialize) {
        this.value = initialize;
    }

    increment() {
        this.value++;
    }

    go() {
        let printNumber = '';
        for (let i = 0; i <= this.value; i++) {
            printNumber += i + ' ';
        }
        return printNumber;
    }
}

let counter;

function startCounter() {
    const initialize = parseInt(document.getElementById('initialize').value) || 0;
    console.log(initialize)
    counter = new Counter(initialize);
}

function incrementCounter() {
    if (counter) {
        counter.increment();
        document.getElementById('initialize').value = counter.value;
    }
}

function displayNumbers() {
    if (counter) {
        const printNumberElement = document.getElementById('printNumber');
        printNumberElement.textContent = counter.go();
    }
}
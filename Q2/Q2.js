let duck;

class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }
}

function createDuck() {
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const image = document.getElementById("image").value;

    duck = new Duck(name, color, age, weight, image);
    document.getElementById("duckForm").reset();

    document.getElementById("Quack").style.visibility = "visible";
    document.getElementById("showDuck").style.visibility = "visible";

    // Hide the button on mouseover
    document.getElementById("createDuck").addEventListener("mouseover", function () {
        this.style.backgroundColor = '#ff385c';
    });

    // Disable the button
    document.getElementById("createDuck").disabled = true;

}

function showDuck() {
    if (duck) {
        const duckInfo = document.getElementById("duckInfo");
        duckInfo.innerHTML = `<p>Name:${duck.name}<p>
                            <p>Color:${duck.color}<p>
                            <p>Age:${duck.age}<p>
                            <p>Weight:${duck.weight}<p>
                            <img src="${duck.image}">`;
    }
    document.getElementById("duckQTime").innerHTML="";
}

function Quack() {
    let duckQ = '';
    if (duck) {

        const quackTimes = Math.round((duck.age * duck.weight) / 2);

        console.log(quackTimes)
        // Print "Quack" to the screen
        for (let i = 0; i < quackTimes; i++) {
            duckQ += "Quack" + ' ';
        }
        console.log(duckQ);
        duckQTime.innerHTML = duckQ;//show on screen 'Quack'.

        let rounds = 0;
        function playQuack() {
            if (rounds < 3) {
                quackSound.currentTime = 0; // Reset audio to start
                quackSound.play();
                rounds++;
                setTimeout(playQuack, 1000); // Call playQuack function again after 1 second
            }
        }
        playQuack(); // Start the sequence

        document.getElementById("duckInfo").innerHTML="";

    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Show() {
        return `(${this.x},${this.y})`;
    }

    Equals(p) {
        return p.x === this.x && p.y === this.y;
    }
}

function CheckIfExist(pointArray, x, y) {
    for (const point of pointArray) {
        if (point.x === x && point.y === y) {
            return true;
        }
    }
    return false;
}

let p1 = new Point(1, 2);
let p2 = new Point(1, 4);
let p3 = new Point(5, 4);
let pointsArray1 = [p1, p2, p3];
// דוגמה שתחזיר אמת
console.log(CheckIfExist(pointsArray1, 1, 4)); // ידפיס: true
// דוגמה שתחזיר שקר
console.log(CheckIfExist(pointsArray1, 10, 4)); // ידפיס: false

//////////////////////////////////////

function CheckIfExistEquals(pointArray, pointObj) {
    for (const point_i of pointArray) {
        if (point_i.Equals(pointObj)) {
            return true;
        }
        else {
            continue;
        }
    }
    return false;
}

let p4 = new Point(1, 2);
console.log(CheckIfExistEquals(pointsArray1, p4));

let p5 = new Point(7, 7);
console.log(CheckIfExistEquals(pointsArray1, p5));

//////////////////////////////////////

function totalDistance(pointArray) {
    let RouteLength = 0;

    for (let i = 0; i < pointArray.length - 1; i++) {
        let distance = calculateDistance(pointArray[i], pointArray[i + 1]);
        RouteLength += distance;
    }
    return RouteLength;
}

//חישוב מרחק בין שתי נקודות 
function calculateDistance(point1, point2) {
    let disX = point1.x - point2.x;
    let disY = point1.y - point2.y;
    return Math.sqrt(disX ** 2 + disY ** 2);
}

let pointsArray2 = [p1, p2, p3, p5];
console.log("total: ", totalDistance(pointsArray2));


// Draw points, lines, and axes on the canvas
function drawPoints(pointsArray) {
    const canvas = document.getElementById("routeCanvas");
    const context = canvas.getContext("2d");

    // Draw X and Y axes
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.stroke();

    // Draw points
    for (const point of pointsArray) {
        context.beginPath();
        context.arc(point.x * 40 + canvas.width / 2, canvas.height / 2 - point.y * 40, 5, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        context.stroke();
    }

    // Draw lines
    context.beginPath();
    context.moveTo(pointsArray[0].x * 40 + canvas.width / 2, canvas.height / 2 - pointsArray[0].y * 40);

    for (let i = 1; i < pointsArray.length; i++) {
        context.lineTo(pointsArray[i].x * 40 + canvas.width / 2, canvas.height / 2 - pointsArray[i].y * 40);
    }

    context.strokeStyle = "blue";
    context.lineWidth = 2;
    context.stroke();
}

let routeLength = totalDistance(routePoints);

document.getElementById("routePoints").innerHTML = "Route Points: " + JSON.stringify(pointsArray2);
document.getElementById("routeLength").innerHTML = "Route Length: " + totalDistance(pointsArray2);

drawPoints(pointsArray2);
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var inputAngle = document.getElementById("angle");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");
var inputSize = document.getElementById("size");


function rad(n) { return n * Math.PI / 180.0; }

function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

function drawTree (angle, split, depth, size) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight - 100;

    var x1 = canvas.width / 2;
    var y1 = 0;

    function paint (x1, y1, angle, depth) {
        if (depth != 0){
            var x2 = x1 + (Math.cos(rad(angle)) * depth * size);
            var y2 = y1 + (Math.sin(rad(angle)) * depth * size);
            drawLine(x1, y1, x2, y2, depth);
            paint(x2, y2, angle - split, depth - 1);
            paint(x2, y2, angle + split, depth - 1);
        }
    }

    paint(x1, y1, angle, depth);
}

function init() {
    var angle = parseInt(inputAngle.value);
    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);

    context.beginPath();
    drawTree(angle, split, depth, size);
    context.strokeStyle = "#fff";
    context.stroke();
    context.closePath();
}
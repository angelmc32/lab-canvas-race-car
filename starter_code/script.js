let canvas;

class Canvas {
  constructor() {
    this.context = document.getElementById("canvas").getContext("2d");
    this.carImage = new Image();
    this.carImage.src = "./images/car.png";
    this.xPosition = 165;
  }

  paintRoad() {
    // Paint green sides
    this.context.fillStyle = "green";
    this.context.fillRect(0, 0, 25, 600);
    this.context.fillRect(375, 0, 25, 600);
    // Paint grey road
    this.context.fillStyle = "gray";
    this.context.fillRect(25, 0, 350, 600);
    // Paint white sides
    this.context.fillStyle = "white";
    this.context.fillRect(35, 0, 10, 600);
    this.context.fillRect(355, 0, 10, 600);
  }

  paintRoad() {
    // Paint green sides
    this.context.fillStyle = "green";
    this.context.fillRect(0, 0, 25, 600);
    this.context.fillRect(375, 0, 25, 600);
    // Paint grey road
    this.context.fillStyle = "gray";
    this.context.fillRect(25, 0, 350, 600);
    // Paint white sides
    this.context.fillStyle = "white";
    this.context.fillRect(35, 0, 10, 600);
    this.context.fillRect(355, 0, 10, 600);
  }

  paintLines(yPosition) {
    this.context.beginPath();
    this.context.setLineDash([20, 20]);
    this.context.lineWidth = 6;
    this.context.strokeStyle = "white";
    this.context.moveTo(197, yPosition);
    this.context.lineTo(197, 600);
    this.context.stroke();
    this.context.closePath();
  }

  paintCar() {
    canvas.context.drawImage(this.carImage, this.xPosition, 430, 65, 120);
  }

  moveCar(keyCode) {
    switch (keyCode) {
      case 37:
        this.xPosition -= 5;
        break;
      case 39:
        this.xPosition += 5;
        break;
    }
  }
}

window.onload = function() {
  canvas = new Canvas();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
  let linesYPosition = 5;
  canvas.paintRoad();
  canvas.paintLines(0);
  canvas.paintCar();
  setInterval(function() {
    document.onkeydown = function(e) {
      if (e.keyCode === 37 || e.keyCode === 39) canvas.moveCar(e.keyCode);
    };
    canvas.context.clearRect(0, 0, 400, 600);
    canvas.paintRoad();

    canvas.paintLines(linesYPosition);
    canvas.paintCar();
    linesYPosition += 5;
  }, 1000 / 60);
}

class Skier {
    constructor(image) {
        this.x = 100;
        this.y = gameCanvas.height / 2;
        this.width = 50;
        this.height = 50;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    setPosition(y) {
        this.y = y;
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > gameCanvas.height) this.y = gameCanvas.height - this.height;
    }
}

class Obstacle {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.image = image;
        this.hasPassed = false;
        this.hit = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(speed) {
        this.x -= speed;
    }
}

// Global variables
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
gameCanvas.width = 800;
gameCanvas.height = 400;

let skier, obstacleSpawnIntervalID;
let obstacles = [];
const obstacleSpeed = 3;
let score = 0;
let lastObstacleTopHalf = false;
let gameStarted = false;
let gameTimeRemaining = 100;


// Global image and sound variables
let skierImage = new Image();
let obstacleImage = new Image();
const backgroundMusic = new Audio('background_music.wav'); // Replace with your background music path
const pointGainSound = new Audio('getpoint.wav'); // Replace with your point gain sound path
const pointLossSound = new Audio('loosepoint.wav'); // Replace with your point loss sound path


const maxObstacles = 20; // Maximum number of obstacles allowed


function spawnObstacle() {

    if (obstacles.length >= maxObstacles) {
        return; // Do not add more obstacles if the limit is reached
    }

    const x = gameCanvas.width;
    let y;
    const safeZone = 60;

    if (lastObstacleTopHalf) {
        y = Math.random() * (gameCanvas.height - safeZone - gameCanvas.height / 2) + gameCanvas.height / 2;
    } else {
        y = Math.random() * (gameCanvas.height / 2 - safeZone - 30) + 30;
    }

    obstacles.push(new Obstacle(x, y, obstacleImage));
    lastObstacleTopHalf = !lastObstacleTopHalf;

    clearInterval(obstacleSpawnIntervalID);
    obstacleSpawnIntervalID = setInterval(spawnObstacle, 2000 - score * 50);
}

function updateScore(pointChange) {
    score += pointChange;
    document.getElementById('score').textContent = 'Score: ' + score;

    // if (score < 0) {
    //     gameOver();
    //     return;
    // }

    if (pointChange > 0) {
        pointGainSound.play();
    } else if (pointChange < 0) {
        pointLossSound.play();
    }
}

function checkCollision(obstacle) {
    return !obstacle.hasPassed && !obstacle.hit && (
        skier.x < obstacle.x + obstacle.width &&
        skier.x + skier.width > obstacle.x &&
        skier.y < obstacle.y + obstacle.height &&
        skier.y + skier.height > obstacle.y
    );
}

function updateGame() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    skier.draw(ctx);

    obstacles.forEach(obstacle => {
        obstacle.move(obstacleSpeed);
        obstacle.draw(ctx);

        if (checkCollision(obstacle) && !obstacle.hit) {
            obstacle.hit = true;
            updateScore(-1);
        } else if (!obstacle.hasPassed && obstacle.x < skier.x) {
            obstacle.hasPassed = true;
            const gameCenter = gameCanvas.height / 2;
            if ((obstacle.y < gameCenter && skier.y < obstacle.y) ||
                (obstacle.y >= gameCenter && skier.y > obstacle.y + obstacle.height)) {
                updateScore(1);
            }
        }
    });

    obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);

    requestAnimationFrame(updateGame);
}

function gameOver() {
    alert("Time's up! Your final score is: " + score);
    gameStarted = false;
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('startButton').textContent = 'Play Again';
    obstacles = [];
    score = 0;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

document.getElementById('sliderControl').addEventListener('input', function(e) {
    const sliderValue = parseInt(e.target.value, 10);
    const invertedValue = gameCanvas.height - sliderValue;
    skier.setPosition(invertedValue - skier.height / 2);
});


function startGame() {
    if (gameStarted) {
        return;
    }

    gameStarted = true;
    score = 0; // Reset score
    obstacles = []; // Clear obstacles
    clearInterval(obstacleSpawnIntervalID); // Clear existing interval for spawning obstacles
    gameTimeRemaining = 100; // Reset game timer

    // Reset UI elements
    document.getElementById('score').textContent = 'Score: ' + score;
    document.getElementById('timer').textContent = 'Time: ' + gameTimeRemaining;
    document.getElementById('startButton').style.display = 'none';

    // Reset and start the game timer
    const gameTimer = setInterval(() => {
        gameTimeRemaining -= 1;
        document.getElementById('timer').textContent = 'Time: ' + gameTimeRemaining;

        if (gameTimeRemaining <= 0) {
            clearInterval(gameTimer);
            gameOver();
        }
    }, 1000);

    // Restart background music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.15;
    backgroundMusic.play();

    // Reinitialize skier
    skier = new Skier(skierImage);

    // Start spawning obstacles
    obstacleSpawnIntervalID = setInterval(spawnObstacle, 2000);

    // Start the game loop
    updateGame();
}





// Set image sources
skierImage.src = 'skier.png'; // Replace with the path to your skier image
obstacleImage.src = 'obstacle.png'; // Replace with the path to your obstacle image

document.getElementById('startButton').addEventListener('click', startGame);

gameCanvas.addEventListener('mousemove', (e) => {
    const canvasBounds = gameCanvas.getBoundingClientRect();
    const mouseY = e.clientY - canvasBounds.top;
    skier.setPosition(mouseY - skier.height / 2);
});




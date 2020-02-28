let heading
let explanation
let cartiImg

function setup(){
createCanvas(windowWidth, windowHeight);
background('#b134eb')  
cartiImg = createImg("carti.png", "Carti Image")
cartiImg.position(800, 50)
heading = createElement('h2', 'Welcome to click Carti')
heading.position(800, 300)
explanation = createElement("h3", "The game where if you click Carti you win")
explanation.position(750, 400)
}

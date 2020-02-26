let slider;
let brightness;
let saturation;

function setup() {
    createCanvas(600, 120); 
    colorMode(HSB);
    slider = createSlider(0, 360, 100); 
    saturation = createSlider(0, 100, 100)
    brightness  = createSlider(0, 100,100)
  }
  function draw() {
    background(0, 100, 100);
    textSize(80);
    text("Hello", 210, 100);
    background(slider.value(), saturation.value(), brightness.value());
    textSize(80);
    text("Hello", 210, 100);
  }
  createElement(h1);

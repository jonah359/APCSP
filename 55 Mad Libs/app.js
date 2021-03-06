let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true,
    true,
    
    
    
    

    // ADD CODE: Add 4 more additional topics
  )

  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  outputDisplayBtn.parent(inputDivUI)

  // ADD CODE: call .parent() to attach the button to the inputDivUI

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()

    // ADD CODE: Hide the inputDivUI
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    // ADD CODE: convert the user input to lowercase by default
    let userInput = inputFieldUI.value().toLowerCase()
    // ADD CODE: convert to uppercase
    if (uppercase === true) {
      // ADD CODE: reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }

    // ADD CODE: CONVERT TO NUM
    
    // add if() statement that checks to see iff num === true.
    if(num === true){
        userInput = Number(userInput)
        userInput = `You smell like ${userInput + 30} year old food. `  
        userInput = `I hate ${userInput + 30} year old cats! `
        userInput = `You act like a ${userInput + 3} year old! `  
        userInput = `Maybe in ${userInput + 10} years you will be cool. `
        userInput = `I can't stand ${userInput + 30} people `
    }
    // if true, convert userInput to a number and perform some math on it

    // OUTPUT BACK TO USER IN THE OUTPUT FIELD
    output.html(`${intro} ${userInput} ${detail}`)
  }
}
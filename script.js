//textElement and optionButtonsElement are the links between the buttons and text in the HTML document and this document.
const textElement = document.getElementById('placeholder-replace-this') // Add the ID of the element you want to change
const optionButtonsElement = document.getElementById('placeholder-replace-this') // Add the ID of the element you want to change



//----- You probably don't want to touch the following block of code -----

//state stores the state that you can set with setState in textNodes.
let state = {}

//startGame starts the game at the textNode with id 1.
function startGame() {
  state = {}
  showTextNode(1)
}

//showTextNode shows and gives functionality to the text and the buttons, and code can be added to allow styling of the buttons.
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      //Exception; You may add a line here
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

//showOption gives you the choices in the buttons.
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//selectOption lets the button go to the assigned textNode id.
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//----- You probably don't want to touch the above block of code -----


//----- This is the code block to alter -----
// textNodes lets you input the text, state(s), choices and the next textNode the choices go to.
const textNodes = [
  {
    id: 1,
    text: 'First text',
    options: [
      {
        text: 'Option one',
        setState: { stateOne: true },
        nextText: 2
      },
      {
        text: 'Option two',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Second text.',
    options: [
      {
        text: 'Option one',
        nextText: 3
      },
      {
        text: 'Option two',
        requiredState: (currentState) => currentState.stateOne,
        setState: { stateOne: false, stateTwo: true },
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'The End',
    options: [
    ]
  },
]
//----- This is the code block to alter -----

startGame()


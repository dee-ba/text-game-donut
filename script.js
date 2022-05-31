const textElement = document.getElementById('placeholder-replace-this') // Add the ID of the element you want to change
const optionButtonsElement = document.getElementById('placeholder-replace-this') // Add the ID of the element you want to change
//This is the link between the buttons and text in the HTML document and this document.



//----- You probably don't want to touch the following block of code -----

let state = {}
//This stores the state that you can set in textNodes.

function startGame() {
  state = {}
  showTextNode(1)
}
//This starts the game at the textNode with id 1.

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
//This shows and gives functionality to the text and the buttons, and code can be added to allow styling of the buttons.

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
//This gives you the choices in the buttons.

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
//This lets the button go to the assigned textNode id.

//----- You probably don't want to touch the above block of code -----



//Have fun with this code block
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
//Have fun with this code block

startGame()


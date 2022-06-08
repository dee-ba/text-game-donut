//textElement and optionButtonsElement are the links between the buttons and text in the HTML document and this document.
const textElement = document.getElementById('text') // Add the ID of the element you want to change
const optionButtonsElement = document.getElementById('option-buttons') // Add the ID of the element you want to change

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
      button.classList.add('btn') 
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
    text: 'You work at Femture and you are in charge of organising the assessment day. To keep spirits high, you ordered a lot of donuts. Everything is going very well... until you go to the canteen toget the donuts. You enter the canteen. To your shock, you see a mess of empty, half-burned donut boxes and scorch marks on the ceiling. What do you do?',
    options: [
      {
        text: 'Cry',
        setState: { goldCoin: true},
        nextText: 8
      },
      {
        text: 'Look for clues',
        setState: { goldCoin: true},
        nextText: 2
      },
      {
        text: 'Look for the nearest man to help you with this problem',
        setState: { goldCoin: true},
        nextText: 8
      }
    ]
  },
  {
    id: 2,
    text: 'While looking for clues, you find a trail of crumbs and jam smeared on the carpet leading out the door. In addition, you notice claw marks scourged into the table. What do you do?',
    options: [
      {
        text: 'Follow the trail, the applicants need their donuts to function.',
        setState: { goldCoin: true},
        nextText: 3
      },
      {
        text: 'Leave the building, never mind the donuts, you’re terrified at the clawmarks.',
        setState: { goldCoin: true},
        nextText: 8
      },
      {
        text: 'Shrug and order new donuts. We have the budget.',
        setState: { goldCoin: true},
        nextText: 8
      }
    ]
  },
  {
    id: 3,
    text: 'The trail of carnage leads up the stairs to the roof terrace. You hear faint crying and smell burned donuts from somewhere further up on the roof of the building. To further investigate, how will you climb the roof?',
    options: [
      {
        text: 'Get a ladder.',
        setState: { goldCoin: true},
        nextText: 5
      },
      {
        text: 'Use a grappling hook.',
        setState: { goldCoin: true},
        nextText: 4
      },
      {
        text: 'Throw yourself off the roof. This is too stressful.',
        setState: { goldCoin: true},
        nextText: 8
      }
    ]
  },
  {
    id: 4,
    text: 'The line broke. You fell down.',
    options: [
      {
        text: 'Try again',
        setState: { goldCoin: true},
        nextText: 3
      },
    ]
  },
  {
    id: 5,
    text: 'Having reached the highest point of the roof, to your amazement you find a massive green dragon bawling her eyes out and stuffing her face with donuts. What do you do?',
    options: [
      {
        text: 'Be kind, ask her what’s wrong.',
        setState: { goldCoin: true},
        nextText: 7
      },
      {
        text: 'Panic and scream.',
        setState: { goldCoin: true},
        nextText: 6
      },
      {
        text: 'Shrug, grieve your losses, return to the assessment. Nothing you haven’t seen before.',
        setState: { goldCoin: true},
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'You startled the dragon. This is creating more chaos.',
    options: [
      {
        text: 'Try again',
        setState: { goldCoin: true},
        nextText: 5
      },
    ]
  },
  {
    id: 7,
    text: '”I came here because I wanted a career change... I’m tired of burning villages and spreading terror and being seen as a monster... I just want to be a creative web developer! But... I have a lot of anxiety and I clawed through my laptop. When I saw the donuts, I went into a frenzy and devoured them to cope with all the stress. I’m so sorry, am I still eligible for the bootcamp?”',
    options: [
      {
        text: 'Yes of course! I relate to your struggle.',
        setState: { goldCoin: true},
        nextText: 8
      },
      {
        text: 'No, I’m calling the police.',
        setState: { goldCoin: true},
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: 'The End',
    options: [
    ]
  },
]
//----- This is the code block to alter -----

startGame()

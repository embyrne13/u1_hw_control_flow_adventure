let userName = prompt('What is your name?')

alert(`Hey ${userName}!`)

const startGame = () => {
  let userPlay = confirm('Do you want to go on an adventure?')
  playGame(userPlay)
}
const playGame = (choice) => {
  if (choice) {
    alert("Let's go on an adventure!")
    destination()
  } else {
    alert('No problem, next time!')
  }
}
const destination = () => {
  let destination = prompt(
    'Do you want to go to the mountains, beach, or city?'
  )
  if (destination === 'mountains') {
    let mountains = prompt('Good choice. Do you want to ski or snowboard?')
    if (mountains === 'ski') {
      let ski = prompt('Do you want to go to Vermont or Colorado?')
      if (ski === 'Vermont') {
        alert('Yay! East coast is the best.')
        startGame()
      } else if (ski === 'Colorado') {
        alert('Eh, west coast best coast they say.')
        startGame()
      } else {
        alert("That wasn't a choice!")
        startGame()
      }
    } else if (mountains === 'snowboard') {
      alert('Incorrect choice. You lose.')
      startGame()
    } else {
      alert("That wasn't a choice!")
      startGame()
    }
  } else if (destination === 'beach') {
    let beach = prompt('Do you want to surf or relax?')
    if (beach === 'surf') {
      const number = prompt(
        'Pick the amount of minutes you want to spend surfing: 10 or 30.'
      )
      switch (number) {
        case '10':
          alert('Good decision, short and sweet.')
          startGame()
          break
        case '30':
          alert('Getting a workout in!')
          startGame()
          break
      }
    } else if (beach === 'relax') {
      let relax = prompt('Do you like to read or sleep?')
      if (relax === 'read') {
        alert('Gotta keep the brain stimulated.')
        startGame()
      } else if (relax === 'sleep') {
        alert('My favorite thing to do.')
        startGame()
      }
    } else {
      alert("That wasn't a choice!")
      startGame()
    }
  } else if (destination === 'city') {
    let city = prompt('Do you want to live in Nyc or in Chicago?')
    if (city === 'Chicago') {
      let Chicago = prompt('Pizza or hotdog?')
      if (Chicago === 'pizza') {
        alert('Deep dish... yum')
        startGame()
      }
      if (Chicago === 'hotdog') {
        alert('Ehhh')
        startGame()
      }
    } else if (city === 'Nyc') {
      let Nyc = prompt('Do you want to live in Brooklyn, Manhattan, or Queens?')
      if (Nyc === 'Queens') {
        alert('Interesting choice.')
        startGame()
      }
      if (Nyc === 'Brooklyn') {
        alert('Yay! Brooklynite.')
        startGame()
      }
      if (Nyc === 'Manhattan') {
        alert('The famous Manhattan.')
        startGame()
      } else {
        alert("That wasn't a choice!")
        startGame()
      }
    } else {
      alert("That wasn't a choice!")
      startGame()
    }
  }
}

startGame()

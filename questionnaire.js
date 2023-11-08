// Place your JavaScript code here
// ...
window.onload = function () {
    const questions_1 = [
      'Irányítható vagyok.',
    ]  
    const questions_a = [
      'Befolyásolható vagyok.',
      'Könnyű megvezetni.',
      'Nem tudok gondoskodni magamról.',
      'Nincsenek céljaim.',
      'Nem hiszek az álmaimban. ',
      'A szerelem nem lehet az élet értelme.',
      'Nem érzem jól magam a bőrömben.',
      'Gyáva vagyok.',
      'Jellemző, hogy elmenekülök a problémáim elől. ',
      'Rossz ember vagyok.',
      'A félelmeim határoznak meg. '
    ]
  
    const questions_b = [
      'Minden emberben meg lehet bízni.',
      'Minden élőlény hasznos.',
      'Nehezemre esik hazudni. ',
      'Nincsenek nagy kétségeim az élettel kapcsolatban.',
      'Minden vélemény ugyanannyira értékes. ',
      'Mindent meg lehet bocsátani. '
    ]
  
    const questions_c = [
      'Ha valakit szépnek tartok, akkor jobban érint a véleménye.',
      'Nem tudom megélni a fájdalmat közvetítők (médiumok) segítsége nélkül. ',
      'Néha hagyom, hogy mások visszaéljenek a jóindulatommal. ',
      'Nem szeretek terveket készíteni.',
      'Hajlamos vagyok úszni az árral.',
      'Kíváncsi ember vagyok.',
      'Sebezhető vagyok.',
      'Szomorú vagyok, ha egyedül érzem magam. ',
      'Hajlamos vagyok cserélgetni az elveimet. ',
      'Nem tudom jól meghúzni a határaimat. '
    ]
  
    const questions_d = [
      'Ha azt látom, hogy valakit bántanak, megfigyelő maradok. ',
      'Ha megtagadom a válaszadást, akkor is válaszolok. ',
      'Néha nehezen jutok döntésre. ',
      'Átlagos vagyok.',
      'Középszerű vagyok.',
      'Unalmas vagyok.'
    ]
  
    const questions_e = [
      'Szeretek segíteni másoknak. ',
      'Szívesen dolgozom csapatban ',
      'Szeretem pontosan tudni, hogy mit várnak el tőlem.',
      'Szeretek tisztában lenni a játékszabályokkal.',
      'Hajlandó vagyok lemondani az irányításról a nagyobb jó érdekében. ',
      'Próbálok odafigyelni mások érzelmeire.',
      'Ha többen beszélgetünk, próbálok figyelni rá, hogy mindenki szóhoz jusson. ',
      'Több kindenről kéne kikérni az emberek véleményét. '
    ]
  
    const questions_f = [
      'Nem fontos tudni mi a munka célja, ha egyértelmű, hogy mit kell csinálni.',
      'Hajlandó vagyok feláldozni magam másokért. ',
      'Nem akarok hatalmat. ',
      'Tárgyalás révén mindig lehet jó kompromisszumot kötni. '
    ]
  
    const questions_g = [
      'gyom magamat csapdába csalogatni. ',
      'A kíváncsiságom erősebb, mint az ösztöneim. ',
      'A tagadást felcserélem az értékválasztással.'
    ]
  
    const questions_h = [
      'Amikor közösen csinálunk valamit, akkor nem szükséges figyelembe venni a kívülállókat. Sokkal több dolog bomlik ki az összefonódásból, mint a szüntelen figyelemből. ',
      'Ha az igazság nehezen kifürkészhető, akkor elég a barátokra hagyatkozni. ',
      'Lehet csalni a jobb cél érdekében.'
    ]
  
    function selectOneFrom (array) {
      const selected = array[Math.floor(Math.random() * array.length)]
      return selected
    }
  
    function selectQuestion (questionNumber, score) {
      const questionsPool = []
      if (questionNumber < 2) {
        questionsPool.push(...questions_1) 
      } 
      if (-40 <= score && score < 0 && 1 < questionNumber) {
        questionsPool.push(...questions_a)
      }
      if (-40 <= score && score <= -14 && 1 < questionNumber) {
        questionsPool.push(...questions_b)
      }
      if (-24 <= score && score < 24 && 1 < questionNumber && questionNumber < 15) {
        questionsPool.push(...questions_c)
      }
      if (-10 <= score && score < 10 && 1 < questionNumber) {
        questionsPool.push(...questions_d)
      }
      if (0 <= score && score < 40 && 1 < questionNumber) {
        questionsPool.push(...questions_e)
      }
      if (14 <= score && score < 40 && 1 < questionNumber) {
        questionsPool.push(...questions_f)
      }
      if (-40 <= score && score < -30 && 1 < questionNumber  && questionNumber > 15) {
        questionsPool.push(...questions_g)
      }
      if (30 <= score && score < 40 && 1 < questionNumber  && questionNumber > 15) {
        questionsPool.push(...questions_h)
      }
  
      const selected = selectOneFrom(questionsPool)
      return selected
    }
  
    function askQuestion (question) {
      console.log(question)
      const score = parseInt(
        prompt('Mennyire értesz egyet ezzel az állítással? (-2, -1, 0, 1, 2): ')
      )
      return score
    }
  
    function deleteSelectedQuestion (toDelete) {
      for (let questionsArray of [
        questions_1,
        questions_a,
        questions_b,
        questions_c,
        questions_d,
        questions_e,
        questions_f,
        questions_g,
        questions_h
      ]) {
        const index = questionsArray.indexOf(toDelete)
        if (index !== -1) {
          questionsArray.splice(index, 1)
        }
      }
    }
  
    const questionContainer = document.getElementById('question-container')
    const answerButtons = document.getElementById('answer-buttons')
    const resetButton = document.getElementById('reset-button')
    
    let questionNumber = 1
    let currentScore = 0
    
    function displayQuestion () {
      const questionText = document.getElementById('question-text')
      if (questionNumber <= 20) {
        const selectedQuestion = selectQuestion(questionNumber, currentScore)

        // Remake question paragraph in the DOM
        questionContainer.innerHTML = ''
        const questionElement = document.createElement('p')
        questionElement.textContent = `${questionNumber}. ${selectedQuestion}`
        questionElement.id = 'id="question-text'
        questionElement.classList.add('fade-in-text')
        questionContainer.appendChild(questionElement)
  
        
        answerButtons.innerHTML = '' // Clear previous answer buttons
  
        // Inside the loop where you create buttons:
        for (let value of [-2, -1, 0, 1, 2]) {
          const button = document.createElement('button')
          button.id = `answer-button-${value}` // Set a unique id for each button
          button.classList.add('button')
          button.addEventListener('click', () => {
            handleAnswer(value)
          })
          answerButtons.appendChild(button)
        }
      } else {
        questionText.textContent = `Köszönöm, hogy kitöltötted a személyiségtesztet! \r\n \r\n Remélem, hogy a kitöltés által megtanultál magadról valami fontosat. Ha mégsem érzed önazonosnak, amit kiolvasol az állításaimból, nyugodtan töltsd ki mégegyszer a tesztet. `
        answerButtons.innerHTML = ''
        resetButton.style.display = 'block'
      }
    }
  
    function handleAnswer (answer) {
      currentScore += answer
      questionNumber++
      displayQuestion()
    }
  
    resetButton.addEventListener('click', () => {
      questionNumber = 1
      currentScore = 0
      displayQuestion()
    })
  
    displayQuestion()
  }

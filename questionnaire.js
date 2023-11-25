// Place your JavaScript code here
// ...
window.onload = function () {
    const questions_1 = [
      'Irányítható vagyok.',
    ]  
    const questions_2b = [
      'A tagadás az énem felszámolása',
    ]  
    const questions_3b = [
      'Önző vagyok.',
    ]      
    const questions_2k = [
      'Ha nem döntök, megtalálhatom magam.',
    ]  
    const questions_3k = [
      'A választás illúzió, a valódi dolgok belülről jönnek és egyértelműek.',
    ]  
    const questions_2j = [
      'Életigenlő vagyok.',
    ]  
     const questions_3j = [
      'A felelősség ugyanolyan fontos, mint az őszinteség.',
    ]  

    const questions_a = [
      'Befolyásolható vagyok.',
      'Könnyű megvezetni.',
      'Nem tudok gondoskodni magamról.',
      'Nincsenek céljaim.',
      'Nem hiszek az álmaimban. ',
      'A szerelem nem lehet az élet értelme.',
      'Jellemző, hogy elmenekülök a problémáim elől. ',
      'A félelmeim határoznak meg. ',
      'Ez hamis: A felelősség nem olyan fontos, mint az őszinteség. '
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
      'Nem tudom megélni a fájdalmat közvetítők (médiumok) segítsége nélkül. ',
      'Hajlamos vagyok úszni az árral.',
      'Kíváncsi ember vagyok.',
      'Sebezhető vagyok.',
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
      'Hagyom magamat csapdába csalogatni. ',
      'A kíváncsiságom erősebb, mint az ösztöneim. ',
      'A tagadást felcserélem az értékválasztással.'
    ]
  
    const questions_h = [
      'Amikor közösen csinálunk valamit, akkor nem szükséges figyelembe venni a kívülállókat. Sokkal több dolog bomlik ki az összefonódásból, mint a szüntelen figyelemből. ',
      'Ha az igazság nehezen kifürkészhető, akkor elég a barátokra hagyatkozni. ',
      'A tisztelet fontosabb, mint hogy kinek van igaza.',
      'Együtt könnyebb.'
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
      if (score < 0 && 3 > questionNumber && questionNumber > 1) {
        questionsPool.push(...questions_2b)
      }
      if (score < 0 && 4 > questionNumber && questionNumber > 2) {
        questionsPool.push(...questions_3b)
      }
      if (score <= 0 && 3 > questionNumber && questionNumber > 1) {
        questionsPool.push(...questions_2k)
      }
      if (score <= 0 && 4 > questionNumber && questionNumber > 2) {
        questionsPool.push(...questions_3k)
      }
      if (score > 0  && 3 > questionNumber && questionNumber > 1) {
        questionsPool.push(...questions_2j)
      }
      if (score > 0  && 4 > questionNumber && questionNumber > 2) {
        questionsPool.push(...questions_3j)
      }
      if (-40 <= score && score < 0 && 3 < questionNumber) {
        questionsPool.push(...questions_a)
      }
      if (-40 <= score && score <= -14 && 3 < questionNumber) {
        questionsPool.push(...questions_b)
      }
      if (-24 <= score && score < 24 && 3 < questionNumber && questionNumber < 15) {
        questionsPool.push(...questions_c)
      }
      if (-10 <= score && score < 10 && 3 < questionNumber) {
        questionsPool.push(...questions_d)
      }
      if (0 <= score && score < 40 && 3 < questionNumber) {
        questionsPool.push(...questions_e)
      }
      if (14 <= score && score < 40 && 3 < questionNumber) {
        questionsPool.push(...questions_f)
      }
      if (-40 <= score && score < -30 && 3 < questionNumber  && questionNumber > 15) {
        questionsPool.push(...questions_g)
      }
      if (30 <= score && score < 40 && 3 < questionNumber  && questionNumber > 15) {
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
        questions_2b,
        questions_3b,
        questions_2k,
        questions_3k,
        questions_2j,
        questions_3j,
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


window.onload = function () {
  let questions_1 = []
  let questions_2b = []
  let questions_3b = []
  let questions_2k = []
  let questions_3k = []
  let questions_2j = []
  let questions_3j = []
  let questions_be = []
  let questions_bk = []
  let questions_ke = []
  let questions_kk = []
  let questions_je = []
  let questions_jk = []
  let questions_bv = []
  let questions_kv = []
  let questions_jv = []
  let questions_21b = []
  let questions_22b = []
  let questions_22k = []
  let questions_22j = []

  function fillQuestions() {
    questions_1 = [
      'Irányítható vagyok.'
    ]
    questions_2b = [
      'A tagadás az énem felszámolása'
    ]
    questions_3b = [
      'Önző vagyok.'
    ]
    questions_2k = [
      'Ha megtagadom a döntést, akkor közelebb kerülhetek saját magam tisztasághoz.'
    ]
    questions_3k = [
      'A választás illúzió, a valódi dolgok belülről jönnek és egyértelműek.'
    ]
    questions_2j = [
      'Életigenlő vagyok.'
    ]
    questions_3j = [
      'A felelősség ugyanolyan fontos, mint az őszinteség.'
    ]
    questions_be = [
      'Befolyásolható vagyok.',
      'Könnyű megvezetni.',
      'Nem tudok gondoskodni magamról.',
      'Hajlamos vagyok cserélgetni az elveimet.',
      'Nincsenek valódi céljaim.',
      'Nem hiszek az álmaimban. ',
      'A félelmeim határoznak meg. ',
      'Fantomok között élek',
      'Nem vagyok méltó a bennem lévő potenciálra.'
    ]
    questions_bk = [
      'A kapcsolataimban próbálok mindig a másiknak megfelelni és hozzá igazítani magamat.',
      'A felelősség legalább olyan fontos, mint az őszinteség.',
      'Nincs olyan pillanat, mikor a hazugság elfogadható',
      'Elmenekülök a problémáim elől. ',
      'A múlttal való folytonosság fontosabb, mint jelen lenni a pillanatban.',
      'Bűnt elkövetni akkor is önsorsrontás, ha senki nem tud róla és a materiális következmények nem számottevőek',
      'Nem én vagyok a legfontosabb a saját életemben.',
      'Mindig ilyen negatív vagyok'
    ]
    questions_ke = [
      'Nem tudom megélni a fájdalmat közvetítők (médiumok) segítsége nélkül. ',
      'Hajlamos vagyok úszni az árral.',
      'Sebezhető vagyok.',
      'A szépség kevésbe fontos, mint a jóság',
      'A türelem fontosabb, mint a szabadság.',
      'Vannak helyzetek, amikben nem érdemes dönteni.'
    ]
    questions_kk = [
      'Ha megtagadom a válaszadást, akkor is válaszolok. ',
      'Átlagos vagyok.',
      'Középszerű vagyok.',
      'Nincs új a nap alatt',
      'Unalmas vagyok.',
      'Nem vagyok jobb vagy különb a többieknél',
      'Érdektelen vagyok',
      'A jelentőségem viszonylagos'
    ]
    questions_je = [
      'Szeretek segíteni másoknak. ',
      'Szívesen dolgozom csapatban ',
      'Szeretem pontosan tudni, hogy mit várnak el tőlem.',
      'Szeretek tisztában lenni a játékszabályokkal.',
      'Hajlandó vagyok lemondani az irányításról a nagyobb jó érdekében. ',
      'Próbálok odafigyelni mások érzelmeire.',
      'Ha többen beszélgetünk, próbálok figyelni rá, hogy mindenki szóhoz jusson. ',
      'Több kindenről kéne kikérni az emberek véleményét. '
    ]
    questions_jk = [
      'Hajlandó vagyok feláldozni magam másokért. ',
      'Nem akarok a világ ura lenni. ',
      'Tárgyalás révén mindig lehet jó kompromisszumot kötni. ',
      'Minden emberben meg lehet bízni.',
      'Minden élőlény hasznos.',
      'Minden vélemény ugyanannyira értékes. ',
      'Mindent meg lehet bocsátani. ',
      'Ha valakit szeretek, mindent hajlandó vagyok megbocsátani neki'
    ]
    questions_bv = [
      'Hagyom magamat csapdába csalogatni. ',
      'A tiszta kíváncsiság szörnyeteggé tehet.',
      'A tagadást felcserélem az értékválasztással.',
      'Nem akarok tudni bizonyos dolgokról',
      'A szabadságom értéktelen, ha nem alkuszik meg a többiek szabadságával',
      'A szerelem lényege az, hogy a másikból magamra tudok nézni.',
      'A kellő információk mentén el tudnám dönteni két ember közül, hogy melyikük élete ér többet'
    ]
    questions_kv = [
      'Ha kapcsolatba lépek egy másik entitással, akkor jól el tudom különíteni, hogy mi származik belőle és mi származik belőlem.',
      'Nem bánom, hogy nem vagyok különleges.',
      'El tudom engedni az egomat.',
      'Mikor elolvasod és megérted az állítást, amire reagálnod kell, feloldódik az, amire az állítás eredetileg vonatkozik.',
      'El tudom engedni magam.',
      'A szerelem lényege a kölcsönös szabadság.'
    ]
    questions_jv = [
      'Amikor közösen csinálunk valamit, akkor nem szükséges figyelembe venni a kívülállókat. Sokkal több dolog bomlik ki az összefonódásból, mint a szüntelen figyelemből. ',
      'Bizonyos krízishelyzetekben jobb a barátokra hagyatkozni, mint a saját fejünket követni.',
      'A köklcsönös tisztelet fontosabb, mint hogy kinek van igaza.',
      'Együtt könnyebb.',
      'Az életem értelmét megtalálhatom a többiekben.',
      'A szerelem lényege, hogy kiegészítjük egymást.',
      'Ha másokat kéne vezetnem, az torzítaná a személyiségemet',
      'Nem tudnám eldönteni, hogy két ember közül melyikük élete értékesebb.',
      'Azzá válok, aminek mások látnak.'

    ]

    questions_21b = [
      'Kívülálló vagyok.'
    ]

    questions_22b = [
      'Eltakarom magam elől a világot.'
    ]
    questions_22k = [
      'Nincs és soha nem is volt valódi személyiségem. Álarcaim sokasága mögött Semmi van, amit a tévelygésem életre kelt. Űr vagyok, ami a világra nyílik.'
    ]
    questions_22j = [
      'Mindenki egyedül hal meg.'
    ]

  }

  function selectOneFrom(array) {
    const selected = array[Math.floor(Math.random() * array.length)]
    return selected
  }

  function selectQuestion(questionNumber, score) {
    const questionsPool = []
    if (questionNumber < 2) {
      questionsPool.push(...questions_1)
    }

    if (score < 0 && 3 > questionNumber && questionNumber > 1) {
      questionsPool.push(...questions_2b)
    }
    if (0 < score && 3 > questionNumber && questionNumber > 1) {
      questionsPool.push(...questions_2j)
    }
    if (-1 < score && score < 1 && 3 > questionNumber && questionNumber > 1) {
      questionsPool.push(...questions_2k)
    }

    if (score < 0 && 4 > questionNumber && questionNumber > 2) {
      questionsPool.push(...questions_3b)
    }
    if (-2 < score && score < 2 && 4 > questionNumber && questionNumber > 2) {
      questionsPool.push(...questions_3k)
    }
    if (0 < score && 4 > questionNumber && questionNumber > 2) {
      questionsPool.push(...questions_3j)
    }

    if (-44 <= score && score < 0 && 3 < questionNumber && questionNumber < 15) {
      questionsPool.push(...questions_be)
    }
    if (-44 <= score && score < -10 && 7 < questionNumber && questionNumber < 20) {
      questionsPool.push(...questions_bk)
    }

    if (- 6 <= score && score <= 6 && 3 < questionNumber && questionNumber < 10) {
      questionsPool.push(...questions_ke)
    }
    if (-5 <= score && score <= 5 && 3 < questionNumber && questionNumber < 20) {
      questionsPool.push(...questions_kk)
    }

    if (0 < score && score < 44 && 3 < questionNumber && questionNumber < 15) {
      questionsPool.push(...questions_je)
    }
    if (14 < score && score < 44 && 7 < questionNumber && questionNumber < 20) {
      questionsPool.push(...questions_jk)
    }

    if (-44 <= score && score < -22 && 17 <= questionNumber && questionNumber < 21) {
      questionsPool.push(...questions_bv)
    }
    if (-10 <= score && score <= 10 && 17 <= questionNumber && questionNumber < 22) {
      questionsPool.push(...questions_kv)
    }
    if (22 <= score && score < 44 && 17 <= questionNumber && questionNumber < 22) {
      questionsPool.push(...questions_jv)
    }

    if (score < -6 && 20 < questionNumber && questionNumber < 22) {
      questionsPool.push(...questions_21b)
    }
    if (score < -6 && questionNumber > 21) {
      questionsPool.push(...questions_22b)
    }
    if (-6 <= score && score <= 6 && questionNumber > 21) {
      questionsPool.push(...questions_22k)
    }
    if (score > 6 && questionNumber > 21) {
      questionsPool.push(...questions_22j)
    }



    const selected = selectOneFrom(questionsPool)
    return selected
  }

  function askQuestion(question) {
    console.log(question)
    const score = parseInt(
      prompt('Mennyire értesz egyet ezzel az állítással? (-2, -1, 0, 1, 2): ')
    )
    return score
  }

  function selectImage(questionNumber, score) {
    // 1-8: I -3 (-scoreC) I -2 (-scoreB) I -1 (-scoreA) I 0 I 1 (scoreA) I 2 (scoreB) I 3 (scoreC) I

    if (0 < questionNumber && questionNumber <= 8 ) {
      const scoreA = 2
      const scoreB = 6
      const scoreC = 14

      if (score < -scoreC) {
        return 'I -3.png'
      }
      if (-scoreC <= score && score < -scoreB) {
        return 'I -2.png'
      }
      if (-scoreB <= score && score < -scoreA) {
        return 'I -1.png'
      }
      if (-scoreA <= score && score <= scoreA) {
        return 'I 0.png'
      }
      if (scoreA < score && score <= scoreB) {
        return 'I 1.png'
      }
      if (scoreB < score && score <= scoreC) {
        return 'I 2.png'
      }
      if (scoreC < score) {
        return 'I 3.png'
      }
    }
    if (8 < questionNumber && questionNumber <= 15 ) {
      const scoreA = 4
      const scoreB = 10
      const scoreC = 22

      if (score < -scoreC) {
        return 'II -3.png'
      }
      if (-scoreC <= score && score < -scoreB) {
        return 'II -2.png'
      }
      if (-scoreB <= score && score < -scoreA) {
        return 'II -1.png'
      }
      if (-scoreA <= score && score <= scoreA) {
        return 'II 0.png'
      }
      if (scoreA < score && score <= scoreB) {
        return 'II 1.png'
      }
      if (scoreB < score && score <= scoreC) {
        return 'II 2.png'
      }
      if (scoreC < score) {
        return 'II 3.png'
      }
    }
    if (15 < questionNumber && questionNumber <= 22 ) {
      const scoreA = 8
      const scoreB = 12
      const scoreC = 40

      if (score < -scoreC) {
        return 'III -3.png'
      }
      if (-scoreC <= score && score < -scoreB) {
        return 'III -2.png'
      }
      if (-scoreB <= score && score < -scoreA) {
        return 'III -1.png'
      }
      if (-scoreA <= score && score <= scoreA) {
        return 'III 0.png'
      }
      if (scoreA < score && score <= scoreB) {
        return 'III 1.png'
      }
      if (scoreB < score && score <= scoreC) {
        return 'III 2.png'
      }
      if (scoreC < score) {
        return 'III 3.png'
      }
    }
  }

  function updateImage() {
    if (questionNumber > 22) {
      return
    }

    const image = document.getElementById('image')
    const imageContainer = document.getElementById('image-container')
    
    const imageSource = `piktogramok/${encodeURIComponent(selectImage(questionNumber, currentScore))}`
    if (!image.src.includes(imageSource)) {
      imageContainer.removeChild(image)
      const newImage = document.createElement('img')
      newImage.src = imageSource
      newImage.id = 'image'
      newImage.classList.add(...['fade-in-image', 'piktogram-image'])
      imageContainer.appendChild(newImage)
    }
  }

  function deleteSelectedQuestion(toDelete) {
    for (let questionsArray of [
      questions_1,
      questions_2b,
      questions_3b,
      questions_2k,
      questions_3k,
      questions_2j,
      questions_3j,
      questions_be,
      questions_bk,
      questions_ke,
      questions_kk,
      questions_je,
      questions_jk,
      questions_bv,
      questions_kv,
      questions_jv,
      questions_21b,
      questions_22b,
      questions_22k,
      questions_22j
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

  function displayQuestion() {
    const questionText = document.getElementById('question-text')
    if (questionNumber <= 22) {
      const selectedQuestion = selectQuestion(questionNumber, currentScore)

      // Remove the selected question from the pool to avoid repetition
      deleteSelectedQuestion(selectedQuestion)

      // Remake question paragraph in the DOM
      questionContainer.innerHTML = ''
      const questionElement = document.createElement('p')
      questionElement.textContent = `${questionNumber - 1}. ${selectedQuestion}`
      questionElement.id = 'question-text'
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

  function handleAnswer(answer) {
    currentScore += answer
    questionNumber++
    displayQuestion()
    updateImage()
  }

  resetButton.addEventListener('click', () => {
    questionNumber = 1
    currentScore = 0
    fillQuestions()
    displayQuestion()
    updateImage()
  })

  fillQuestions()
  displayQuestion()
  updateImage()
}

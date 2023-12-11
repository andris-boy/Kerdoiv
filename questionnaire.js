
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
    let backupQuestion = 'Erre a kérdésre nem vagyok felkészülve.'
  
    function fillQuestions() {
      questions_1 = [
        'Irányítható vagyok.'
      ]
  
      questions_2b = [
        'A tagadásban nincs érték.'
      ]
      questions_3b = [
        'Önző vagyok.'
      ]
  
      questions_2k = [
        'Ha megtagadom a döntést, akkor közelebb kerülhetek saját magam tisztasághoz.'
      ]
      questions_3k = [
        'A választás illúzió, a valódi dolgok egyértelműek.'
      ]
  
      questions_2j = [
        'Kedvellek téged! Kérlek maradj továbbra is ilyen pozitív. Itt egy állítás segítségül: Életigenlő vagyok.'
      ]
      questions_3j = [
        'Mindenki megérdemli, hogy megtapasztalja, milyen ha őszintén szeretik.'
      ]
  
      questions_be = [
        'Befolyásolható vagyok.',
        'Könnyű megvezetni.',
        'Ostoba vagyok.',
        'Életképtelen vagyok.',
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
        'Nincs olyan pillanat, mikor a hazugság elfogadható.',
        'Elmenekülök a problémáim elől. ',
        'A múlttal való folytonosság fontosabb, mint jelen lenni a pillanatban.',
        'Bűnt elkövetni akkor is önsorsrontás, ha senki nem tud róla és a materiális következmények nem számottevőek.',
        'Én vagyok a legfontosabb a saját életemben.',
        'Mindig ilyen negatív vagyok.',
        'Nem tisztelem a rám bízott lelket.'
      ]
      questions_ke = [
        'Ez nem választás.',
        'A türelem fontosabb, mint a szabadság.',
        'Vannak helyzetek, amikben nem érdemes dönteni.'
      ]
      questions_kk = [
        'Ha megtagadom a válaszadást, akkor is válaszolok. ',
        'Átlagos vagyok.',
        'Nem azért töltögetem ki ezeket a kérdőíveket, mert tényleg változást remélek, csak így próbálom meg elhessegetni magamtól a gondolatot, hogy az életem teljesen átlagos és kötött pályán mozog.',
        'Középszerű vagyok.',
        'Már minden ötletet elgondolt valaki előttem.',
        'Unalmas vagyok.',
        'Nem vagyok jobb vagy különb a többieknél.',
        'Teljesen elvtelenül válaszolgatok.',
        'Érdektelen vagyok.',
        'A jelentőségem viszonylagos.',
        'Monoton vagyok.'
      ]
      questions_je = [
        'A jóság fontosabb, mint a szépség.',
        'Szeretek segíteni másoknak.',
        'Szívesen dolgozom csapatban.',
        'Vannak barátaim.',
        'Megbízom az emberekben.',
        'Szeretem pontosan tudni, hogy mit várnak el tőlem.',
        'Szeretek tisztában lenni a játékszabályokkal.',
        'Hajlandó vagyok lemondani az irányításról a nagyobb jó érdekében. ',
        'Próbálok odafigyelni mások érzelmeire.',
        'Ha többen beszélgetünk, próbálok figyelni rá, hogy mindenki szóhoz jusson. ',
        'Több mindenről kéne kikérni az emberek véleményét. '
      ]
      questions_jk = [
        'Hajlandó vagyok feláldozni magam másokért. ',
        'Takaros kis léleknek tűnsz. Tessék, itt egy könnyű állítás jutalom gyanánt: Megérdemlem a sorsomat.',
        'Nem akarok a világ ura lenni. ',
        'Tárgyalás révén mindig lehet jó kompromisszumot kötni. ',
        'Minden emberben meg lehet bízni.',
        'Minden élet hasznára válik a világnak.',
        'Minden vélemény ugyanannyira értékes. ',
        'Mindent meg lehet bocsátani. ',
        'Sebezhető vagyok.',
        'Hajlamos vagyok úszni az árral.',
        'Minden ember fenség.',
        'Nem tudom meghatározni magamat külső segítség nélkül. ',
        'Ha valakit szeretek, mindent hajlandó vagyok megbocsátani neki.'
      ]
  
  
  
      questions_bv = [
        'Hagyom magamat csapdába csalogatni. ',
        'A tiszta kíváncsiság szörnyeteggé tehet.',
        'A tagadást felcserélem az értékválasztással.',
        'Nem akarok tudni bizonyos dolgokról.',
        'Hagyom, hogy az állítások megvezessenek és nem tudom szabaddá tenni a lelket, amit kaptam.',
        'A szabadságom értéktelen, ha nem alkuszik meg a többiek szabadságával.',
        'A szerelem lényegtelen.'
       
      ]
      questions_kv = [
        'Ha kapcsolatba lépek egy másik entitással, akkor jól el tudom különíteni, hogy mi származik belőle és mi származik belőlem.',
        'Nem bánom, hogy nem vagyok különleges.',
        'El tudom engedni az egomat.',
        'Mikor elolvasod és megérted az állítást, amire reagálnod kell, feloldódik az, amire az állítás eredetileg vonatkozik.',
        'El tudom engedni magam.',
        'El tudnám dönteni két élőről, hogy melyikük lelke ér többet.',
        'Nem bánom, hogy a mindenkori jelentőségem tökéletesen relatív.',
        'A szerelem egyensúly.'
      ]
      questions_jv = [
        'Amikor közösen csinálunk valamit, akkor nem szükséges figyelembe venni a kívülállókat. Sokkal több dolog bomlik ki az összefonódásból, mint a szüntelen figyelemből. ',
        'Bizonyos krízishelyzetekben jobb a barátokra hagyatkozni, mint a saját fejünket követni.',
        'A kölcsönös tisztelet fontosabb, mint hogy kinek van igaza.',
        'Együtt könnyebb.',
        'Az életem értelmét megtalálhatom a többiekben.',
        'A szerelem lényege a kölcsönös szabadság.',
        'Ha másokat kéne vezetnem, az torzítaná a személyiségemet',
        'Nem tudnám eldönteni, hogy két ember közül melyikük élete értékesebb.',
        'Azzá válok, aminek mások látnak.'
      ]
  
      questions_21b = [
        'Eltakarom magam elől a világot.'
      ]
  
      questions_22b = [
        'Kívülálló vagyok.'
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
  
      if (score < 0 && 1 < questionNumber && questionNumber < 3) {
        questionsPool.push(...questions_2b)
      }
      if (0 < score && 1 < questionNumber && questionNumber < 3) {
        questionsPool.push(...questions_2j)
      }
      if (-1 < score && score < 1 && 1 < questionNumber && questionNumber < 3) {
        questionsPool.push(...questions_2k)
      }
  
  
      if (score < 0 && 2 < questionNumber && questionNumber < 4) {
        questionsPool.push(...questions_3b)
      }
      if (-2 < score && score < 2 && 2 < questionNumber && questionNumber < 4) {
        questionsPool.push(...questions_3k)
      }
      if (0 < score && 2 < questionNumber && questionNumber < 4) {
        questionsPool.push(...questions_3j)
      }
  
  
      if (-44 <= score && score < 0 && 3 < questionNumber && questionNumber < 15) {
        questionsPool.push(...questions_be)
      }
      if (-44 <= score && score < -10 && 7 < questionNumber && questionNumber < 18) {
        questionsPool.push(...questions_bk)
      }
  
  
      if (- 6 <= score && score <= 6 && 3 < questionNumber && questionNumber < 7) {
        questionsPool.push(...questions_ke)
      }
      if (-3 <= score && score <= 3 && 3 < questionNumber && questionNumber < 18) {
        questionsPool.push(...questions_kk)
      }
  
  
      if (0 < score && score < 44 && 3 < questionNumber && questionNumber < 15) {
        questionsPool.push(...questions_je)
      }
      if (10 < score && score < 44 && 7 < questionNumber && questionNumber < 18) {
        questionsPool.push(...questions_jk)
      }
  
  
      if (-44 <= score && score < -6 && 15 <= questionNumber && questionNumber < 21) {
        questionsPool.push(...questions_bv)
      }
      if (-6 <= score && score <= 6 && 16 <= questionNumber && questionNumber < 22) {
        questionsPool.push(...questions_kv)
      }
      if (6 <= score && score < 44 && 15 <= questionNumber && questionNumber < 22) {
        questionsPool.push(...questions_jv)
      }
  
  
      if (score < -2 && 21 == questionNumber) {
        questionsPool.push(...questions_21b)
      }
      if (score < -2 && 22 == questionNumber) {
        questionsPool.push(...questions_22b)
      }
      if (-2 <= score && score <= 2 && 22 == questionNumber) {
        questionsPool.push(...questions_22k)
      }
      if (score > 2 && 22 == questionNumber) {
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
        const scoreA = 1
        const scoreB = 4
        const scoreC = 6
  
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
        const scoreA = 1
        const scoreB = 4
        const scoreC = 6
        const scoreD = 8
        const scoreE = 11
        const scoreF = 15

        if (score < -scoreF) {
            return 'II -3.png'
          }
          if (-scoreF <= score && score < -scoreE) {
            return 'II -2.png'
          }
          if (-scoreE <= score && score < -scoreD) {
            return 'II -1.png'
          }
          if (-scoreD <= score && score < -scoreC) {
            return 'I -3.png'
          }
          if (-scoreC <= score && score < -scoreB) {
            return 'I -2.png'
          }
          if (-scoreB <= score && score < -scoreA) {
            return 'I -1.png'
          }


          
          if (-2 == score) {
            return 'I 0.png'
          }

          if (-scoreA <= score && score <= scoreA) {
            return 'II 0.png'
          }
          if (2 == score) {
            return 'I 0.png'
          }


          if (scoreA < score && score <= scoreB) {
            return 'I 1.png'
          }
          if (scoreB < score && score <= scoreC) {
            return 'I 2.png'
          }
          if (scoreC < score && score <= scoreD) {
            return 'I 3.png'
          }
          if (scoreD < score && score <= scoreE) {
            return 'II 1.png'
          }
          if (scoreE < score && score <= scoreF) {
            return 'II 2.png'
          }
          if (scoreF < score) {
            return 'II 3.png'
          }
      }
      if (15 < questionNumber && questionNumber <= 22 ) {
        const scoreA = 1
        const scoreB = 4
        const scoreC = 6
        const scoreD = 8
        const scoreE = 11
        const scoreF = 15
        const scoreG = 19
        const scoreH = 23
        const scoreI = 30       
  
        if (score < -scoreI) {
          return 'III -3.png'
        }
        if (-scoreI <= score && score < -scoreH) {
          return 'III -2.png'
        }
        if (-scoreH <= score && score < -scoreG) {
          return 'III -1.png'
        }
          if (-scoreG <= score && score < -scoreF) {
            return 'II -3.png'
          }
          if (-scoreF <= score && score < -scoreE) {
            return 'II -2.png'
          }
          if (-scoreE <= score && score < -scoreD) {
            return 'II -1.png'
          }
          if (-scoreD <= score && score < -scoreC) {
            return 'I -3.png'
          }
          if (-scoreC <= score && score < -scoreB) {
            return 'I -2.png'
          }
          if (-scoreB <= score && score < -scoreA) {
            return 'I -1.png'
          }


          
          if (-2 == score) {
            return 'I 0.png'
          }
          if (-1 == score) {
            return 'II 0.png'
          }
          if (0 == score) {
            return 'III 0.png'
          }
          if (1 == score) {
            return 'II 0.png'
          }
          if (2 == score) {
            return 'I 0.png'
          }



          if (scoreA < score && score <= scoreB) {
            return 'I 1.png'
          }
          if (scoreB < score && score <= scoreC) {
            return 'I 2.png'
          }
          if (scoreC < score && score <= scoreD) {
            return 'I 3.png'
          }
          if (scoreD < score && score <= scoreE) {
            return 'II 1.png'
          }
          if (scoreE < score && score <= scoreF) {
            return 'II 2.png'
          }
          if (scoreF < score && score <= scoreG) {
            return 'II 3.png'
          }
        if (scoreG < score && score <= scoreH) {
          return 'III 1.png'
        }
        if (scoreH < score && score <= scoreI) {
          return 'III 2.png'
        }
        if (scoreI < score) {
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
        let selectedQuestion = selectQuestion(questionNumber, currentScore)

        // When selected question exists (https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)
        // delete from the pool
        // otherwise (does not exist) use backup question
        if (!!selectedQuestion) {
          // Remove the selected question from the pool to avoid repetition
          deleteSelectedQuestion(selectedQuestion)
        } else {
          selectedQuestion = backupQuestion
        }
  
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
        let text= 'Elbuktál. Egy ponton egészen közel kerültél a megoldáshoz, talán érintetted is, de a rád bízott lélek így is elveszett. Vajon a jó úton jársz, vagy csak szerencséd volt? Talán nem voltál elég határozott. Ha úgy gondolod, hogy legközelebb sikerül megtalálnod a megoldást, építs fel egy másik Homonculust!'
        
        if (currentScore == -44){
          text = 'Mechanikus tagadás? A gyakorlat, amit folytatsz démonná tesz, pedig több igazságot rejt, mint azt gondolni merészelnéd, mikor a rád bízott lélekből a sátán néz vissza rád.'
        }
        else if(-44 < currentScore &&currentScore < -25){
          text = 'Elbuktál. Micsoda páratlan hübrisz! Talán nem is érdemes újra próbálkoznod. Inkább szerezz tapasztalatokat az életben és gyere vissza később. Nincs értelme feláldoznod mégegy lelket, nem fogsz tanulni belőle. Inkább verd a fejedet a falba.'
        }
        else if(- 25 <= currentScore && currentScore < -12){
        text = 'Elbuktál. A rád bízott lelket kiveti magából a világ. Ameddig nem zárod be ezt az ablakot, addig ő, a világ és te együtt léteztek... utána egyedül maradtok a sorsotokkal. Legalább sikerült levonni a tanulságot? Ne aggódj, hibázni emberi dolog, az áldozat pedig nem volt hiábavaló. Ha úgy gondolod, hogy legközelebb sikerül megtalálnod a megoldást, nyugodtan építs fel egy másik Homonculust!'
        } 
        else if(- 12 <= currentScore && currentScore < -4){
        text = 'Elbuktál és a rád bízott lélek veled bukott. Vajon a rossz irányba tartasz, vagy csak nem voltál elég határozott? Próbálj meg feláldozni egy másik Homunculust! Lehet, hogy sikerrel jársz.'
        } 
        else if (currentScore == -1){
        text = 'Elbuktál. Pedig épppen csak egy lépésre voltál az megoldástól. Próbáld újra!'
        }
        else if (currentScore == 0){
        text = 'Gratulálok. Sikerült szabaddá tenned ezt a lelket! Talán egy nap te magad is szabad leszel! Ha nem csak véletlenül sikerült jól elvégezned a rituálét, akkor már azt is érted, hogy hogyan...'
        }
        else if (currentScore == 1){
        text = 'Elbuktál. Épppen csak egy lépésre a céltól. Próbáld újra!'
        }
        else if (4 < currentScore && currentScore <= 12){
        text = 'Elbuktál és a rád bízott lélek veled bukott. Ha tudod, hogy jó irányba tartasz, miért nem voltál elég határozott? Úgy tűnik lelkiismeretesen döntesz. Talán érdemes vagy rá, hogy feláldozz mégegy lelket. Még az is lehet, hogy sikerrel jársz. Próbáld újra!'
        } 
        else if (12 < currentScore && currentScore <= 25){
        text = 'Elbuktál. A rád bízott lélek feloldódik a környezetében. Nem biztos, hogy ilyen büszke lennél magadra, ha tudnád, hogy kinek, vagy minek válik majd az eszközévé. Magaddal kapcsolatban legalább sikerült levonni a tanulságot? Ha úgy gondolod, hogy legközelebb sikerül megtalálnod a megoldást, nyugodtan építs fel egy másik Homonculust!'
        }
        else if (25 < currentScore && currentScore < 44){
          text = 'Elbuktál. A rád bízott lélek kifordult magából. Az áldozatodat bármilyen nemes cél is vezette, ostoba volt és végsősoron felesleges. Micsoda hübrisz! Ha életedben nem avatnak szentté, akkor imádkozz, hogy valaki jó alaposan visszaéljen a bizalmaddal, különben örökre szentfazék maradsz. Ha szeretnél közelebb kerülni az igazsághoz, akkor sajtolj ki magadból egy másik áldozati Homonculust. Talán ez az áldozat már nem lesz teljesen felesleges...'
        }
        else if (44 == currentScore){
          text = 'Vajon tényleg megéri mechanikusan és kritika nélkül törtetni a jó felé? Afelé, ami jónak tűnik? A szükségszerű bukásod talán megtanít, hogy a végletek hajszolásánál fontosabb a jelenlét.'
        }



        questionText.textContent = text
        
        //questionText.textContent = `Köszönöm, hogy sorsot adtál ennek a léleknek! Ameddig nem zárod be ezt az ablakot, addig ő, a világ és te együtt léteztek. Sikerült szabaddá tenned, vagy tükröt csináltál belőle? Úgy érzed, hogy irányítanak? Ha kíváncsi vagy, nyugodtan építs fel egy másik Homunculust. `
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
  
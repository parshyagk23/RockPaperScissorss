
    const rulbtn = document.querySelector('.rul');
    const rules = document.querySelector('.index-rules')
    const exit = document.querySelector('.exit')
    const next = document.querySelector('.next')

    // const play_Again= document.querySelectorAll('.Play_Again')
    const win_Circle1 = document.querySelector('.win-Circle1');
    const loss_Circle1 = document.querySelector('.loss-Circle1');
    const tie_Circle1 = document.querySelector('.tie-Circle1');
    const win_Circle2 = document.querySelector('.win-Circle2');
    const loss_Circle2 = document.querySelector('.loss-Circle2');
    const tie_Circle2 = document.querySelector('.tie-Circle2');


    const win_Circle1img = document.getElementById('win-Circle1-img')
    const loss_Circle1img = document.getElementById('loss-Circle1-img');
    const tie_Circle1img = document.getElementById('tie-Circle1-img')
    const win_Circle2img = document.getElementById('win-Circle2-img')
    const loss_Circle2img = document.getElementById('loss-Circle2-img');
    const tie_Circle2img = document.getElementById('tie-Circle2-img')


    let ComInnerText =document.querySelector('.com-score h1')
    let UserInnerText =document.querySelector('.user-score h1')


    const indexdisplay = document.querySelector('.game')
    const lossdisplay =document.querySelector('.box1')
    const windisplay =document.querySelector('.box')
    // const line =document.querySelector('.line')
    const tiedisplay = document.querySelector('.box2')

    let userWins = localStorage.getItem('userWins') || 0;
    let computerWins = localStorage.getItem('computerWins') || 0;
    // localStorage.clear();
    document.title="ROCK PAPER SCISSORS"
    const common = document.querySelectorAll('a')
    comArr = ['Rock','Paper','Scissors']
    
   
    common.forEach(function(btn){
      btn.addEventListener("click",function(e){
        e.preventDefault()
        const userchoise =this.dataset.num
        const com = Math.floor(Math.random() * comArr.length);
        const comchoise =comArr[com]
        if(userchoise==='Rock'){
          UserChoiceRock(userchoise,comchoise)
        }else if(userchoise==='Paper'){
          UserChoicePaper(userchoise,comchoise)
        }else{
          UserChoiceScissors(userchoise,comchoise)
        }
      })
    })

    function UserChoiceRock(userchoise,comchoise){

      if(userchoise==='Rock'){

        indexdisplay.style.display='none'
        // line.style.display='none'
        console.log(userchoise)
        console.log(comchoise)

        if(comchoise=== "Paper"){
          lossdisplay.style.display=''
          loss_Circle2.style.border='#0074B6 solid 20px'
          loss_Circle2img.src='img/Rock.png'
          loss_Circle1.style.border='#FFA943 solid 20px'
          loss_Circle1img.src='img/Paper.png'
          
          computerWins++;
          localStorage.setItem('computerWins', computerWins);
        


        }else if(comchoise==='Scissors'){
          windisplay.style.display=''
          win_Circle2.style.border='#BD00FF solid 20px'
          win_Circle2img.src='img/Scissors.png'
          win_Circle1.style.border='#0074B6 solid 20px'
          win_Circle1img.src='img/Rock.png'
          next.style.display="block"
          next.href="Hurray.html"
         
          userWins++;
          localStorage.setItem('userWins', userWins);
        

        }else {
          tiedisplay.style.display=''
          tie_Circle1.style.border='#0074B6 solid 20px'
          tie_Circle1img.src='img/Rock.png'
          tie_Circle2.style.border='#0074B6 solid 20px'
          tie_Circle2img.src='img/Rock.png'

        }
      }
      UpdateWin()
    }
    function UserChoicePaper(userchoise,comchoise){

        if(userchoise==='Paper'){

          indexdisplay.style.display='none'
          // line.style.display='none'
          console.log(userchoise)
          console.log(comchoise)

        if(comchoise=== "Rock"){
          windisplay.style.display=''
          win_Circle2.style.border='#0074B6 solid 20px'
          win_Circle2img.src='img/Rock.png'
          win_Circle1.style.border='#FFA943 solid 20px'
          win_Circle1img.src='img/Paper.png'
          next.style.display="block"
          next.href="Hurray.html"
          
          userWins++;
          localStorage.setItem('userWins', userWins);
        
          
        }else if(comchoise==='Scissors'){
        
          lossdisplay.style.display=''
          loss_Circle2.style.border='#BD00FF solid 20px'
          loss_Circle2img.src='img/Scissors.png'
          loss_Circle1.style.border='#FFA943 solid 20px'
          loss_Circle1img.src='img/Paper.png'
          
          computerWins++;
          localStorage.setItem('computerWins', computerWins);
          

        }else {
          tiedisplay.style.display=''
          tie_Circle1.style.border='#FFA943 solid 20px'
          tie_Circle1img.src='img/Paper.png'
          tie_Circle2.style.border='#FFA943 solid 20px'
          tie_Circle2img.src='img/Paper.png'

        }
      }
     UpdateWin()
    }

    function UserChoiceScissors(userchoise,comchoise){
      // comchoise='Scissors'
      if(userchoise==='Scissors'){

        indexdisplay.style.display='none'
        
        // line.style.display='none'
        console.log(userchoise)
        console.log(comchoise)

        if(comchoise=== "Paper"){
          windisplay.style.display=''
          win_Circle1.style.border='#BD00FF solid 20px'
          win_Circle1img.src='img/Scissors.png'
          win_Circle2.style.border='#FFA943 solid 20px'
          win_Circle2img.src='img/Paper.png'
          next.style.display="block"
          next.href="Hurray.html"
          
          userWins++;
          localStorage.setItem('userWins', userWins);
         
          
        }else if(comchoise==='Rock'){
          lossdisplay.style.display=''
          loss_Circle2.style.border='#BD00FF solid 20px'
          loss_Circle2img.src='img/Scissors.png'
          loss_Circle1.style.border='#0074B6 solid 20px'
          loss_Circle1img.src='img/Rock.png'
          
          computerWins++;
          localStorage.setItem('computerWins', computerWins);
          

        }else{
          tiedisplay.style.display=''
          tie_Circle1.style.border='#BD00FF solid 20px'
          tie_Circle1img.src='img/Scissors.png'
          tie_Circle2.style.border='#BD00FF solid 20px'
          tie_Circle2img.src='img/Scissors.png'

        }
      }
      UpdateWin();
    }

   function UpdateWin(){
    ComInnerText.innerHTML=computerWins
    UserInnerText.innerHTML=userWins
    }
   UpdateWin()

    
    rulbtn.addEventListener('click',function(){
        rules.style.display="block"
    })
    exit.addEventListener('click',function(){
        rules.style.display="none"
    })

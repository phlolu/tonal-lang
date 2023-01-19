
const low_arr = [["l1","./sounds/wa-lt.wav"], ["l2","./sounds/wa-lt.wav"], ["l3","./sounds/wa-lt.wav"]]
const mid_arr = [["m1","./sounds/wa-mt.wav"], ["m2","./sounds/wa-mt.wav"], ["m3","./sounds/wa-mt.wav"]]
const high_arr = [["h1","./sounds/wa-ht.wav"], ["h2","./sounds/wa-ht.wav"], ["h3","./sounds/wa-ht.wav"]]


let low_arr_pool = []
let mid_arr_pool = []
let high_arr_pool = []
let tone_pool = []

let tone_type;
let voice;


function getToneType(){
  tone_type = parseInt(document.querySelector('.tone form>input:checked').value)
  return tone_type
}

function getVoice(){
  voice = document.querySelector('.voice form>input:checked').value
  return voice
}



let startButton = document.querySelector('.start-stop')
startButton.onclick = function(){getVoice(); getToneType()}



function checkButtonValues(){
    low_arr_pool = []
    mid_arr_pool = []
    high_arr_pool = []
    tone_pool = []
  
    switch(voice){
    case 1:
      index = Math.floor(low_arr.length*Math.random())
      low_arr_pool.push(low_arr[index].concat())
      mid_arr_pool.push(mid_arr[index].concat())
      high_arr_pool.push(high_arr[index].slice())
      break;
    default:
      low_arr.forEach(function(item){low_arr_pool.push(item.concat())})
      mid_arr.forEach((item) => {mid_arr_pool.push(item.slice())})
      high_arr.forEach((item) => {high_arr_pool.push(item.concat())})

      break;
  }
  
  switch(tone_type){
    case 1:
      tone_pool = low_arr_pool;
      break;
    case 2:
      tone_pool = mid_arr_pool;
      break;
    case 3:
      tone_pool = high_arr_pool;
      break; 
    default:
      tone_pool = low_arr_pool.concat(mid_arr_pool, high_arr_pool);
  }

  return [low_arr_pool, mid_arr_pool, high_arr_pool, tone_pool]
}

function updateTonePool(){
  for(i=0; i<tone_pool.length; i++){
    let soundArr = [] 
    tone_pool[i].forEach((item) => {soundArr.push(item)})
    src = soundArr[1]
    thisSound = new Audio(src)
    tone_pool[i].push(thisSound)
    tone_pool[i].push("test")
  } 
}

let isFormEnabled = true
inputs = document.querySelectorAll('input')


let disableForms = function(){
  for(i=0;i<inputs.length;i++){
      inputs[i].disabled=true;
    }
  isFormEnabled = false;  
}

let enableForms = function(){
  for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
  }
  isFormEnabled = true;
}

startButton.addEventListener("click",function(){
  switch(isFormEnabled){
    case true:
      disableForms();
      [low_arr_pool, mid_arr_pool, high_arr_pool, tone_pool] = checkButtonValues()
      updateTonePool()
      startButton.innerHTML = "stop"
      getToneCount();
      startTimer();
      if(!toneCount){
        stopTimer();
        enableForms();
        startButton.innerHTML = "start"
      }
      break;
    default:
      stopTimer();
      enableForms();
      startButton.innerHTML = "start"
      break;
  }
}, false)


let toneCount;
let invalidToneCountInput = false;
getToneCount = function(){
  toneCount = document.querySelector('#tonecount').value
  if(Number.isInteger(parseInt(toneCount)) && (toneCount >= 1 && toneCount <= 1000)){
    return toneCount
  }
  else{
      document.querySelector('.tone-count').insertAdjacentHTML("beforebegin",'<div class="tooltip">please enter a value between 1-1000</div>')
      document.querySelector('.tooltip').style.visibility = "visible"
    
      setTimeout(()=>{
        document.querySelector('.tooltip').style.visibility = "hidden"
      }, "2000") 

    toneCount = 0

    return toneCount
  }
}


let writeToneAndMarker = function(){
  document.querySelector('.tone-circ > .marker').innerHTML = ""   
  document.querySelector('.tone-circ > .text').innerHTML = ""
  if(toneCount > 0){
      index_pool = Math.floor(tone_pool.length*Math.random())
      
      current_tone = tone_pool[index_pool]
      current_tone[2].load()
      current_tone[2].play()
    
      if(current_tone[0].includes("l")){
        document.querySelector('.tone-circ > .marker').innerHTML = "\\"   
        document.querySelector('.tone-circ > .text').innerHTML = "low"
      }
      else if(current_tone[0].includes("m")){
        document.querySelector('.tone-circ > .marker').innerHTML = "_"   
        document.querySelector('.tone-circ > .text').innerHTML = "mid"      
      }
      else
      {
        document.querySelector('.tone-circ > .marker').innerHTML = "/"   
        document.querySelector('.tone-circ > .text').innerHTML = "high"            
      }
    displayRemainingTones()
    return toneCount = toneCount - 1
  }
  else{
    endListen()
    return toneCount = 0
  }
}

let intervalId;
function startTimer(){
  writeToneAndMarker()
  intervalId = setInterval(writeToneAndMarker, 2000)
}

function stopTimer(){
  clearInterval(intervalId)
}

function displayRemainingTones(){
  document.querySelector('.counter-cell').innerHTML = toneCount-1
}



function endListen(){
  stopTimer()
  enableForms()
  startButton.innerHTML = "start"
}


function play(srcSound, toneCount){
  var audio = new Audio(srcSound)
  try{
    x = audio.play();
    if(audio.volume != 1){document.querySelector('.testing').innerHTML = audio.volume}
    x.then(function(){}).catch(function(error){document.querySelector('h1').innerHTML = error + "_" + toneCount})
  }
  catch(err){
    document.querySelector('h1').innerHTML = err.message
  }
}

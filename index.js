let inputTxt = document.querySelector('#input-txt');
let btnTranslate = document.querySelector('#btn-translate');
let output = document.querySelector('.output')
let url = 'https://api.funtranslations.com/translate/minion.json'

function createUrl(text){
    return encodeURI(url+"?"+"text="+text)
}

function translate(){
    fetch(createUrl(inputTxt.value))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
}
btnTranslate.addEventListener('click' , translate);
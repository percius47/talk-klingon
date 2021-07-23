var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input")
var outputText=document.querySelector("#output")
var serverURL="https://api.funtranslations.com/translate/klingon.json"

function constructURL(text){
return serverURL+"?"+"text="+text;
}

function clickHandler(){
  
    fetch(constructURL(txtinput.value))
    .then(abc=>abc.json())
    .then(def=>
        {
            outputText.innerText=def.contents.translated;
        })
    .catch(console.log())
    
    }

btntranslate.addEventListener("click", clickHandler);


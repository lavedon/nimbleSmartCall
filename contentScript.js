debugger;
var parentNode;
var nodes;
var opener;
var prospectName;
var numObserver;
var numNode;
var myNode;

console.log("Smart Calling Extension GO!!!!!");
try {

    myNode = document.querySelectorAll('div.name')[0];
    prospectName = myNode.innerText;
} catch(err) {
    console.log("Could not load name." + err);
}

function changeTitle() {
    console.log("changeTitle() called");
    document.body.style.backgroundColor="#f00";
    try {
        document.getElementById("contact_info").click();
        document.getElementById("Calling").click();
        opener = [...document.getElementsByClassName("valueHolder")].map(div => div.innerText).filter(txt => txt.includes("Smart Call Opener"));
        opener = opener[0].replace("Smart Call Opener", "");
        document.querySelectorAll('div.name')[0].innerText = prospectName + ", " + opener;
        }
     catch(err) {
        console.log("Smart Call Extension no Smart Call Opener found." + err);
    }
}

function checkNewContact() {
    if (document.querySelectorAll('div.name')[0].innerText.includes(prospectName) === false) {
        console.log("New Contact.");
        changeTitle();
        setTimeout(function(){checkNewContact();}, 5000);
    } 

    document.body.style.backgroundColor="#f2f2f2"
    
}

setTimeout(function(){checkNewContact();}, 5000);
changeTitle();


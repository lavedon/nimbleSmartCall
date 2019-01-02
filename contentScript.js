var parentNode;
var nodes;
var opener;
var prospectName;
console.log("Smart Calling Extension GO!!!!!");
prospectName = document.querySelectorAll('div.name')[0].innerText;
function changeTitle() {
    console.log("changeTitle() called");
    document.body.style.backgroundColor="#f00";
    try {
        document.getElementById("contact_info").click();
        document.getElementById("Calling").click();
        opener = [...document.getElementsByClassName("valueHolder")].map(div => div.innerText).filter(txt => txt.includes("Smart Call Opener"));
        document.querySelectorAll('div.name')[0].innerText = prospectName + ", " + opener;
        }
     catch(err) {
        console.log("Smart Call Extension no Smart Call Opener found." + err);
    }
}

var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log('mutation observed!');
        changeTitle();
    });
});

changeTitle();

setTimeout(function(){document.body.style.backgroundColor="#f2f2f2";}, 500);

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
        opener = opener[0].replace("Smart Call Opener", "");
        document.querySelectorAll('div.name')[0].innerText = prospectName + ", " + opener;
        }
     catch(err) {
        console.log("Smart Call Extension no Smart Call Opener found." + err);
    }
}

//@TODO Use mutation observer to check if old character data = new character data.  If it does not --> run changeTitle.  See: https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord OR 
//
//  https://alexlouden.com/posts/2016-mutation-observer/
// May have to listen to an ancestor and not "div.name", although div.name might work.
// Consider observing this:
// observer.observe(document.querySelector('div.mainSectionWrapper'), { childList : true, attributes: true, subtree: true, characterData: true});

changeTitle();

setTimeout(function(){document.body.style.backgroundColor="#f2f2f2";}, 500);

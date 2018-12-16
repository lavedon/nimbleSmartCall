var parentNode;
var nodes;
var opener;
var prospectName;

alert("OH Boy! I LOVE cold Calling!");
document.body.style.backgroundColor="orange";
try {
prospectName = document.querySelectorAll('div.name')[0].innerText;
nodes = document.querySelectorAll('div.gwt-HTML');
for (i = 0; i < nodes.length; i++) {
    if(nodes[i].innerText.includes("Smart Call Opener")) {
        parentNode = nodes[i].parentNode.parentNode.parentNode;
        opener = parentNode.innerText.replace("Smart Call Opener", "").trim();
        document.querySelectorAll('div.name')[0].innerText = prospectName + ", " + opener;
    }
}
} catch(err) {
    console.log("Smart Call Extension " + err);
}

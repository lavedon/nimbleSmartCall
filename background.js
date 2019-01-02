function add_opener() {
    chrome.tabs.executeScript({
        file: "contentScript.js"
        });
};

chrome.commands.onCommand.addListener(function(command) {
    add_opener();
});

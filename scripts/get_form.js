// Workaround to import other js files (added to web_accessible_resources in manifest.json)
(async () => {
    var jsonData = await fetch(chrome.runtime.getURL("data/questionnaire_data.json")).then(response => response.json());
    const utils = await import(chrome.runtime.getURL("scripts/utils.js"));
    utils.fillByJsonData(jsonData, waitTime=500).then(() => console.log("Form data retrieved"));
    
})();
// Workaround to import other js files (added to web_accessible_resources in manifest.json)
(async () => {
    var jsonData = await fetch(chrome.runtime.getURL("data/form_data.json")).then(response => response.json());
    const utils = await import(chrome.runtime.getURL("scripts/utils.js"));
    utils.fillByJsonData(jsonData).then(() => console.log("Form filled"));
})();
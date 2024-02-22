
const get_form_url = "https://pedidodevistos.mne.gov.pt/VistosOnline/Questionario"
const form_url = "https://pedidodevistos.mne.gov.pt/VistosOnline/Formulario"

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.action.onClicked.addListener(async (tab) => {

    if (tab.url.startsWith(form_url)) {
        chrome.scripting.executeScript({
            target : {tabId : tab.id},
            files: ["scripts/fill_form.js"]
        });
    }
    else if (tab.url.startsWith(get_form_url)) {
        chrome.scripting.executeScript({
            target : {tabId : tab.id},
            files: ["scripts/get_form.js"]
        });
    }

});
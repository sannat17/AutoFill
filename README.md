# Auto-Fill Bot

## Usage

To install this extension:
- Clone or download this directory
- Copy `data/form_data_template.json` to `data/form_data.json` and fill all the values in [REPLACEME]
- Go to [chrome://extensions](chrome://extensions) -> Toggle developer dode to on -> Click on "Load Unpacked" and select this directory

To initiate auto-fill on supported pages:
- Click on the extension icon in the extensions tray or
- Use the hotkey "CTRL+Q"

Auto-fill supported for following pages:
- [https://pedidodevistos.mne.gov.pt/VistosOnline/Questionario](https://pedidodevistos.mne.gov.pt/VistosOnline/Questionario)
- [https://pedidodevistos.mne.gov.pt/VistosOnline/Formulario](https://pedidodevistos.mne.gov.pt/VistosOnline/Formulario)

## WIP 
- Figure out a way to store the documents to be uploaded and upload those automatically too.
- Can make this more extensible and explore more chrome extension features.
- Potentially make it seamless where user just fills fields, clicks on some sort of action to register it as "remember", and everything else is automated.

Chrome extension features to explore:
- Chrome local storage to dynamically store user data - [link](https://developer.chrome.com/docs/extensions/reference/api/storage)

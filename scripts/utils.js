export function setSelectValue(selector, value) {
    var element = document.querySelector(selector);
    var options = element.options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].text.trim() === value.trim()) {
            element.value = options[i].value;
            break;
        }
    }
    // Trigger change event for frameworks or listeners that require it
    element.dispatchEvent(new Event("change"));
}

export function setInputValue(selector, value) {
    var element = document.querySelector(selector);
    element.value = value;
    element.dispatchEvent(new Event("change"));
}

export async function fillByJsonData(jsonData, waitTime=0) {
    // Loop through the JSON data and fill the form fields accordingly
    for (var field of jsonData) {
        
        // Sleep (useful for form where next field depends on previous field value)
        waitTime > 0 ? await new Promise(r => setTimeout(r, waitTime)) : null;
        
        var fieldType = field.type;
        var fieldAttribute = field.attr || "name";
        var attrVal = field.attrVal;
        var fieldValue = field.value;

        console.log(fieldType, fieldAttribute, attrVal, fieldValue);
        
        var setField;
        switch (fieldType) {
            case "select":
                setField = setSelectValue;
                break;
                case "input":
                    setField = setInputValue;
                break;
                default:
                console.log("Invalid field type");
        }

        setField(`${fieldType}[${fieldAttribute}="${attrVal}"]`, fieldValue);
    }
}
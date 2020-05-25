function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        XMLHttpR = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            XMLHttpR = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                XMLHttpR = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
            }
        }
    }
}

function sendRequest(url) {
    createXMLHttpRequest();
    XMLHttpR.open("GET", url, true);
    XMLHttpR.setRequestHeader("Content-Type", "text/html;charset=utf-8");
    XMLHttpR.onreadystatechange = processResponse;
    XMLHttpR.send(null);
}

function processResponse() {
    if (XMLHttpR.readyState == 4 && XMLHttpR.status == 200) {
        document.write(XMLHttpR.responseText);
    }
}
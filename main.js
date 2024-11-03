window.onload = () => {

    var ws;
    let counter = 0;

    const log = document.getElementById("log-container");

    const form = document.getElementById("chat-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const msg = document.getElementById("chat-input");
        if (msg.value === "") return;
        const msgSent = document.createElement("div");

        msgSent.innerText = msg.value;
        msgSent.className="self-msg";
        
        log.appendChild(msgSent);
        ws.send(msg.value);

        msg.value = "";
    }

    if (window['WebSocket']) {

        ws = new WebSocket("wss://dolphin-app-fotml.ondigitalocean.app/test-chatapp/ws");
        
        ws.onclose = function (evt) {
            let item = document.createElement("div");
            item.className = "connection-status";
            item.innerHTML = "<b>Connection closed.</b>";
            log.appendChild(item);
        };
        
        ws.onmessage = function (evt) {
            var messages = evt.data.split('\n');
            for (let i = 0; i < messages.length; i++) {
                let item = document.createElement("div");
                item.className = "incoming-msg";
                item.innerText = messages[i];
                log.appendChild(item)
            }
        };

    }
    
}

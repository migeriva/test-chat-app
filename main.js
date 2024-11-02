window.onload = () => {

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

        msg.value = "";
    }


    console.log("Test para ver si esto se actualizar rapido");
    
    // msgSent.innerText = msg.value;
    // if(counter % 2 === 0) {
    //     msgSent.className="self-msg";
    // }else {
    //     msgSent.className="incoming-msg";
    // }
    // counter++;

    // if (window['WebSocket']) {

    //     const ws = new WebSocket("ws://127.0.0.1:3000/chat");
        
    //     ws.onclose = function (evt) {
    //         let item = document.createElement("div");
    //         item.innerHTML = "<b>Connection closed.</b>";
    //     };
    //     ws.onmessage = function (evt) {
    //         var messages = evt.data.split('\n');
    //         for (var i = 0; i < messages.length; i++) {
    //             var item = document.createElement("div");
    //             item.innerText = messages[i];
    //         }
    //     };

    //     // console.log('si hay websocket');
    //     // const div = document.createElement("div");
    //     // div.innerHTML = "<h1>Esto no esta sirviendo</h1>";
    //     // form.appendChild(div);
    // }
    
    
}

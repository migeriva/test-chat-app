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
        
        // msgSent.innerText = msg.value;
        // if(counter % 2 === 0) {
        //     msgSent.className="self-msg";
        // }else {
        //     msgSent.className="incoming-msg";
        // }
        // counter++;

        log.appendChild(msgSent);

        msg.value = "";
    }
    

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

// console.log("Buenas");

// document.addEventListener("DOOMContentloaded", () => {

//     const btn = document.getElementById("boton-enviar");
//     btn.onclick = (e) => {
//         e.preventDefault();
//         console.log("pressed");
//     };

// });


// document.addEventListener('DOOMContentLoaded', () => {
//     console.log('Buenas tardes');
// });



// let ids = {
//     'P001': 10000,
//     'P003': 20000,
//     'P005': 30000
// }

// let anexos = {
//     'P001': ['E001', 'PE001', 'PM001', 'PP001'],
//     'P003': ['E003', 'PE003', 'PM003', 'PP003'],
//     'P005': ['E005', 'PE005', 'PM005', 'PP005']
// }

// let contactos = {
//     '1': [
// 	1,  2,  3,  4,  5, 21, 22, 23,
// 	24, 25, 26, 27, 28, 34, 35, 36,
// 	37, 38, 39, 40, 41, 42, 43
//     ],
//     '2': [
// 	6,  7,  8,  9, 10,
// 	29, 30, 31, 32, 33
//     ]
// }

// function generateID(plan){
    
//     const id = ids[plan];
//     ids[plan]++;

//     return id;

// }

// function generatePlanCompleto() {
    
//     const rnd = Math.floor(Math.random() * 100)%3;
//     const rndKey = Object.keys(ids)[rnd];

//     const rndAnexo = (Math.floor(Math.random() * 100)%anexos[rndKey].length);
//     const rndAnexoKey = anexos[rndKey][rndAnexo];

//     return [rndKey, rndAnexoKey];
    
// }

// function generateUniqueID(){
//     return "hola buenas unique";
// }

// for(let i = 0; i < 5; i++) {

//     const [plan, anexo] = generatePlanCompleto();
//     const id = generateID(plan);

//     console.log(plan, anexo);

// }


// // Const contrato = {
// //     id: 100000,
// //     fecha_inicio: "2024-04-22T22:24:16.000Z",
// //     fecha_proximo_pago: "2024-04-23T12:54:00.000Z",
// //     fecha_anulacion: "2024-04-25T17:54:00.000Z",
// //     meses_deuda: 3,
// //     meses_activo: 18,
// //     activo: false,
// //     estado_firma: 'Pendiente',
// //     plan: 'P001',
// //     anexo: 'PM001',
// //     renovado: true,
// //     anulado: true,
// //     meses_pagados: 17,
// //     unique_id: 'unique-id-de-evicertia',
// //     beneficiarios: 1,
// //     createdAt: "2024-04-22T22:24:16.000Z",
// //     updatedAt: "2024-04-25T17:54:00.000Z",
// //     contacto: 1,
// //     vendedor: 1
// // }

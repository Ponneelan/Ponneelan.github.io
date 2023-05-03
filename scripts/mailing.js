let form = document.getElementById('msg-form');
let submit_msg = document.getElementById('submit-msg');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    fetch(`http://localhost:8000?mail=${data['mail']}&name=${data['name']}&subject=${data['subject']}&message=${data['messge']}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let emoji = data['code'] == 200 ?`<i class="bi bi-emoji-smile"></i>`: 
        `<i class="bi bi-emoji-frown"></i>`;
        submit_msg.innerHTML = data['message']+" "+emoji;
    }).then(()=>{
        setTimeout(()=>{
            submit_msg.innerHTML = ''
        },500000);
    });
});


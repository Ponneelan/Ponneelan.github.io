let form = document.getElementById('msg-form');
let submit_msg = document.getElementById('submit-msg');
let smileEmoji = `<i class="bi bi-emoji-smile"></i>`;
let sadEmoji = `<i class="bi bi-emoji-frown"></i>`;


form.addEventListener('submit', (event)=>sentData(event));

function sentData(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    let payload = {
        mail: data['mail'],
        name: data['name'],
        subject: data['subject'],
        message: data['message']
    }
    fetch('http://localhost:3000/getdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(data => {
            form.reset();
            console.log(data);
            let emoji = data['code'] == 200 ? smileEmoji : sadEmoji;
            submit_msg.innerHTML = 'Success ' + emoji;
        }).catch((error) => {
            submit_msg.innerHTML = "Error " + sadEmoji;
        })
        .then(() => {
            setTimeout(() => {
                submit_msg.innerHTML = ''
            }, 10000);
        });
}


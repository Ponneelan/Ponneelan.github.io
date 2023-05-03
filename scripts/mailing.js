let form = document.getElementById('msg-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    fetch(`http://localhost:8000?mail=${data['mail']}&name=${data['name']}&subject=${data['subject']}&message=${data['messge']}`).then(res => res.json()).then(data => {
        console.log(data);
    });;
});


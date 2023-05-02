let btn = document.getElementById('form-btn');
btn.addEventListener('click', sentMail);

function sentMail() {
    let name = document.getElementById('form-name').value;
    let mailID = document.getElementById('form-mail').value;
    let subject = document.getElementById('form-sub').value;
    let message = document.getElementById('form-msg').value;

    fetch(`http://localhost:8000?mail=${mailID}&name=${name}&subject=${subject}&message=${message}`).then(res=>res.json()).then(data=>{
        console.log(data);
    });;

}



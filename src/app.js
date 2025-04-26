const tooltipTriggerList = document.querySelectorAll('[data-bs-title]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const alertTrigger = document.getElementById('liveAlertBtn');
const alert = document.querySelector('.alert');

alertTrigger.addEventListener('click', function () {
    alert.classList.toggle('d-none');
});

const myBirthday = '19910607';
const p = document.querySelector('.birhtday');
p.innerHTML = moment(myBirthday).format('LL');

document.querySelector('.btn-send').addEventListener('click', function() {
    const input = document.querySelector('.birhtdayDate').value.trim();
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    const result = document.querySelector('.result');

    result.innerHTML = '';

    if (!regex.test(input)) {
        result.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Invalid date, format DD/MM/YYYY
            </div>
        `;
        return;
      }

    const date = moment(input, "DD/MM/YYYY");
    const formatDate = date.format("YYYY-MM-DD");

    result.innerHTML = `
        <div class="alert alert-success" role="alert">
            Formatted date: <strong>${formatDate}</strong>
        </div>
    `;
});
document.addEventListener("DOMContentLoaded", function () {
    let body1 = document.querySelector('.body')
    let loadder = document.querySelector('.loadding');
    loadder.classList.add("new");
    body1.classList.add("new2")
    setTimeout(function () {
        loadder.classList.remove("new");
        body1.classList.remove("new2");
    }, 3000);
});  



/* document.addEventListener('scroll', function () {
    let card = document.querySelector('.card1');
    let cardPosition = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2; // Adjust this value as needed

    if (cardPosition < screenPosition) {
        card.classList.remove('hidden');
        card.style.opacity = 1;
    }
});

document.addEventListener('scroll', function () {
    let card = document.querySelector('.card2');
    let cardPosition = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2; // Adjust this value as needed

    if (cardPosition < screenPosition) {
        card.classList.remove('hidden2');
        card.classList.add('visible');
    }
});

document.addEventListener('scroll', function () {
    let card = document.querySelector('.card3');
    let cardPosition = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2; // Adjust this value as needed

    if (cardPosition < screenPosition) {
        card.classList.remove('hidden2');
        card.classList.add('visible');
    }
});

document.addEventListener('scroll', function () {
    let card = document.querySelector('.card4');
    let cardPosition = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2; // Adjust this value as needed

    if (cardPosition < screenPosition) {
        card.classList.remove('hidden2');
        card.classList.add('visible');
    }
}); */









function setupDropdowns() {
    const techButton = document.getElementById('tech');
    const techDropDown = document.getElementById('tech__dropdawn');
    const contButton = document.getElementById('cont');
    const contDropDown = document.querySelector('.cont__dropdawn');

    if (window.innerWidth > 991) {
        techButton.addEventListener('mousemove', showTechDropdown);
        techButton.addEventListener('mouseleave', hideTechDropdown);
        techDropDown.addEventListener('mousemove', showTechDropdown);
        techDropDown.addEventListener('mouseleave', hideTechDropdown);

        contButton.addEventListener('mousemove', showContDropdown);
        contButton.addEventListener('mouseleave', hideContDropdown);
        contDropDown.addEventListener('mousemove', showContDropdown);
        contDropDown.addEventListener('mouseleave', hideContDropdown);

        techButton.removeEventListener('click', toggleTechDropdown);
        contButton.removeEventListener('click', toggleContDropdown);
    } else {
        techButton.removeEventListener('mousemove', showTechDropdown);
        techButton.removeEventListener('mouseleave', hideTechDropdown);
        techDropDown.removeEventListener('mousemove', showTechDropdown);
        techDropDown.removeEventListener('mouseleave', hideTechDropdown);

        contButton.removeEventListener('mousemove', showContDropdown);
        contButton.removeEventListener('mouseleave', hideContDropdown);
        contDropDown.removeEventListener('mousemove', showContDropdown);
        contDropDown.removeEventListener('mouseleave', hideContDropdown);

        techButton.addEventListener('click', toggleTechDropdown);
        contButton.addEventListener('click', toggleContDropdown);
    }
}

function showTechDropdown() {
    const techButton = document.getElementById('tech');
    const techDropDown = document.getElementById('tech__dropdawn');
    techButton.classList.add('active');
    techDropDown.style.display = 'block';
}

function hideTechDropdown() {
    const techButton = document.getElementById('tech');
    const techDropDown = document.getElementById('tech__dropdawn');
    techButton.classList.remove('active');
    techDropDown.style.display = 'none';
}

function showContDropdown() {
    const contButton = document.getElementById('cont');
    const contDropDown = document.querySelector('.cont__dropdawn');
    contButton.classList.add('active');
    contDropDown.style.display = 'block';
}

function hideContDropdown() {
    const contButton = document.getElementById('cont');
    const contDropDown = document.querySelector('.cont__dropdawn');
    contButton.classList.remove('active');
    contDropDown.style.display = 'none';
}

function toggleTechDropdown() {
    const techDropDown = document.getElementById('tech__dropdawn');
    const isVisible = techDropDown.style.display === 'block';
    if (isVisible) {
        hideTechDropdown();
    } else {
        showTechDropdown();
    }
}

function toggleContDropdown() {
    const contDropDown = document.querySelector('.cont__dropdawn');
    const isVisible = contDropDown.style.display === 'block';
    if (isVisible) {
        hideContDropdown();
    } else {
        showContDropdown();
    }
}

window.addEventListener('resize', setupDropdowns);
document.addEventListener('DOMContentLoaded', setupDropdowns);

document.getElementById('burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('open');
});

document.querySelector('.logo').addEventListener('click', () => {
    window.location.reload();
});

document.querySelector('.nav-item').addEventListener('click', () => {
    window.location.reload();
});















document.querySelector('.testFormch').addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = {
        question1: '1',
        question2: '3',
        question3: '4',
        question4: '4',
        question5: '2',
        question6: '4',
        question7: '2',
        question8: '4',
        question9: '1',
        question10: '1',
        question11: '3',
        question12: '2',
        question13: '4',
        question14: '3',
        question15: '1'
    };

    let score = 0;
    const formData = new FormData(event.target);
    for (const [name, value] of formData.entries()) { //повертає власні перелічувані властивості об'єкта
        if (value === answers[name]) {
            score++;
        }
    }
    localStorage.setItem('testResult', `Ви набрали ${score} з ${Object.keys(answers).length} можливих балів.`);
    window.location.href = './new.html'; 
});  
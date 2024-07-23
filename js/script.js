/* document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const imageIndex = Math.floor(scrollPosition / 500); // змінюйте значення для частішої зміни зображення

    switch (imageIndex) {
        case 0:
            document.body.style.backgroundImage = "url('https://img.goodfon.com/original/1366x768/1/b9/minimal-java-helloworld.jpg')";
            break;
        case 1:
            document.body.style.backgroundImage = "url('https://store-images.s-microsoft.com/image/apps.27957.14458703412993679.b960388a-37a2-4a5e-8805-5a88646cf023.5fbc513b-4b0f-4bbe-a412-632e584d0cda?q=90&w=480&h=270')";
            break;
        case 2:
            document.body.style.backgroundImage = "url('https://images.hdqwalls.com/download/toyota-supra-black-4k-od-1366x768.jpg')";
            break;
        case 3:
            document.body.style.backgroundImage = "url('https://s0.tchkcdn.com/g-l2SKa_U7BgHxBOejdeu_TA/4/22275/1200x630/f/0/af338c1ce7113730aef94535b9cc34d3_khd.jpg')";
            break;
        default:
            document.body.style.backgroundImage = "url('https://img.goodfon.com/original/1366x768/1/b9/minimal-java-helloworld.jpg')";
            break;
    }
});  */


document.querySelector('.next_site1').addEventListener('click', function () {
    window.location.href = '';
});
document.querySelector('.next_site2').addEventListener('click', function () {
    window.location.href = 'my.html';
});
document.querySelector('.next_site3').addEventListener('click', function () {
    window.location.href = '';
});
document.querySelector('.next_site4').addEventListener('click', function () {
    window.location.href = '';
});



/* const backgrounds = [
    'background1',
    'background2',
    'background3'
];
let currentBackgroundIndex = 0;

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const newBackgroundIndex = Math.floor(scrollPosition / 1000);

    if (newBackgroundIndex !== currentBackgroundIndex && newBackgroundIndex < backgrounds.length) {
        currentBackgroundIndex = newBackgroundIndex;
        changeBackground(backgrounds[currentBackgroundIndex]);
    }
});

function changeBackground(newClass) {
    const oldBackground = document.querySelector('.background');
    const newBackground = document.createElement('div');
    newBackground.className = `background ${newClass}`;
    newBackground.style.opacity = 0;
    document.body.appendChild(newBackground);

    setTimeout(() => {
        newBackground.style.opacity = 1;
    }, 10); // Затримка для запуску transition

    setTimeout(() => {
        if (oldBackground) {
            oldBackground.remove();
        }
    }, 1000); // Тривалість transition
}

// Встановлюємо початковий фон
changeBackground(backgrounds[0]); */





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
let home = document.getElementById('home');
let homeLink = document.querySelector('.home__link');

let about = document.getElementById('about');
let aboutLink = document.querySelector('.about__link');

let portfolio = document.getElementById('portfolio');
let portfolioLink = document.querySelector('.portfolio__link');

let contacts = document.getElementById('contacts');
let contactsLink = document.querySelector('.contacts__link');


function scrollToHome(){
    home.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToAbout(){
    about.scrollIntoView({block: "center", behavior: "smooth"});
}


function scrollToPortfolio() {
    portfolio.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToContacts() {
    contacts.scrollIntoView({block: "center", behavior: "smooth"});
}




homeLink.addEventListener('click', scrollToHome);

aboutLink.addEventListener('click', scrollToAbout);

portfolioLink.addEventListener('click', scrollToPortfolio);

contactsLink.addEventListener('click', scrollToContacts);

let centerY = document.documentElement.clientHeight

let aboutHeight = centerY*0.75 - 50;
let portfolioHeight = aboutHeight + centerY + 105;
let contactsHeight = portfolioHeight + centerY;

window.addEventListener('scroll', function () {

    if (window.pageYOffset >= aboutHeight  && window.pageYOffset<=portfolioHeight){
        document.getElementById('active2').className = 'about__link active';
        for (let i = 1; i<5; i++){
            if(i ===2){
                continue
            }
            document.getElementById('active' + i).className = 'about__link';
        }
    } else if(window.pageYOffset>= portfolioHeight && window.pageYOffset<= contactsHeight){
        document.getElementById('active3').className = 'about__link active';
        for (let i = 1; i<5; i++){
            if(i === 3){
                continue
            }
            document.getElementById('active' + i).className = 'about__link';
        }
    } else if(window.pageYOffset>= contactsHeight){
        document.getElementById('active4').className = 'about__link active';
        for (let i = 1; i<5; i++){
            if(i === 4){
                continue
            }
            document.getElementById('active' + i).className = 'about__link';
        }
    } else {
        document.getElementById('active1').className = 'about__link active';
        for (let i = 1; i<5; i++){
            if(i === 1){
                continue
            }
            document.getElementById('active' + i).className = 'about__link';
        }
    }
});

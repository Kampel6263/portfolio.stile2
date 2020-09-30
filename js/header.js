let header = document.getElementById('header')
const fun1 = () => {

    header.style.background = "#e40033";
    header.style.position = 'fixed';
    header.style.padding = '0px 0';


}

const fun2 = () => {
    header.style.background = "none";
    header.style.position = 'absolute';
    header.style.padding = '25px 0';
}


window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 505) {
        fun1();
    } else {
        fun2();
    }
});
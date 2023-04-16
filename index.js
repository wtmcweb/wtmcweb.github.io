document.title = "Wtmc";
function alertContact() {
    window.open("https://www.kijiji.ca/v-jouets-jeux/laval-rive-nord/lego-technic-mclaren-senna/1656641275", "_blank");
}
function copyPhoneNumber() {
    const el = document.createElement('textarea');
    el.value = '439-931-6667';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
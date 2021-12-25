//typed settings
var typed = new Typed('.typed', {
    strings: ["&nbsp;PP Farmer", "&nbsp;Frikandelbroodje Lover", "&nbsp;Code Noob", "&nbsp;Mcosu Enjoyer"],
    typeSpeed: 40,
    startDelay: 1500,
    backSpeed: 30,
    backDelay: 2750,
    loop: true,
    showCursor: true
});

var keys = '';
window.addEventListener('keypress', function (e) {
    keys += `${e.charCode}+`;
    console.log(keys);
    if (keys == '107+121+117+119+117+') window.location.replace('https://youtu.be/dQw4w9WgXcQ');
});
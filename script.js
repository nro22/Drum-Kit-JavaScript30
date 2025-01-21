const instruments = Array.from(document.querySelectorAll('.key'));
const audios = Array.from(document.querySelectorAll('audio'));
// let audio = null;
// let instrument = null;
// let code = null;
const aASCII = 'a'.charCodeAt(0);
let codeMap = Array.from({ length: 26 }, () => null);
let mapper =[]
let myString = 'asdfghjkl';
myString = myString.split('');
myString.forEach((element,index) => {
    //console.log(element+": "+index);
    codeMap[element.charCodeAt(0) - aASCII] = index;
});

instruments.forEach(elem => {
    elem.addEventListener('click', function() {
        const code = Number(this.getAttribute('data-key'));
        // this.querySelector('kbd').textContent.toLowerCase();
       // console.log(code);
        audios[code].currentTime = 0;
        audios[code].play();
        this.classList.add('playing');
        setTimeout(() => {
            this.classList.remove('playing');
        }, 71);
    })
})
//console.log(codeMap);

addEventListener('keydown' , function(e){
    //console.log(e.key.charCodeAt(0),aASCII);
    const code = codeMap[e.key.charCodeAt(0)-aASCII];
    if (code===null || code===undefined) return;
    //console.log(code);
    audios[code].currentTime = 0;
    audios[code].play();
    instruments[code].classList.add('playing');
    this.setTimeout( ()=>{
        instruments[code].classList.remove('playing');
    },
    71);
});

/*

const dictionary = {
    'a':'65',
    's':'83',
    'd':'68',
    'f':'70',
    'g':'71',
    'h':'72',
    'j':'74',
    'k':'75',
    'l':'76'
};
addEventListener('keydown' , function(e) {
    console.log(e.code);
    const code = dictionary[e.key];
    if (!code) return;
    //console.log(code);
    // instrument = instruments.find(elem => {
    //     //console.log(elem);
    //     return elem.getAttribute('data-key') === code;
    // })
    // audio = audios.find(elem => {
    //     return elem.getAttribute('data-key') ===code;
    // })
    const instrument = this.document.querySelector(`div[data-key="${code}"]`);
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    //console.log(instrument, audio);
    instrument.classList.add('playing');
    audio.play();
    this.setTimeout( ()=>{
        instrument.classList.remove('playing');
    },
    71);
})

const handler = ()=>{};
/*
const instruments = Array.from(document.querySelectorAll('.key'));
console.log(instruments);
// let instrument = null;
let btn = null;
const dictionary = {
    'a':'65',
    's':'83',
    'd':'68',
    'f':'70',
    'g':'71',
    'h':'72',
    'h':'74',
    'j':'75',
    'k':'76'
};
//console.log(typeof document.querySelector('[data-key="65"]').getAttribute('data-key'));
addEventListener('keydown', handlePress);
// addEventListener('keyup',handleRelease);
function handlePress(e){
    btn = dictionary[e.key];
    if (!btn) return;
    let instrument = instruments.find(elem => {
        //console.log(elem);
        return elem.getAttribute('data-key') === btn;
    })
    instrument.classList.add('playing');
    setTimeout(handleRelease, 71);
}
function handleRelease(instrument){
    instrument.classList.remove('playing');
}
*/
const container = document.getElementById('content')

const codeButton = document.getElementById('code-button')
const uxButton = document.getElementById('ux-button')
const gdButton = document.getElementById('gd-button')
const linksButton = document.getElementById('links-button')

const joyLogo = document.getElementById('smile')

const codeModal = document.getElementById('code-mdl');
const codeClose = document.getElementById('code-close');

const uxModal = document.getElementById('ux-mdl');
const uxClose = document.getElementById('ux-close');

const gdModal = document.getElementById('gd-mdl');
const gdClose = document.getElementById('gd-close');

const linksModal = document.getElementById('links-mdl');
const linksClose = document.getElementById('links-close');


const credits = document.getElementById('credits-text')

const yellowImg = 'img/briar-joy-logo-yellow.svg'
const cyanImg = 'img/briar-joy-logo-cyan.svg'
const pinkImg = 'img/briar-joy-logo-pink.svg'

const oldCredits = '<span id="credit"><strong>//</strong>A portfolio by Briar Rose</span>'
const newCredits = '<span id="credit"><strong>//</strong>Welcome to my website! :]</span>'

let code = document.getElementById('code-delay')
let ux = document.getElementById('ux-delay')
let graphicDesign = document.getElementById('graphic-design-delay')
let links = document.getElementById('links-delay')

function changeSmiley() {
joyLogo.classList.toggle('animate__pulse')
}

function creditsChange(){
if(credits.innerHTML == oldCredits){
    credits.innerHTML = newCredits
    credits.classList.replace('credits-yellow', 'credits-cyan')
  } else if (credits.innerHTML == newCredits){
    credits.innerHTML = oldCredits
    credits.classList.replace('credits-cyan', 'credits-yellow')
  }
}

function showCodeModal() {
  codeModal.classList.replace('modal-thingy', 'modal-thingy-showing')
  console.log('Clicked.')
}
function closeCodeModal(){
  codeModal.classList.replace('modal-thingy-showing', 'modal-thingy')
}

function showUXModal() {
  uxModal.classList.replace('modal-thingy', 'modal-thingy-showing')
  console.log('Clicked.')
}
function closeUXModal(){
  uxModal.classList.replace('modal-thingy-showing', 'modal-thingy')
}

function showGDModal() {
  gdModal.classList.replace('modal-thingy', 'modal-thingy-showing')
}
function closeGDModal(){
  gdModal.classList.replace('modal-thingy-showing', 'modal-thingy')
}

function showLinksModal() {
  linksModal.classList.replace('modal-thingy', 'modal-thingy-showing')
}
function closeLinksModal(){
  linksModal.classList.replace('modal-thingy-showing', 'modal-thingy')
}

window.onclick = function(event) {
  if (event.target == codeModal) {
    codeModal.classList.replace('modal-thingy-showing', 'modal-thingy')
  }
}

window.onclick = function(event) {
  if (event.target == uxModal) {
    uxModal.classList.replace('modal-thingy-showing', 'modal-thingy')
  }
}

window.onclick = function(event) {
  if (event.target == gdModal) {
    gdModal.classList.replace('modal-thingy-showing', 'modal-thingy')
  }
}

window.onclick = function(event) {
  if (event.target == linksModal) {
    linksModal.classList.replace('modal-thingy-showing', 'modal-thingy')
  }
}

window.onclick = function(event){
  if (event.target == content) {
      code.id = 'code'
      ux.id = 'ux'
      graphicDesign.id = 'graphic-design'
      links.id = 'links'
  }
}
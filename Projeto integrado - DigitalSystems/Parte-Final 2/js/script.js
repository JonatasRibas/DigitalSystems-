function pageScrollsobrenos() {
  document
    .getElementById('sobre-nos')
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
}
function pageScrollplanos() {
  document
    .getElementById('planos')
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
}
function pageScrollcontato() {
  document
    .getElementById('contato')
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
}

let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100
  progress.style.height = progressHeight + '%'
}

// window.onload = () =>{
//   let htmlCode = localStorage.getItem("html")
//   let cssCode = localStorage.getItem("css")
//   if(htmlCode){
//     html.setValue(htmlCode, 1)
//   }
//   if(cssCode){
//     css.setValue(cssCode, 1)
//   }
// }

const storeLink = document.querySelector(".storeLink")
const getLink = document.querySelector(".getLink")

function handleSave(elt){
    let htm = html.getSession().getValue()
    let cs = css.getSession().getValue()
    let title = storeLink.value
    localStorage.setItem(title+"-html",htm)
    localStorage.setItem(title+"-css",cs)
}
function handleGet(elt){
  let title = getLink.value
  let htmlco = localStorage.getItem(title+"-html")
  let cssco = localStorage.getItem(title+"-css")
  html.setValue(htmlco, 1)
  css.setValue(cssco, 1)
}

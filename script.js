// selecting 
var poverlay=document.querySelector(".overlay")
var ppopup=document.querySelector(".popup")
var pbutton=document.getElementById("add-popup")
pbutton.addEventListener("click", function(){
    poverlay.style.display="block"
    ppopup.style.display="block"
}) 
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
     poverlay.style.display="none"
    ppopup.style.display="none"

})

//sselect container, add book, title,date, description
var container= document.querySelector(".container")
var addcontent= document.getElementById("add-dairy")
var title= document.getElementById("dairy-title")
var date= document.getElementById("dairy-date")
var description= document.getElementById("dairy-description")


addcontent.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${date.value}</h5>
    <p>${description.value}</p>
     <button  onclick="deletedairy(event)">Delete</button>`
    container.append(div)
    poverlay.style.display="none"
    ppopup.style.display="none"

})
function deletedairy(){
    event.target.parentElement.remove()
}
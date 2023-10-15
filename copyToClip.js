//Inspired By Abhilekh Gautam from freecodecamp

var arr =document.getElementsByClassName("s-code-block")
for(let i = 0 ; i < arr.length ; i++){
 var btn = document.createElement("button")
 btn.classList.add("copy_code_button")
 btn.appendChild(document.createTextNode("Copy"))
 arr[i].appendChild(btn)
 //styling the button
 btn.style.position = "relative"
  btn.style.color = '#111';
  btn.style.backgroundColor = '#FFB800';
  btn.style.borderRadius = '29px';
  btn.style.border='none';
  btn.style.outline='none'
  btn.style.cursor='pointer';
  btn.style.width='70px';
  btn.style.height='30px'
  btn.style.padding='3px';
 
 if(arr[i].scrollWidth === arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetHeight)
  btn.style.left = `${arr[i].offsetWidth - 100}px`

  else if(arr[i].scrollWidth != arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetWidth)
   btn.style.left = `${arr[i].offsetWidth - 200}px`
 else 
   btn.style.left = `${arr[i].offsetWidth - 150}px`
  
 if(arr[i].scrollHeight === arr[i].offsetHeight)
   btn.style.bottom = `${arr[i].offsetHeight - 70}px`
   
 else
   btn.style.bottom = `${arr[i].scrollHeight - 70}px`
 //end of styling the button
   
   console.log("Appended")
}
var button = document.querySelectorAll(".copy_code_button")
 button.forEach((elm)=>{
  elm.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(elm.parentNode.childNodes[0].innerText)
    alert("Code Copied")
  })
 })
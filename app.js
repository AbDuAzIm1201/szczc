const btn=document.getElementById("btn");
const btn2=document.getElementsByClassName("btn2")[0];
const box=document.getElementById("box");
const parol=document.getElementById("parol");
const login=document.getElementById("login");
const p2=document.getElementsByClassName("p2")[0];
const box6=document.getElementsByClassName("box2")[0];
const h1=document.getElementById("h1");
const ul=document.getElementById("ul")


const user={
    id:"1",
    parol:"1"
}

btn.addEventListener("click", () =>{
    if(login.value==user.id && parol.value==user.parol){
        box6.style="display:block;"
        box.style="display:none;"
        h1.style="display:none"
    }else{
       p2.style="display:block"
    }
   
})

btn2.addEventListener("click", () =>{
    const li=document.createElement("li")
    const p=document.createElement("p")

    li.textContent=p.textContent="sizning savolangiz  :      " + prompt("Savol kiriting");
    ul.appendChild(li);
    li.style="display:flex; align-items:center;justify-content:center; font-size:40px"
})

  

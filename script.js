const istatus = document.querySelector("h5")


const btn = document.querySelector("#add")

check = 0;




btn.addEventListener("click", function()
{
    if(check ==0){
    istatus.innerHTML="Friends"
    istatus.style.color = "blue"
    btn.innerHTML = "Remove Friend"
    check = 1
    }else {
        istatus.innerHTML="stranger"
        istatus.style.color = "red"
        btn.innerHTML ="Add friend"
        check=0


}
})



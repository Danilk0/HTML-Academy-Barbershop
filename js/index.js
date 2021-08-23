var link=document.querySelector(".login-link");
var btn=document.querySelector(".footer-map")

var popup=document.querySelector(".modal-login");
var popupMap=document.querySelector(".modal-map");

var close=popup.querySelector(".modal-close");
var closeMap=popupMap.querySelector(".modal-close");

var form=popup.querySelector("form");
var login=popup.querySelector("[name=login]");
var password=popup.querySelector("[name=password]");

var isStorageSupport=true;
var storage="";

try{
    storage=localStorage.getItem("login");
}catch(err){
    isStorageSupport=false;
}

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");

    if(storage){
        login.value=storage;
        password.focus();
    }else{
        login.focus();
    }
});

btn.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

closeMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
    if(!login.value || !password.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth= popup.offsetWidth
        popup.classList.add("modal-error");
    } else{
        if(isStorageSupport){
            localStorage.setItem("login",login.value);
        }
    }
});

window.addEventListener("keydown",function(evt){
    if(evt.key === 'Escape'){
        if(popup.classList.contains("modal-show")){
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
},true);
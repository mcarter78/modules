function changeTitle(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].textContent = 'WDI Rulez: str8-up h4cked';
    }
}

changeTitle(document.getElementsByClassName("collection-card-title"));

function moreOctocat(el){
    console.log(el);
    var newElement = document.createElement('span');
    newElement.className += "mega-octicon";
    newElement.className += " octicon-mark-github";
    newElement.id += "big-pink";
    el.appendChild(newElement);
}

moreOctocat(document.querySelector(".collection-listing-search"));

function bigPinkOctocat (el){
    el.style.color = "magenta";
    el.style.fontSize = "200px"
}

bigPinkOctocat(document.querySelector("#big-pink"));

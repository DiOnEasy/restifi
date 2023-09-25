const pathItems = document.querySelectorAll(".path__item");
const pathContentFirst = document.querySelector(".path__content-1");
const pathContentSecond = document.querySelector(".path__content-2");



if(window.innerWidth <= 480){
    pathContentFirst.appendChild(pathItems[4]);
    pathContentFirst.appendChild(pathItems[0]);
    pathContentFirst.appendChild(pathItems[5]);
    pathContentFirst.appendChild(pathItems[1]);
    
    pathContentSecond.appendChild(pathItems[6]);
    pathContentSecond.appendChild(pathItems[2]);
    pathContentSecond.appendChild(pathItems[7]);
    pathContentSecond.appendChild(pathItems[3]);
}


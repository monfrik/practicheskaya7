let links = document.querySelectorAll('.headerLink');
let search = document.querySelector('#search');
let participants = document.querySelectorAll('.participant');
let images = document.querySelectorAll('.ourLatestWork .img');

// при наведении курсора на иконки команды (челики) они двигаются вверех вниз 2 секунды потом возвращаются в исходное состояние. 
// При клике на любую на картинку из 3й области она меняется флип-эффектом бэкгрундом (картикой с соседом). Без библиотек, без слушателей и распространителей событий.

participants.forEach(function(item){
    item.onmouseover = function(){
        for(let i=0; i<8; i++){
            if(i % 2 == 0){
                setTimeout(function(){item.style.transform = "translateY(-10%)";},250*i);
            } else{
                setTimeout(function(){item.style.transform = "translateY(10%)";},250*i);
            }
        }
        setTimeout(function(){item.style.transform = "translateY(-10%)";},2000);
    }
});
images.forEach(function(item, index, array){
    let i = -1;
    item.onclick = function(){
        if (item.style.transform == "rotateY(360deg)"){
            item.style.transform = "rotateY(0deg)";
        } else{
            item.style.transform = "rotateY(360deg)";
        }
        if(index != 9){
            if(array[index+1].style.transform == "rotateY(360deg)"){
                array[index+1].style.transform = "rotateY(0deg)";
            } else{
                array[index+1].style.transform = "rotateY(360deg)";
            }
        }
        if (index == 9){
            if(array[8].style.transform == "rotateY(360deg)"){
                array[8].style.transform = "rotateY(0deg)";
            } else{
                array[8].style.transform = "rotateY(360deg)";
            }
            i = index - 1;
            console.log(i);
            console.log(index);
            item.style.backgroundImage = `url(img/ourLatestWork/ourLatestWork${index}.jpg)`;
            array[i].style.backgroundImage = `url(img/ourLatestWork/ourLatestWork${index+1}.jpg)`;
            
        } else{
            // console.log(item.style.backgroundImage);
            i = index + 2;
            item.style.backgroundImage = `url(img/ourLatestWork/ourLatestWork${i}.jpg)`;
            array[index+1].style.backgroundImage = `url(img/ourLatestWork/ourLatestWork${index+1}.jpg)`;
        }
        // console.log(`url(../img/ourLatestWork/ourLatestWork${Math.round(Math.random()*10)}.jpg)`);
    }
});
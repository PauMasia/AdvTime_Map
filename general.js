
// window.onload= document.getElementById('backOfMessage').style.display= 'inline';
// onclick.document.getElementById('cloud_forest')=document.getElementById('cloud_forest_img');
// onclick.document.getElementsByClassName('slots')=document.getElementById('overlay').style.display='inline';
// // document.getElementsByClassName('slots')

// var id_zone = onclick.document.addEventListener


// var slotsElements = document.getElementsByClassName('slots');
// for (var i = 0; i < slotsElements.length; i++) {
//     slotsElements[i].addEventListener('click', function() {
//         // Setting the display style property of an element with id 'overlay' to 'inline'
//         document.getElementById('overlay').style.display = 'inline';
//         document.getElementsByClassName('info_'+)
//     });
// }

// Parte funcional de los hover
let name_menu= "cloud_forest";
function select_click(singleSlot){
    if(singleSlot.target.classList.contains('slots') ){
        document.getElementById (name_menu).style.filter='';
        document.getElementById (name_menu).style.zIndex='-20';
        name_menu= singleSlot.target.id+"_img";
        document.getElementById (name_menu).style.filter='drop-shadow(0px 0px 10px rgb(225, 0, 255)) saturate(250%)';
        document.getElementById (name_menu).style.zIndex='20';
    }
}
let id_zone= document.querySelectorAll('.slots');
id_zone.forEach(function(select_zone){
    select_zone.addEventListener('mouseover',select_click);
    document.getElementById (name_menu).style.filter='';
});
//falta testear, pon un id para una variable que vaya a existir para testear, name_menu+ '_info' para crear los menus de info de cada zona
var name_menu= null;
function select_click(singleSlot){
    if(singleSlot.target.classList.contains('slots')){
        name_menu= singleSlot.target.id;
    }
    document.getElementById (name_menu)
}

var id_zone= document.querySelectorAll('.slots');
id_zone.forEach(function(select_zone){
    select_zone.addEventListener('click',select_click);
});


//---------------------------Menus test-----------------------------
function menu_open(menu){
    document.getElementsByClassName('menu_'+id_zone).s

}

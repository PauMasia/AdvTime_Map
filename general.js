
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
let name_menu = "cloud_forest";// no modificar
function select_click(singleSlot) {
    if (singleSlot.target.classList.contains('slots')) {
        document.getElementById(name_menu).style.filter = '';
        document.getElementById(name_menu).style.zIndex = '-20';
        name_menu = singleSlot.target.id + "_img";
        index_click = Array.prototype.indexOf.call(id_zone, singleSlot.target);
        document.getElementById(name_menu).style.filter = 'drop-shadow(0px 0px 10px rgb(225, 0, 255)) saturate(250%)';
        document.getElementById(name_menu).style.zIndex = '20';
    }
}
let id_zone = document.querySelectorAll('.slots');
let index_click=0;
id_zone.forEach(function (select_zone) {
    select_zone.addEventListener('mouseover', select_click);
    document.getElementById(name_menu).style.filter = '';
});
//falta testear, pon un id para una variable que vaya a existir para testear, name_menu+ '_info' para crear los menus de info de cada zona
let menu_zone = "info_cloud_forest";
let abierto= 0;
function clickR(singleSlot) {
    if (singleSlot.target.classList.contains('slots')) {
        menu_zone= "info_"+singleSlot.target.id;
        document.getElementById(name_menu).style.filter = '';
        document.getElementById(name_menu).style.zIndex = '-20';
        document.getElementById("div_map").style.display= 'none';
        document.getElementById('overlay_menu').style.display='inline';
        document.getElementsByClassName('info_menu')[index_click].style.display='inline';
        document.getElementsByClassName('info_menu')[abierto].style.display='none';        
        abierto=index_click ;
    }
};
id_zone.forEach(function (select_zone) {
    select_zone.addEventListener('click', clickR);
});
function closeInfo(){
    document.getElementById('div_map').style.display='inline';
    document.getElementById('overlay_menu').style.display='none';
    document.getElementsByClassName('info_menu')[abierto].style.display='none';
};
document.getElementById('close').addEventListener('click', closeInfo);

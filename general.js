//const slots = document.querySelectorAll('#div_zones #slots');
//experimental
// document.addEventListener('DOMContentLoaded', function(){
//     var zones= document.querySelectorAll('.slots');
// var overlay=document.querySelectorAll('.slots');
// zones.forEach(function(text,index) {
//     text.addEventListener('click', function() {
//         var menu = overlay[index];
//         toggleMenu(menu);
//     });
// });
// function toggleMenu(menu) {
//     overlay.forEach(function(m) {
//         if (m === menu) {
//             m.style.display = (m.style.display === 'none' || m.style.display === '') ? 'block' : 'none';
//         } else {
//             m.style.display = 'none';
//         }
//     });
// }
// });
window.load= document.getElementById('backOfMessage').style.display= 'inline';
onclick.document.getElementById('cloud_forest')=document.getElementById('cloud_forest_img');
onclick.document.getElementsByClassName('slots')=document.getElementById('overlay').style.display='inline';
document.getElementsByClassName('slots')



//
var slotsElements = document.getElementsByClassName('slots');
for (var i = 0; i < slotsElements.length; i++) {
    slotsElements[i].addEventListener('click', function() {
        // Setting the display style property of an element with id 'overlay' to 'inline'
        document.getElementById('overlay').style.display = 'inline';
    });
}

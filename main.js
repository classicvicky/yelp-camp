var menubar = document.getElementById('menubar');
var link = document.getElementById('link');
var closebar = document.getElementById('closebar');

menubar.addEventListener('click', function(){
    link.style.display = 'block';
    closebar.style.display = 'block'
    menubar.style.display = 'none'
})

closebar.addEventListener('click', function(){
    link.style.display = 'none';
    closebar.style.display = 'none';
    menubar.style.display = 'block';
})
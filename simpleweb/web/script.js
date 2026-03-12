document.querySelectorAll("#navbar a").forEach(function(menu){
    menu.addEventListener("click", function(){
        alert("Bạn vừa bấm vào mục: " + this.textContent);
    });
});

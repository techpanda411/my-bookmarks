window.addEventListener('load', (event) => {
    var coll_elems = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll_elems.length; i++) {
        coll_elems[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }
});
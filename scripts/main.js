$(document).ready(function() {

    $('#usa').on('click', function() {
        console.log("click")
        document.getElementById('map').style.display = 'none';
        document.getElementById('search').style.display = 'none';
        document.getElementById('experiences').style.display = 'none';
        document.getElementById('page1').style.display = 'block';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
    });

    $('#europe').on('click', function() {
        document.getElementById('map').style.display = 'none';
        document.getElementById('search').style.display = 'none';
        document.getElementById('experiences').style.display = 'none';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        document.getElementById('page3').style.display = 'none';
    });

    $('#emiratos').on('click', function() {
        document.getElementById('map').style.display = 'none';
        document.getElementById('search').style.display = 'none';
        document.getElementById('experiences').style.display = 'none';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('id01')) {
            document.getElementById('id01').style.display = "none";
        }
    }
})
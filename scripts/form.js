$(document).ready(function() {

    var loginUsername;
    var loginPassword;
    var account = [loginUsername, loginPassword];

    $('.close').on('click', function() {
        document.getElementById('form').style.display = 'none';
    });
    $('#login').on('click', function(){
        document.getElementById('form').style.display = "block";
        document.getElementById('login-form').style.display = "block";
    });
    $('#signup').on('click', function(){
        document.getElementById('signup-form').style.display = "block";
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('id01')) {
            document.getElementById('form').style.display = "none";
        }
    }
})
$(document).ready(function () {
    let session = localStorage.getItem("session")
    let count = 0;

    if (session === null) {
        $('#loginStatus').text('Guest');
    } else {
        let user = JSON.parse(localStorage.getItem('session'))
        $('#loginStatus').text(`${user.username}`)
        $('#navUser').append('<button id="logoutNav" class="btn btn-dark"><i class="fas fa-sign-out-alt"></i></button>');
        $('#logoutNav').on('click', function (e) {
            e.preventDefault();

            localStorage.removeItem('session');
            window.location.href = 'http://localhost:8080/home';
        })
    }

    $.get('http://localhost:3001/api/history/pending/count', function (item) {
        count = JSON.stringify(item[0]).split(":")[1].replace("}","")
        if(count == 0);
        else{
            $('#pCount').text(count);
        }
    });
    
})
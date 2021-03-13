$(document).ready(function () {
    let session = localStorage.getItem("session")
    let count = 0;

    if (session === null) {
        $('#loginStatus').text('Guest');
    } else {
        let user = JSON.parse(localStorage.getItem('session'))
        $('#loginStatus').text(`${user.username}`)
        $('#loginStatus').attr('style', 'font-weight: bold;')
    }

    $.get('http://localhost:3001/api/history/pending/count', function (item) {
        count = JSON.stringify(item[0]).split(":")[1].replace("}","")
        if(count == 0);
        else{
            $('#pCount').text(count);
        }
    });
    
})
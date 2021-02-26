$(document).ready(function () {
    let session = localStorage.getItem("session")
    
    if(session === null){
        $('#loginStatus').text('Guest');
    }else{
        let user = JSON.parse(localStorage.getItem('session'))
        $('#loginStatus').text(`${user.username}`)
        $('#loginStatus').attr('style','font-weight: bold;')
    }
})
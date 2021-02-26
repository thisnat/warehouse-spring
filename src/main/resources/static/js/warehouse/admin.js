$(document).ready(function () {
    let session = localStorage.getItem("session")
    
    if(session === null){
        window.location.href = 'http://localhost:8080/admin/login';
    }else{
        $('#logoutBtn').on('click',function(e){
            e.preventDefault();
            
            localStorage.removeItem('session');
            window.location.href = 'http://localhost:8080/home';
        })
    }
})
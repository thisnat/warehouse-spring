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

    const dateConvert = (date) => {
        return `${moment(date).format('DD/MM/YYYY - HH:mm:ss')} (${moment(date).fromNow()})`;
    }

    $('#historyList').DataTable({
        rowCallback: function(row,data,index){
            if (data[1] == "EXPORT"){
                $(row).find('td:eq(1)')
                .css('color', 'red')
                .css('font-weight','bold');
            }
            $(row).find('td:eq(2)').text(dateConvert(data[2]));
        }
    });
})
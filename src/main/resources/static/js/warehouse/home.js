$(document).ready(function () {

    $('#productList').DataTable({
        rowCallback: function(row,data,index){
            console.log(index);
        }
    });
});
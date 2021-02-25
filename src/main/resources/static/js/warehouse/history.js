$(document).ready(function () {
    $('#historyList').DataTable({
        rowCallback: function(row,data,index){
            if (data[1] == "IMPORT"){
                $(row).find('td:eq(1)')
                .css('color', 'green')
                .css('font-weight','bold');
            }
            else if (data[1] == "EXPORT"){
                $(row).find('td:eq(1)')
                .css('color', 'red')
                .css('font-weight','bold');
            }
        }
    });
})
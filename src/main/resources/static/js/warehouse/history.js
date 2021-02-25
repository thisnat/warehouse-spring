$(document).ready(function () {
    let iCount = 0;
    let eCount = 0;

    const dateConvert = (date) => {
        return moment(date).format('DD/MM/YYYY - HH:mm:ss');
    }

    $('#historyList').DataTable({
        rowCallback: function(row,data,index){
            if (data[1] == "IMPORT"){
                $(row).find('td:eq(1)')
                .css('color', 'green')
                .css('font-weight','bold');

                iCount++;
            }
            else if (data[1] == "EXPORT"){
                $(row).find('td:eq(1)')
                .css('color', 'red')
                .css('font-weight','bold');

                eCount++;
            }

            $(row).find('td:eq(2)').text(dateConvert(data[2]));
            $(row).find('td:eq(3)').text(moment(data[2]).fromNow());

        }
    });

    $('#ib').text(`นำเข้า ${iCount} รายการ`);
    $('#eb').text(`นำออก ${eCount} รายการ`);
})
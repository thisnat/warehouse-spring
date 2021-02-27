$(document).ready(function () {

    let stockCount = 0;
    let pCount = 0;

    $('#productList').DataTable({
        rowCallback: function(row,data,index){
            if (parseInt(data[2]) < parseInt(data[3])){
                $(row).find('td:eq(2)')
                .css('color', 'red')
                .css('font-weight','bold');

                stockCount++;
            }
            $(row).find('td:eq(2)').text(parseInt(data[2]).toLocaleString());
            $(row).find('td:eq(4)').text(parseFloat(data[4]).toLocaleString());
            $(row).find('td:eq(3)').text(parseInt(data[3]).toLocaleString());
        }
    });
    $('#safeNoti').text(`ขาด stock ${stockCount} รายการ`);

    $.get('http://localhost:3001/api/history/pending/count', function (item) {
        pCount = JSON.stringify(item[0]).split(":")[1].replace("}","")
        $('#pNoti').text(`รอการยืนยัน ${pCount} รายการ`);
    });
});
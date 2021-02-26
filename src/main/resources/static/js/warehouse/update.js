$(document).ready(function () {
    let pProduct = null; //select product

    $('#productList').DataTable({
        rowCallback: function(row,data,index){
            if (parseInt(data[2]) < parseInt(data[3])){
                $(row).find('td:eq(2)')
                .css('color', 'red')
                .css('font-weight','bold');
            }
            $(row).find('td:eq(2)').text(parseInt(data[2]).toLocaleString());
            $(row).find('td:eq(4)').text(parseFloat(data[4]).toLocaleString());
            $(row).find('td:eq(3)').text(parseInt(data[3]).toLocaleString());
        }
    });

    $('.btn.btn-success').on('click', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        $.get(href, function (product) {
            pProduct = product;

            $('#productName').text(product.name);
            $('#productQuantity').text(`${product.quantity} ชิ้น`);
            $('#productSafe').text(`safety stock : ${product.safetyStock}`);
        });
        $('#sQuantity').val("1");
        $('#errA').remove();

        $('#myModal').modal('show');
    });

    $('#updateBtn').on('click', function (e) {
        e.preventDefault();
        let sq = $('#sQuantity').val(); //input quantity
        
        if (sq != "" && sq != 0){
            let data = { "quantity": sq };
            let history = { "type": "IMPORT","status":"ACCEPT" }
            
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/update/create/'+pProduct.id,
                contentType: 'application/json',
                data: JSON.stringify(data)
            }).done((res) => {
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3001/api/history/add/',
                    contentType: 'application/json',
                    data: JSON.stringify(history)
                }).done((res) =>{
                    let item = {"historyId":res,"productId":pProduct.id,"name":pProduct.name,"price":pProduct.price,"quantity":sq}

                    $.ajax({
                        type: 'POST',
                        url: 'http://localhost:3001/api/history/add/item',
                        contentType: 'application/json',
                        data: JSON.stringify(item)
                    }).done((res) =>{
                        window.location.href = 'http://localhost:8080/update/';
                    })
                })
            });
        }
        else{
            $('#errA').remove();
            $('#modalBody').append(`<div class="alert alert-danger mt-3" role="alert" id="errA">กรุณาใส่จำนวนให้ถูกต้อง</div>`);
        }
    })

});
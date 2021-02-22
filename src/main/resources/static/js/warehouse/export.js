$(document).ready(function () {
    let pProduct = null;

    $('.table .btn').on('click', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        $.get(href, function (product) {
            pProduct = product;
            $('#productName').text(product.name);
            $('#productQuantity').text(`${product.quantity} ชิ้น`);
            $('#productSafe').text(`safety stock : ${product.safetyStock}`);
            //$('.form').attr('th:action', `/export/update/${product.id}`)
        });
        $('#sQuantity').val("1");
        $('#errA').remove();
        $('#myModal').modal('show');
    });

    $('#exportBtn').on('click', function (e) {
        e.preventDefault();
        let sq = $('#sQuantity').val(); //input quantity

        if (pProduct.quantity >= sq) {
            let data = { "quantity": pProduct.quantity - sq }
            $.ajax({
                type: 'PUT',
                url: 'http://localhost:3001/api/products/' + pProduct.id,
                contentType: 'application/json',
                data: JSON.stringify(data),
            }).done((res) => {
                console.log(res);
                if(res == 0){
                    $.ajax({
                        type: 'DELETE',
                        url: 'http://localhost:3001/api/products/' + pProduct.id,
                        contentType: 'application/json'
                    })
                }
                window.location.href = 'http://localhost:8080/export/';
            });
        }
        else {
            $('#modalBody').append(`<div class="alert alert-danger mt-3" role="alert" id="errA">กรุณาใส่จำนวนให้ถูกต้อง</div>`);
        }
    });
});
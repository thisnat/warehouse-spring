$(document).ready(function () {
    function isEmpty(str) {
        return str.replace(/^\s+|\s+$/g, '').length == 0;
    }

    $('#submitBtn').on('click', function (e) {
        e.preventDefault();

        if ($('#inputName').val() == "" || isEmpty($('#inputName').val())) {
            $('#errA').remove();
            $('#btn-container').append(`<div class="alert alert-danger mt-3" role="alert" id="errA">กรุณาใส่ชื่อสินค้า</div>`);
        }
        else {
            let product = {
                "name": $('#inputName').val(), "quantity": $('#inputQuantity').val(), "price": $('#inputPrice').val(),
                "safetyStock": $('#inputSafetyStock').val(), "note": $('#inputNote').val()
            }

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3001/api/products/add/',
                contentType: 'application/json',
                data: JSON.stringify(product)
            })

            window.location.href = 'http://localhost:8080/home/';
        }
    })
});
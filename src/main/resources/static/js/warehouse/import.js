$(document).ready(function () {
    let errType = "";

    function isEmpty(str) {
        return str.replace(/^\s+|\s+$/g, '').length == 0;
    }

    const isBelowZero = () => {
        let zero = false;
        if ($('#inputQuantity').val() <= 0) {
            errType = "จำนวนต้องมากกว่า 0";
            zero = true;
        }
        if ($('#inputSafetyStock').val() <= 0) {
            errType = "Safety Stockต้องมากกว่า 0";
            zero = true;
        }
        if ($('#inputPrice').val() <= 0) {
            errType = "ราคาต้องมากกว่า 0";
            zero = true;
        }
        return zero;
    }

    $('#submitBtn').on('click', function (e) {
        e.preventDefault();

        if ($('#inputName').val() == "" || isEmpty($('#inputName').val())) {
            $('#errA').remove();
            $('#btn-container').append(`<div class="alert alert-danger mt-3" role="alert" id="errA">กรุณาใส่ชื่อสินค้า</div>`);
        }
        else if (isBelowZero()) {
            $('#errA').remove();
            $('#btn-container').append(`<div class="alert alert-danger mt-3" role="alert" id="errA">${errType}</div>`);
        }
        else {
            let product = {
                "name": $('#inputName').val(), "quantity": $('#inputQuantity').val(), "price": $('#inputPrice').val(),
                "safetyStock": $('#inputSafetyStock').val(), "note": $('#inputNote').val()
            }

            let history = { "type": "IMPORT" }
            let insertId;

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3001/api/products/add/',
                contentType: 'application/json',
                data: JSON.stringify(product)
            }).done((res) => {
                insertId = res;
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3001/api/history/add/',
                    contentType: 'application/json',
                    data: JSON.stringify(history)
                }).done((res) => {
                    let item = {"historyId":res,"productId":insertId,"name":product.name,"price":product.price,"quantity":product.quantity}

                    $.ajax({
                        type: 'POST',
                        url: 'http://localhost:3001/api/history/add/item',
                        contentType: 'application/json',
                        data: JSON.stringify(item)
                    }).done((res) =>{
                        window.location.href = 'http://localhost:8080/home/';
                    })
                })
            });
        }
    })
});
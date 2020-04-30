/*
Date: 4/29/2020
Author: Anthony Machniak
Class: CITW 165
Exercise: Exercise 10
 */

$().ready(function () {
    $("#email_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            email_confirm: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            zip: {
                minlength: 5,
                maxlength: 5,
                digits: true
            }
        }
    });
});

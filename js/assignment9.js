if (window.localStorage) {
    var username = $("#username");
    var password = $("#password");

    username.val(localStorage.getItem('username'));
    password.val(localStorage.getItem('password'));

    $('#application').on('submit', saveValues);
}

function saveValues(e) {
    e.preventDefault();

    localStorage.setItem('username', $("#username").val());
    localStorage.setItem('password', $("#password").val());
}
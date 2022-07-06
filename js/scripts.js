// date selector for copyright
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

(function(){
    emailjs.init("_Jhys9gG5a2LmUQMU");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userNumber = document.getElementById("number").value;
    let callCheck = document.getElementById("call").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            from_number: userNumber,
            call_req: callCheck,
            message: userMessage,
        };

        emailjs.send('service_4m5m5p5', 'template_4j1rd97', contactParams).then(function (res) {})
}

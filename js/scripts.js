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
    const tempParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        from_number: document.getElementById("number").value,
        call_req: document.getElementById("call").value,
        message: document.getElementById("message").value,
    }

    emailjs.send('service_4m5m5p5', 'template_4j1rd97', tempParams).then(function (res) {
        console.log("success", res.status);
    })
}

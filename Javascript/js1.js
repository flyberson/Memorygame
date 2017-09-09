$(document).ready(function () {

    $("img").click(function () {
        $(this).attr("src","../images/black.jpg")

    });
    $("p").click(function () {
        alert("Hello")
    })
});
$(document).ready(function () {
    var images = [];

    $("#Startbutton").click(function () {
        var image;
        image = $("#div1 img src").text();
        alert(image)
        images.push(image);
        image.attr("src","../images/black.jpg");

    });
    $("#Button2end").click(function () {
        $("#div1,img").image.attr("src",images.pop())
    });
});

//images []

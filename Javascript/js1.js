$(document).ready(function () {
    var images = [];
    var imgb = "../images/black.jpg";
    var img1 = "../images/100.jpg";
    var img2 = "../images/101.jpg";
    var img3 = "../images/402.jpg";
    var img4 = "../images/404.jpg";
    var img5 = "../images/201.jpg";
    var img6 = "../images/302.jpg";
    var img7 = "../images/409.jpg";
    var img8 = "../images/509.jpg";
    images [0] = imgb;
    images [1] = img1;
    images [2] = img2;
    images [3] = img3;
    images [4] = img4;
    images [5] = img5;
    images [6] = img6;
    images [7] = img7;
    images [8] = img8;
    var count1 =0;
    var count2 =0;
    var count3=0;
    var count4=0;
    var count5=0;
    var count6=0;
    var count7=0;
    var count8=0;

    function testrandomnumber( randomnumber) {

        switch(randomnumber){
            case 1:
                count1++;
                if (count1>=3){
                    return testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 1;
            case 2:
                count2++;
                if (count2>=3){
                    return testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 2;
            case 3:
                count3++;
                if (count3>=3){
                    return testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 3;
            case 4:
                count4++;
                if (count4>=3){
                    return  testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 4;
            case 5:
                count5++;
                if (count5>=3){
                    return  testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 5;
            case 6:
                count6++;
                if (count6>=3){
                    return  testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 6;
            case 7:
                count7++;
                if (count7>=3){
                    return  testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 7;
            case 8:
                count8++;
                if (count8>=3){
                    return  testrandomnumber(Math.floor(Math.random() * 8 + 1));
                }
                return 8;

            default:
                alert("error")
                break;
        }
        return randomnumber;
        
    }
    makeblack();

    function timer (){
        setTimeout(makeblack,5000);
    }
    function makeblack () {
        $("div.memoryimages img").detach();
        $("div.memoryimages br").remove();
        for (var j = 0; j < 4; j++) {

            for (var i = 0; i < 4; i++) {
                // var randomnumber=Math.floor(Math.random() * 8 + 1);
                //randomnumber = testrandomnumber(randomnumber);

                var imageused = '"' + images[0] + '"'
                $("div.memoryimages").append('<img src=' + imageused + 'style="height: 150px;width: 150px;">')

            }
            $("div.memoryimages").append('<br>')
        }
    }




    $("#Startbutton").click(function () {
        $("div.memoryimages img").detach();
        $("div.memoryimages br").remove();
        for (var j = 0; j < 4; j++) {

            for (var i = 0; i < 4; i++) {
                var randomnumber=Math.floor(Math.random() * 8 + 1);
                randomnumber = testrandomnumber(randomnumber);

                var imageused ='"'+ images[randomnumber]+'"'
                $("div.memoryimages").append('<img src='+imageused +'style="height: 150px;width: 150px;">')

            }
            $("div.memoryimages").append('<br>')

        }
        timer();
        //window.setTimeout(alert("hello"),5000);


        /*
        var image;
        image = r5;//$("#div1 img src").text();
        var imgget = images[2];

        alert(images[Math.floor(Math.random() * 5)]);
        //mages.get(image);
        //for (var i =0, len = images.length; i<len;i++){
        //$("img").each.attr("src","../images/black.jpg");
        $.each($("img"), function (index, item) {
            $(item).attr("src", images[Math.floor(Math.random() * 4 + 1)])

        });

        alert("done")
        //}*/


    });
    $("#Button2end").click(function () {
        $("#div1,img").image.attr("src", images.pop())
    });
    $("img").click(function () {
        alert($(this).attr("src"));
        $(this).attr("src", "../images/black.jpg");

    });
});

//images []

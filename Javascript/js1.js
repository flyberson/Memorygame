$(document).ready(function () {
    var imagelocation = []; // location of image in game
    var imagecount = 0; // amount of images with known location
    var images = [];  // a storage for the images

    // image variables
    var imgb = "../images/black.jpg";
    var img1 = "../images/100.jpg";
    var img2 = "../images/101.jpg";
    var img3 = "../images/402.jpg";
    var img4 = "../images/404.jpg";
    var img5 = "../images/201.jpg";
    var img6 = "../images/302.jpg";
    var img7 = "../images/409.jpg";
    var img8 = "../images/509.jpg";

    // loading images to array
    images [0] = imgb;
    images [1] = img1;
    images [2] = img2;
    images [3] = img3;
    images [4] = img4;
    images [5] = img5;
    images [6] = img6;
    images [7] = img7;
    images [8] = img8;

    // amount of images in game
    var count1 =0;
    var count2 =0;
    var count3=0;
    var count4=0;
    var count5=0;
    var count6=0;
    var count7=0;
    var count8=0;

    // tests if there are more than 2 images in game
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
                alert("error");
                break;
        }
        return randomnumber;
        
    }
    // starts game as black
    makeblack();

    var clickcount = 0;
    function makeclick (){

        var firstimage;
        var firstid;
        var secondimage;
        var secondid;



        $("img").click(function () {
            clickcount ++ ;

            //if first click image
            if(clickcount==1) {
                firstid = $(this).attr("id");
                $(this).attr("src", imagelocation[firstid]);
                firstimage = $(this).attr("src");

            }
            //else second click image
            else {
                secondid = $(this).attr("id");
                if (firstid == secondid) {
                    clickcount = 1;
                    return;
                }
                $(this).attr("src", imagelocation[secondid]);
                secondimage = $(this).attr("src");

                clickcount = 0;

                //if the same source

                if (firstimage == secondimage && firstid != secondid) {



                    //imagelocation.splice(firstid,1);
                    //imagelocation.splice(secondid,1);

                    $("div.memoryimages #" + firstid).remove();
                    $("div.memoryimages #" + secondid).remove();
                }
                //must be different source repaint black
                if (firstid != secondid && firstimage != secondimage) {

                    // $(this).attr("src",images[0]);

                    setTimeout(function repaint() {

                        $("div.memoryimages #" + firstid).attr("src", images[0]);
                        $("div.memoryimages #" + secondid).attr("src", images[0]);
                    }, 3000);

                    //   $("div.memoryimages #"+firstid).attr("src",images[0]);
                    // $("div.memoryimages #"+secondid).attr("src",images[0]);
                }



            }
        });
    }


    // delay for game makes black after 5 seconds
    function timer (){
        setTimeout(makeblack,1000);
        setTimeout(makeclick,1500);

    }

    // makes all images black

    function makeblack () {
        $("div.memoryimages img").detach();
        $("div.memoryimages br").remove();
        var imgblocation = 0;
        for (var j = 0; j < 4; j++) {

            for (var i = 0; i < 4; i++) {
                // var randomnumber=Math.floor(Math.random() * 8 + 1);
                //randomnumber = testrandomnumber(randomnumber);

                var imageused = '"' + images[0] + '"'
                $("div.memoryimages").append('<img src=' + imageused + ' id='+imgblocation+' style="height: 150px;width: 150px;">')
                imgblocation ++;
            }
            $("div.memoryimages").append('<br>')
        }
    }
    /*

    function makeblack () {
        var imgblocation = 0;
        $("div.memoryimages img").attr("src",images[0]);
        for (var j = 0; j < 4; j++) {

            for (var i = 0; i < 4; i++) {
                // var randomnumber=Math.floor(Math.random() * 8 + 1);
                //randomnumber = testrandomnumber(randomnumber);

                var imageused = '"' + images[0] + '"'
                $("div.memoryimages").append('<img src=' + imageused + ' id='+imgblocation+' style="height: 150px;width: 150px;">')
                imgblocation ++;
            }
            $("div.memoryimages").append('<br>')
        }
    }

*/


    $("#Startbutton").click(function () {
        $("div.memoryimages img").remove();
        $("div.memoryimages br").remove();
        var imgplocation =0;
        for (var j = 0; j < 4; j++) {

            for (var i = 0; i < 4; i++) {
                var randomnumber=Math.floor(Math.random() * 8 + 1);
                randomnumber = testrandomnumber(randomnumber);

                var imageused ='"'+ images[randomnumber]+'"'
                imagelocation[imagecount] = images[randomnumber];
                imagecount ++;
                $("div.memoryimages").append('<img src='+imageused + ' id='+imgplocation+ ' style="height: 150px;width: 150px;">')
                imgplocation ++;

            }
            $("div.memoryimages").append('<br>')

        }
        // alert(imagelocation.toString());
        timer();




    });
    $("#Button2end").click(function () {
        $("#div1,img").image.attr("src", images.pop())
    });

});



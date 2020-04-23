$(document).ready(function () {
    var stop = false;

    var dict = {
        0: "311px",
        1: "161px",
        2: "13px"
    };

    var bingo;
    $("#start").click(function () {
        bingo = [Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3)]

        stop = false;

        $('#machine').css("background-image", "url('image/slotdown.png')");
        animatebird01(); //開始執行三個窗格的動畫
        setTimeout(animatebird02(), 100); //延遲0.1秒再執行第二個
        setTimeout(animatebird03(), 200); //延遲0.2秒再執行第三個

        //stop不是function,所以要加function
        setTimeout(
            function () {
                stop = true;
            }, 1500);

        //切換背景不是function,所以要加function
        setTimeout(
            function () {
                $('#machine').css("background-image", "url('image/slotup.png')");
                CheckBingo(bingo);
            }, 2500);

    });

    function CheckBingo(bingo) {
        if (bingo[0] == bingo[1] && bingo[0] == bingo[2]) {
            alert("恭喜中獎!");
        }
    }

    function animatebird01() {
        if (stop) {
            $('#bird01')
                .animate(
                    { 'top': dict[bingo[0]] }
                    , 300);
        }
        else {
            $('#bird01').animate(
                { 'top': '311px' }
                , 200
            )
                .animate(
                    { 'top': '7' }
                    , 200
                    , animatebird01 //callback the function, to restart animation cycle
                );
        }
    }

    function animatebird02() {
        if (stop) {
            $('#bird02')
                .animate(
                    { 'top': dict[bingo[1]] }
                    , 300);
        } else {
            $('#bird02').animate(
                { 'top':'311px' }
                , 200
            )
                .animate(
                    { 'top': '7' }
                    , 300
                    , animatebird02 //callback the function, to restart animation cycle
                );
        }
    }

    function animatebird03() {
        if (stop) {
            $('#bird03')
                .animate(
                    { 'top': dict[bingo[2]] }
                    , 300);
        } else {
            $('#bird03').animate(
                { 'top': '311px' }
                , 300
            )
                .animate(
                    { 'top': '7' }
                    , 300
                    , animatebird03 //callback the function, to restart animation cycle
                );
        }
    }

});
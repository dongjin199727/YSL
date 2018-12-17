function $(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}
//删除商品pro列表
var pros = $(".pro");
var dels = $(".del");

function deleteList() {
    if (pros.length == 0) {
        return;
    }
    // console.log(pros.length);
    for (let i = 0; i < pros.length; i++) {
        dels[i].onclick = function () {
            if (confirm("您确定要删除这件商品？")) {

                if (pros.length == i + pros.length) {
                    fade(i);

                } else if (pros.length == i + 1) {
                    fade(i);

                } else if (pros.length == i) {
                    fade(i - 1);
                    // pros[i-1].remove(); //删除第一个解决办法
                } else {
                    return;
                }


            }
        }
        //透明度
        function fade(val) {
            let opacity1 = 1;
            var myTimer = setInterval(function () {
                opacity1 = opacity1 - 0.1;
                if (opacity1 <= 0) {
                    opacity1 = 0;
                    clearInterval(myTimer);
                    $(".pro")[val].remove();
                    alert("您已删除成功！");
                    opacity1 = 1;
                    priceChange();
                }
                console.log(pros.length); //2
                if (pros.length > 1) {
                    $(".pro")[val].style.opacity = opacity1;
                } else {
                    return;
                }

                // console.log(pros.length);
            }, 100)
        }
    }
}

//点击改变价格
function priceChange() {
    let jgs = $(".jg");
    let nums = $(".num");
    let counts = $("#allCount");
    let sum = 0;
    let cc = 0;

    for (let i = 0; i < jgs.length; i++) {

        sum += parseFloat(jgs[i].innerHTML.substring(2)) * nums[i].value;
        cc += parseInt(nums[i].value);
        counts = cc;
    }
    $("#price").innerHTML = '￥ ' + sum.toFixed(1) + '0';
    $("#allCount").innerHTML = counts;
    console.log(dels.length); //2
    console.log(pros.length); //2
    if ($(".pro").length == 0) {
        console.log($(".pro").length); //1
        $("#allCount").innerHTML = "0";
        $("#price").innerHTML = '￥ ' + '0';
    }
}

//加载页面执行上述函数
window.onload = function () {
    deleteList();
    let numA = $('.num');
    for (let i = 0; i < numA.length; i++) {
        numA[i].onmouseup = priceChange;
    }
}









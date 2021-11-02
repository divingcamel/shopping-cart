$(function(){
    getTable();
    getCnt();
    
    // 全選
    $(".checkall").change(function(){
        $(".j-check").prop("checked", $(this).prop("checked"));
        getSum();
    });

    // 子選項影響全選
    $(".j-check").change(function(){
        if ($(".j-check:checked").length == $(".j-check").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        getSum();
    });

    // 數量"+"按鈕
    $(".inc").click(function(){
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        //小計
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum();
    });

    // 數量"-"按鈕
    $(".dec").click(function(){
        var n = $(this).siblings(".itxt").val();
        if (n==0) return false;
        n--;
        $(this).siblings(".itxt").val(n);
        //小計
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum();
    });

    // 手動輸入數量
    $(".itxt").change(function(){
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum();
    });

    // 刪除
    $(".p-action").click(function(){
        $(this).parents(".p-item").remove();
        getSum();
        getCnt();

        var mybody = $("#tbody").html();
        localStorage.shopping = mybody;
    });
});

// 計算選取總數
function getSum() {
    // 計算商品數量
    var cnt = 0;
    var item = $(".j-check:checked").parents(".p-item");
    item.find(".itxt").each(function(index, element){
        cnt += parseInt($(element).val());
    });
    $(".p-amt em").text(cnt);
    // 計算總金額
    var money = 0;
    item.find(".p-sum").each(function(){
        money += parseInt($(this).text());
    });
    $(".total em").text(money);
}

// 計算幾樣商品在購物車裡
function getCnt() {
    var cnt = 0;
    $(".p-item").each(function(){
        cnt++;
    });
    $("#mycnt").text(cnt);
    localStorage.count = cnt;
}

// 從 "product 加入購物車" 匯入cart的table
function getTable() {
    var shopping;
    if (localStorage.shopping)
        shopping = localStorage.shopping;
    else
        shopping = "";
    $("#tbody").html(shopping);
}
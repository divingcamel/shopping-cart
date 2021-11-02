var close = document.getElementsByClassName("close");

function newElement() {
    var li = document.createElement("li"); //新增tag節點
    var myInput = document.getElementById("myInput"); //取得輸入的文字
    var val = myInput.value;
    var valNode = document.createTextNode(val);
    li.appendChild(valNode);
    if (val === "") return;
    // <li>val</li>

    document.getElementById("myUL").appendChild(li);
    myInput.value = ""; //輸入後變空白
    
    // 建立x按鈕
    var span = document.createElement("span");
    var spanTxt = document.createTextNode("\u00D7");
    span.className = "close";  // <span class="close"></span>
    span.appendChild(spanTxt);
    li.appendChild(span);  // <li>val<span.class='close'>x</span></li>

    // 按x變不見
    for (var i=0; i<close.length; i++) {
        close[i].onclick = function() { //找哪個close被按xx
            var div = this.parentElement; //找父元素li
            div.style.display = "none"; //按x關掉
        }
    }
}
// for迴圈放在外面，讓預設的list也能被按x
for (var i=0; i<close.length; i++) {
    close[i].onclick = function() { //找哪個close被按xx
        var div = this.parentElement; //找父元素li
        div.style.display = "none"; //按x關掉
    }
}
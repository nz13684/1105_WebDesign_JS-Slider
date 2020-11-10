var prev = document.getElementById("chen-prev"); //上一張按鈕
var next = document.getElementById("chen-next"); //下一張按鈕

var items = document.getElementsByClassName("chen-item"); //所有項目

var index = 0;

//按鈕函式 ： 下一張
function btnNext() {
    index++; //編號遞增

    if(index == items.length) index = 0; //編號如超出範圍 編號歸零

    console.log(index);
}
//按鈕函式 : 上一張
function btnPrev() {    
    index--;  //編號遞減

    if(index == -1) index = items.length - 1; //如果編號超出範圍 編號等於長度-1

    console.log(index);
}

next.onclick = btnNext;
next.onclick = btnPrev;
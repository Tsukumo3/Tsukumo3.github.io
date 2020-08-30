// jQuery

// スクリプト全体の strict モード構文 的確なエラーチェックが行われる。
"use strict";

$(function() {

  // フォームが送信された時に値を出力するサンプル
  $("form").on("submit", function(e) {
    e.preventDefault()
    
    const keyValue = $(this).serialize();
    const inputValue = keyValue.split("&").map( (keyValue) => {
      return $("<li>").text(decodeURIComponent(keyValue));
    });

  $(".result")
    .children().remove().end()
    .append(inputValue);
  });

});
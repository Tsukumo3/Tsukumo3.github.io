function dispCopyright(){
  document.write("<p>Copyright (C) 2020 Tkm. All Rights Reserved.</p>");
}

dispCopyright()

$("#go").click(function(){
  console.log("clicked")
  $(".block1").animate({ 
    width: "100%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em", 
    borderWidth: "10px"
  }, 1500 );
});


$("#right").click(function(){
  console.log("right")
  $(".block2").animate({'marginLeft': '+100px'}, "slow");
});
 
$("#left").click(function(){
  console.log("left")
  $(".block2").animate({'marginLeft': '-50px'}, "slow");
});
$(document).ready(function() {
 
  $.fn.toggeleIcon = function(ele) {
    if (ele == "cross") {
      // window.alert("going good");
      $("#searchIcon").show();
      $("#crossIcon").hide();
    }
    else {
      $("#crossIcon").show();
      $("#searchIcon").hide();
    }
  }

  // $("#crossIcon, #searchIcon").click(toggleIcon);

  $("#crossIcon").click(function() {
    let attrValue = $(this).attr("data-click");
    $.fn.toggeleIcon(attrValue);
    $("#imageContainer").show();
    $("#searchResult").empty();
    $("#searchInput").val("");
  })

  function showResults() {
    let attrValue = $(this).attr("data-click");
    $.fn.toggeleIcon(attrValue);
    // // window.alert("hello");
    input=$("#searchInput").val().trim();
    if(input){
      $("#imageContainer img").each(function() {
        attribute=$(this).attr("data-image");
        if (attribute.includes(input)) {
          let image = $('<img>');
          image.attr("src", $(this).attr("src"));
          $("#searchResult").append(image);
        }
      })
      $("#imageContainer").hide();
      $("#searchResult").show();
      let countResult=document.getElementById("searchResult").childElementCount;
      if(countResult == 0) {
        $("#searchResult").text("No image found");
      }
    }
      else {
        window.alert("Enter some value");
        $("#searchIcon").show();
        $("#crossIcon").hide();
      }
  }

  $("#searchIcon").click(showResults);

  $('#searchInput').keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        showResults();  
    }
});
});
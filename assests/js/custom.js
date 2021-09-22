$(document).ready(function() {
 
  $.fn.toggeleIcon = function() {
    if ($(this).attr("data-click")=="cross") {
      $("#searchIcon").show();
      $("#cross").hide();
    }
    else {
      $("#crossIcon").show();
      $("#searchIcon").hide();
    }
  }

  // $("#crossIcon, #searchIcon").click(toggleIcon);

  $("#crossIcon").click(function() {
    $.fn.toggeleIcon();
    $("#imageContainer").show();
    $("#searchResult").hide();
    $("#searchInput").val("");
  })

  $("#searchIcon").click(function() {
    $.fn.toggeleIcon();
    // window.alert($(this).attr("data-click"));
    input=$("#searchInput").val();
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
    }
      else {
        window.alert("Enter a valid key-word");
        $("#searchIcon").show();
        $("#crossIcon").hide();
      }
  });
});
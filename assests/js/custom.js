$(document).ready(function() {
 
  function toggleIcon() {
    $(this).hide();
    if ($(this).attr("data-click")=="cross") {
      $("#searchIcon").show();
    }
    else {
      $("#crossIcon").show();
    }
  }

  $("#crossIcon, #searchIcon").click(toggleIcon);

  $("#crossIcon").click(function() {
    $("#imageContainer").show();
    $("#searchResult").hide();
  })

  $("#searchIcon").click(function() {
    input=$("#searchInput").val();
    $("#imageContainer img").each(function() {
      attribute=$(this).attr("data-image");
      if (attribute.includes(input)) {
        let image = $('<img>');
        image.attr("src", $(this).attr("src"));
        $("#searchResult").append(image);
      }
    })
    $("#imageContainer").hide();
  });
});
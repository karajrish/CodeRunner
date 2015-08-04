
    var windowHeight = $(window).height();
    //browser window height = 639px
    var menuBarHeight = $("#topbar").height();
    var codeContainerHeight = windowHeight - menuBarHeight;
    $(".codeContainer").height(codeContainerHeight + "px");
    $(".toggle").click(function(){
        $(this).toggleClass("selected");
        var activeDiv = $(this).html();
        $("#" + activeDiv + "Container").toggle();
        var showingDivs = $(".codeContainer").filter(function() {
                                                     
            return($(this).css("display") != "none");
        }).length;
        var width = 100/showingDivs;
        $(".codeContainer").css("width",width+"%");
    });
    
 $("#RunButton").click(function(){
     
     $.ajax({ url: $('#CSSCDNCode').val().replace(/ /g,'').replace(/\r?\n|\r/g,''), success: function(data) { $('#CSSCode').val(data); } });   
     $("iframe").contents().find("html").html('<style>' + $("#CSSCode").val() + '</style>' + $("#HTMLCode").val()); 
     document.getElementById("resultFrame").contentWindow.eval($("#JSCode").val());
    });

    $("#clearButton").click(function(){
    
        $("HTMLCode").val(" ");
        $("CSSCode").val(" ");
        $("JSCode").val(" ");
    });

   

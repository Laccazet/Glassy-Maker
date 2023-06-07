$("input").change(function(){
    let input = $(this).attr("id");
    let val = $(this).val();
    switch(input){
        case "transparency":
            $(":root").css("--transparency",val)
            $("#a").html(val);
            break;
        
        case "blur":
            $(":root").css("--blur",val + "px")
            $(".c").html(val + "px");
            break;

        case "border-radius":
            $(":root").css("--border-radius",val + "px")
            $("#b").html(val + "px");
            break;

        case "outline":
            $(":root").css("--outline",val)
            $("#d").html(val);
            break;
    }
})

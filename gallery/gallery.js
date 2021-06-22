    $.ajax({
    	type:"get",
    	url:"pics.json",
    	data:{},
    	success:function(data){
            var path=data;
    
    for(var index=0;index<path.length;index++){
    	$("#all1").append("<a>");
    };
    $("a").append("<img>");

	for(var index=0;index<path.length;index++){
	    $("a").eq(index).attr("id",index);
        $("img").eq(index).attr("src",path[index].link);
        var t="try3.html?id="+index;
        $("a").eq(index).attr("href",t);

    };
    $("a").attr("target","newwin");
    }
    });
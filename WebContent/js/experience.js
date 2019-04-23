$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);	
    document.getElementById("exp").innerText=id;
    var data = "";
	$.ajax(
			{
				type : 'GET',
				async : false,
				url : "http://localhost:8086/experience/"+id,
				dataType : "json", // data type of response
				success : function(result)
				{
					console.log(result);
					data += ""+			
					'<div class="card" style="width: 50rem;">'+
					'<div class="card-header">'+
					result["title"]+
					'</div>'+
					'<div class="card-body">'+
				    '<ul class="list-group list-group-flush">'+
				    '<li class="list-group-item">'+
			        '<h5 align="center" class="card-title">'+result["company"].name+'&nbsp&nbsp&nbsp&nbsp'+result["type"]+'&nbsp&nbsp&nbsp&nbsp'+result["date"]+'</h5>'
				   +'</li><li  id="less" class="list-group-item">'+result["body"]+
				   
				   '</li></ul></div>'+
				   
				    '</div></div>';
	
					
				    document.getElementById("exp").innerHTML=data;

					
				},
			    	error:function(data) {
			    	}
			});
    
});

$(document).ready(function () {
	$.ajax(
			{
				type : 'GET',
				contentType : 'application/json',
				async : false,
				url : "http://localhost:8086/experience/",
				dataType : "json", // data type of response
				success : function(result)
					{
						console.log(result);
						var data = "";

						data += '<table id="dtBasicExample" class="table table-striped table-bordered table-sm" width="100%">';
						data += '<thead><tr><th class="th-sm">Interview Experiences</th></tr></thead>';
						data += '<tbody>';
							for (j in result)
						{
							//	data+="<tr><td>"+result[j]["company"].name+"</td><td>"+result[j]["type"]+"</td><td>"+result[j]["date"]+"</td><td>"+result[j]["body"]+"</td></tr>";
							
							data += "<tr><td>"+			
									'<div class="card" style="width: 50rem;">'+
									'<div class="card-header">'+
									result[j]["title"]+
									'</div>'+
									'<div class="card-body">'+
								    '<ul class="list-group list-group-flush">'+
								    '<li class="list-group-item">'+
							        '<h5 align="center" class="card-title">'+result[j]["company"].name+'&nbsp&nbsp&nbsp&nbsp'+result[j]["type"]+'&nbsp&nbsp&nbsp&nbsp'+result[j]["date"]+'</h5>'
								   +'</li><li  id="less" class="list-group-item">'+result[j]["body"]+
								    '</li></ul></div>'+
								    '<a  id="more" href="https://www.google.com">Read More</a>'+
								    '</div></div></td></tr>';
								
								/*
								
							data += "" +
							"<div id='temp divi" + j + "' class = 'row' style = 'width: 950px;margin:5px 25px;border-style: groove;border-width: 7px;font-size:15px; text-align:left;' >" +
							"<div id='white'>"+
							"<div class='col-md-12' style ='width: 940px;font-size:15px; text-align:left; padding:20px;' >" +
							"<h2 align='center' style='padding-bottom:20px;'> " + result[j]["title"] + "</h2>" +
							"<div id='bloc' style = 'padding-bottom:10px;font-size:15px;'>  &nbsp&nbsp&nbsp&nbsp  Date :  <b>" + result[j]["date"] + "</b></div>" +
							"<div id='bloc' style = 'padding-bottom:10px;font-size:15px;'>  &nbsp&nbsp&nbsp&nbsp      Offer Type :  <b><span id ='itid" + j + "'>" + result[j]["type"] + "</span></b></div>" +
							"<div id='bloc' style = 'padding-bottom:10px;font-size:15px;'>  &nbsp&nbsp&nbsp&nbsp    Company : <b> " + result[j]["company"].name + "</b></div>" +
							"<div  style = 'padding-bottom:10px;font-size:15px;'>   &nbsp&nbsp&nbsp&nbsp   Experience : <b> " + result[j]["body"] + "</b></div></div></div></div>" ;*/
						}
							data+="</tbody></table>";

						$('#experience').append(data);	
						$('#dtBasicExample').DataTable();
			          	  $('.dataTables_length').addClass('bs-select');

					},
			    	error:function(data) {
			    		console.log("error");
			    		console.log(data);
			    	}
			});

});

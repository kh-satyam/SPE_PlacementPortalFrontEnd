var table12;
$(document).ready(function () {
	
	populateCompanyFilter();

	
	$.ajax(
			{
				type : 'GET',
				contentType : 'application/json',
				async : false,
				url : "http://localhost:8086/experience/",
				dataType : "json", // data type of response
				success : function(result)
					{
				//		console.log(result);
						var data = "";

						data += '<table id="dtBasicExample" class="table table-striped table-bordered table-sm" width="100%">';
						data += '<thead><tr><th class="th-sm">Interview Experiences</th></tr></thead>';
						data += '<tbody>';
							for (j in result)
						{
							//	data+="<tr><td>"+result[j]["company"].name+"</td><td>"+result[j]["type"]+"</td><td>"+result[j]["date"]+"</td><td>"+result[j]["body"]+"</td></tr>";
							var dat = func(result[j]["body"]);
							data += "<tr><td>"+			
									'<div class="card" style="width: 50rem;">'+
									'<div class="card-header">'+
									result[j]["date"]+
									'</div>'+
									'<div class="card-body">'+
								    '<ul class="list-group list-group-flush">'+
								    '<li class="list-group-item">'+
							        '<h5 align="center" class="card-title">'+result[j]["title"]+'</h5>'+
								    '</li>'+
							        '<li class="list-group-item">'+
							        '<h5 align="center" class="card-title">'+result[j]["company"].name+'&nbsp&nbsp&nbsp&nbsp'+result[j]["type"]+'</h5>'+
								    '</li>'+
								    '<li class="list-group-item">'+dat+"&nbsp&nbsp&nbsp&nbsp&nbsp..."+
								    '<a id="more"  style="color:red	;" href="http://localhost:8085/PlacementPortalFrontEnd/experience.html?id='+result[j]["id"]+'"><b>Read More</b></a>'+
								    '</li></ul></div></div></div></td></tr>';
								
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

						$('#experience').html(data);	
						table12=$('#dtBasicExample').DataTable();
			          	  $('.dataTables_length').addClass('bs-select');

					},
			    	error:function(data) {
			    		console.log("error");
			    		console.log(data);
			    	}
			});

});

function populateCompanyFilter()
{
	var str = '<div id="white">Filter By Company :</div> <select id="companyFilterOption" name="companyFilter"  required>';
	str+= '<option value="" disabled selected>Select your option</option>';

	$.ajax(
		{
			type : 'GET',
			contentType : 'application/json',
			async : false,
			url : "http://localhost:8086/company/" ,
			dataType : "json", // data type of response
			success : function(result){
					console.log(result);
					for(i in result)
					{
						str+='<option value='+result[i]["name"]+'>'+
						result[i]["name"]+'</option>';
					}
				},
		    	error:function(data) {
		    	}
		});

document.getElementById("companyFilter").innerHTML = str;

}




function func(str)
{
	var temp = "";
	for(i=0;i<Math.min(50,str.length);i++)
	{
		temp += str[i];
	}
	return temp;
}

function submitFilters()
{
	var company = document.getElementById("companyFilterOption").value;
	var year = document.getElementById("yearFilterOption").value;
	var offer = document.getElementById("offerFilterOption").value;
	if(company=="")company=null;
	if(year=="")year=null;
	if(offer=="")offer=null;
	console.log(company + " " + year + " " + offer + " " + "helo");
	var itemUpload = JSON.stringify({
		"company" : company,
		"year" : year,
		"type" : offer
	});
	var maal = null;
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		data : itemUpload,
		async : false,
		dataType : "json",
		url : "http://localhost:8086/experience/getExperiencesByFilters",
		success : function(data) {
			console.log("success");
			console.log(data);
			maal = data;
		},
		failure : function(err)
		{
			console.log("failure");
			console.log(err);
		}
		});
	getter(maal);
}


function getter(result)
{
						var data2 = "";

						data2 += '<table id="dtBasicExample" class="table table-striped table-bordered table-sm" width="100%">';
						data2 += '<thead><tr><th class="th-sm">Interview Experiences</th></tr></thead>';
						data2 += '<tbody>';

						
						for (k in result)
						{
							var dat = func(result[k]["body"]);
							console.log(result[k]["company"].name);
							data2 += "<tr><td>"+			
									'<div class="card" style="width: 50rem;">'+
									'<div class="card-header">'+
									result[k]["date"]+
									'</div>'+
									'<div class="card-body">'+
								    '<ul class="list-group list-group-flush">'+
								    '<li class="list-group-item">'+
							        '<h5 align="center" class="card-title">'+result[k]["company"].name+'&nbsp&nbsp&nbsp&nbsp'+result[k]["type"]+'</h5>'
								   +'</li><li  id="less" class="list-group-item">'+dat+"&nbsp&nbsp&nbsp&nbsp&nbsp..."+
								   '<a id="more"  style="color:red	;" href="http://localhost:8085/PlacementPortalFrontEnd/experience.html?id='+result[k]["id"]+'"><b>Read More</b></a>'+
								   '</li></ul></div>'+
								   
								    '</div></div></td></tr>';
								
						}
							data2+="</tbody></table>";
							console.log("data2");
							console.log(data2);
							$('#experience').html("");	
							
						$('#experience').append(data2);	
						table12.destroy();
						$('#dtBasicExample').clear().draw();
						$('#dtBasicExample').DataTable();
			          	$('.dataTables_length').addClass('bs-select');
}

/*
function GetSortOrderAscending(prop) { 
	console.log(prop);
	if(prop=="company")
	{
	    return function(a, b) {  
	    	console.log("a : ");console.log(a);
	    	console.log("b : ");console.log(b);
	    	console.log(a[prop]);
	    	console.log(b[prop]);

	    	if (a[prop].name > b[prop].name) {  
	            return 1;  
	        } else if (a[prop].name < b[prop].name) {  
	            return -1;  
	        }  
	        return 0;  
	    }  
	}
	else
	{
	    return function(a, b) {  
	    	console.log("a : ");console.log(a);
	    	console.log("b : ");console.log(b);
	        if (a[prop] > b[prop]) {  
	            return 1;  
	        } else if (a[prop] < b[prop]) {  
	            return -1;  
	        }  
	        return 0;  
	    }  		
	}
} 

function GetSortOrderDescending(prop) { 
	console.log(prop);
	if(prop=="company")
	{
		return function(a, b) {  
	        if (a[prop].name < b[prop].name) {  
	            return 1;  
	        } else if (a[prop].name > b[prop].name) {  
	            return -1;  
	        }  
	        return 0;  
	    }
	}
	else
	{
		return function(a, b) {  
	        if (a[prop] < b[prop]) {  
	            return 1;  
	        } else if (a[prop] > b[prop]) {  
	            return -1;  
	        }  
	        return 0;  
	    }		
	}
}  
*/
/*
function companyFunc() 
{
    var selectBox = document.getElementById("companySort");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue == "ascCom")
    {
    	console.log("asc com");
		$('#experience').html("");	
		getter("company","ascending");
    }
    else
    {
    	console.log("desc com");
		$('#experience').html("");	
		getter("company","descending");
    }
}

function dateFunc() 
{
    var selectBox = document.getElementById("dateSort");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue == "ascDate")
    {
    	console.log("asc date");
		$('#experience').html("");	
		getter("date","ascending");
    }
    else
    {
    	console.log("desc date");
		$('#experience').html("");	
		getter("date","descending");
    }
}*/

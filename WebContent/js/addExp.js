$(document).ready(function () {

		var str = '<select id="companyName" class="form-control" name="companyName" onchange="changeFunc();" required>';
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

							//document.getElementById("companyName").value
							
						},
				    	error:function(data) {
				    	}
				});
		
		

		str+='<option value="Other">Other</option></select>';

		document.getElementById("companyNames").innerHTML = str;
});

function changeFunc() 
{
    var selectBox = document.getElementById("companyName");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue == "Other")
    {
    	console.log("other");
    	//<input type="date" id="date" autocomplete="off" placeholder="Date" class="form-control" name="date" required>

    	var str = "<input type='text' id='other' autocomplete='off' placeholder='Enter Company Name' class='form-control' name='other' required />";
    	document.getElementById("otherCompany").innerHTML = str;
    	//$("#otherCompany").text = str;
    	var otherVal = document.getElementById("other").value; 
    	console.log(otherVal);

    }
    else
    {
    	document.getElementById("otherCompany").innerHTML = "";
    }
}


function func()
{
	//if other is active, then make the company
	var element =  document.getElementById('other');
	if (typeof(element) != 'undefined' && element != null)
	{
		  console.log("exists");
		
		var other = document.getElementById("other").value;
		if(other != "")
		{
			console.log("OTHER : " + other);
			var otherCompany = JSON.stringify({"name" : other})
			//send post request for creating company
			$.ajax(
					{
						type : 'POST',
						contentType : 'application/json',
						url : "http://localhost:8086/company/addCompany",
						async : false,
						data : otherCompany,
						success : function(){
							swal("company inserted successfully");
							window.location.reload(true);
							},
						error: function() {
							swal("error occured");
						}
				});
			}
	}
	//console.log("outside");
	//get request for student
		//document.getElementById("").value
		var student;
		$.ajax(
			{
				type : 'GET',
				contentType : 'application/json',
				async : false,
				url : "http://localhost:8086/student/" + localStorage.getItem("roll"),
				dataType : "json", // data type of response
				success : function(result){
						//console.log(result);
						student = result;
					},
			    	error:function(data) {
			    	}
			});
	
	//get request for company
		//document.getElementById("companyName").value
	var company;
	$.ajax(
			{
				type : 'GET',
				contentType : 'application/json',
				async : false,
				url : "http://localhost:8086/company/" ,
				dataType : "json", // data type of response
				success : function(result){
						//console.log(result);
						for(i in result)
						{
							if(typeof(element) != 'undefined' && element != null && other!="")
							{
								if(result[i]["name"] == other)
								{
									company = result[i];return;
								}								
							}
							else
							{
								if(result[i]["name"] == document.getElementById("companyName").value)
								{
									company = result[i];return;
								}
							}
						}

						//document.getElementById("companyName").value
						
					},
			    	error:function(data) {
			    	}
			});
	
	
//	console.log("student : ")
//	console.log(student);
//	console.log("company : ")
//	console.log(company);
	
	
	
	
	
	var itemUpload = JSON.stringify({
		"student" : {"id" : student["id"]},
		"company" : {"id" : company["id"]},
		"type" : document.getElementById("type").value,
		"date" : document.getElementById("date").value,
		"title" : document.getElementById("title").value,
		"body" : tinyMCE.activeEditor.getContent()//document.getElementById("mytextarea").value
	});

		console.log("function sendInfo()" + itemUpload);
		
		$.ajax({
	        type : 'POST',
	        contentType : 'application/json',
	        url : "http://localhost:8086/experience/addExperience",
	        data : itemUpload,
	        success : function(){
	        	console.log("success");
	        },
	        failure : function(){
	        	console.log("failure");
	        }});

	console.log();
}
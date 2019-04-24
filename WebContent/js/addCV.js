$(document).ready(function(){
	
	
var rollNo = localStorage.getItem("roll");
	
	$.ajax({
		type : 'GET',
		url : "http://localhost:8086/student/" + rollNo,
		success : function(data) {
			console.log("success");
			console.log(data);
			if(data["cvUrl"] != "")
			{
				console.log("cv exist" + data["cvUrl"]);
				var str = "";
				str+="<p style='color:white;'><b>Existing CV : "+data["cvUrl"]+"</b></p>";
				document.getElementById("existCV").innerHTML = str;
//				$("#existCV").html= str;//data["cvUrl"];
			}
					
		},
		failure : function(err)
		{
			console.log("failure");
			console.log(err);
		}
		});
	
		
	
	
	
	
	funky();
	$("#cv").change(function(file){
		var fileName=document.getElementById("cv").name;
		//console.log("filename:"+fileName);
	});
});

function funky()
{
	var sbutton=document.getElementById('done');
	sbutton.addEventListener('click',updateCV);
}

function updateCV()
{
	var y = document.forms.namedItem("form2");
	var form = new FormData(y);
	form.append("formData",localStorage.getItem("roll"));

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:8086/student/updateCv");
	xhr.send(form);
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        var json_data = xhr.responseText;
	        swal("CV updated");
	        console.log("response : " + json_data);
	    }
	    else if(xhr.status === 400)
	    	{
	    		swal("error occured");
	    	}
	};
}

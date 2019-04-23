$(document).ready(function() { 
	var rollNo = localStorage.getItem("roll");
	
	$.ajax({
		type : 'GET',
		url : "http://localhost:8086/student/" + rollNo,
		success : function(data) {
			console.log("success");
			console.log(data);
			console.log(data["batch"]);
			$("#firstName").val(data["firstName"]);
			$("#lastName").val(data["lastName"]);
			$("#dob").val(data["dob"]);
			$("#personalEmail").val(data["personalEmail"]);
			$("#officialEmail").val(data["officialEmail"]);
			$("#cgpa").val(data["cgpa"]);
			if(data["cgpa"] == 0){
				$("#cgpa").val(null);
			}
			$("#course").val(data["courseType"]);
			$("#branch").val(data["courseStream"]);
			$("#batch").val(data["batch"]);
			$("#phoneNumber").val(data["contactNumber"]);
		},
		failure : function(err)
		{
			console.log("failure");
			console.log(err);
		}
		});
	console.log("after get request");
});

function sendInfo()
{
	var itemUpload = JSON.stringify({
	"firstName" : document.getElementById("firstName").value,
	"lastName" : document.getElementById("lastName").value,
	"dob" : document.getElementById("dob").value,
	"personalEmail" : document.getElementById("personalEmail").value,
	"officialEmail" : document.getElementById("officialEmail").value,
	"cgpa" : document.getElementById("cgpa").value,
	"courseType" : document.getElementById("course").value,
	"courseStream" : document.getElementById("branch").value,
	"batch" : document.getElementById("batch").value,
	"contactNumber" : document.getElementById("phoneNumber").value,
	"rollNumber" : localStorage.getItem("roll")
});

	console.log("function sendInfo()" + itemUpload);
	
	$.ajax({
        type : 'PUT',
        contentType : 'application/json',
        url : "http://localhost:8086/student/update",
        data : itemUpload,
        success : function(){
        	console.log("success");
        },
        failure : function(){
        	console.log("failure");
        }});

	
}
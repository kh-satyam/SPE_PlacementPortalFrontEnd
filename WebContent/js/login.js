var request;  

function func()
{
	var a = document.getElementById("rollno").value;
	var b = document.getElementById("pass").value;
	var data = {
		  "rollNumber":a,
		  "password":b
		};
	data=JSON.stringify(data);
	console.log(data);
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : "http://localhost:8086/student/login",
		dataType : "text", // data type of response
		data : data,
		success : function(response){
			localStorage.setItem("roll", a);
			console.log(response);
			swal({
				  title: "Success",
				  text: "Login successful!",
				  icon: "success"
				}, function() {
		            window.location = "http://localhost:8090/PlacementPortalFrontEnd/dashboard.html";
		        });
		   				
		},
		error : function(err){
			console.log(err);
			swal({
				  title: "Failure",
				  text: "Login unsuccessful!",
				  icon: "failure"
				})
		}
	});
	
	
	
	
	
	
	
	
	
	
	

}
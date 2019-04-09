var request;  

function func()
{
	var a = document.getElementById("rollno").value;
	var b = document.getElementById("pass").value;
	localStorage.setItem("roll", a);
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
			console.log(response);
			swal({
				  title: "Success",
				  text: "Login successful!",
				  icon: "success"
				})
				
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
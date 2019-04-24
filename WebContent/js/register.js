$(document).ready(function() {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	$('.msg').hide();
	
	var sbutton=document.getElementById('submitstudent');

	
	sbutton.addEventListener('click',registerStudent);

	

	function registerStudent(){
		console.log("registerStudent()");
		$('.msg').hide();
		var x = document.forms.namedItem("form1");
		var i;
		var arr = {};
		var arr1={}
		for(i=0;i<x.length;i++){
			
			 if ( x.elements[i].name == "rollNumber" ) {
					if ( x.elements[i].value == '' ) {$("#rollNumber-msg").show("slow"); return;}
				}
				
				else if ( x.elements[i].name == "officialEmail" ) {
					if ( x.elements[i].value == '' ) {$("#officialEmail-msg").show("slow"); return;}
				}
		
				arr[x.elements[i].name]=x.elements[i].value;
			
		}
		arr=JSON.stringify(arr)
		console.log(arr);
	
		var flag = 0;
		//getting all existing students
		$.ajax(
				{
					type : 'GET',
					contentType : 'application/json',
					async : false,
					url : "http://localhost:8086/student",
					dataType : "json", // data type of response
					success : function(result){
//						console.log(result);
							for (i in result)
							{
							//	console.log(result[i]);
							//	console.log(result[i]["batch"]);
								var a = document.getElementById("rollNumber").value;
								var b = document.getElementById("officialEmail").value;
								console.log("a : " + a);
								console.log("b : " + b);
								
								if(result[i]["rollNumber"] == a || result[i]["officialEmail"] == b)
								{
									swal("Student is already registered");
									flag=1;break;
								}
								if(flag==1)return;
							}
						},
				    	error:function(data) {
				    	}
				});
		console.log("flag : " + flag);
		if(flag == 1)return;
		else
		{
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : "http://localhost:8086/student/register",
			async : false,
			dataType : "text", // data type of response
			data : arr,
			success : function(result){
			
				swal({
					  title: "Success",
					  text: "Seller successfully registered!",
					  icon: "success"
					}, function() {
			            window.location = "http://localhost:8080/PlacementPortalFrontEnd/login.html";
			        });
					
			},
			error : function(err){
			}
		});
		}
		
		
		
		
		
		
		

	}
});
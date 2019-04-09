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
	
		$.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : "http://localhost:8086/student/register",
			dataType : "text", // data type of response
			data : arr,
			success : function(result){
			
				swal({
					  title: "Success",
					  text: "Seller successfully registered!",
					  icon: "success"
					})
					
			},
			error : function(err){
			}
		});
		
		
		
		
		
		
		

	}
});
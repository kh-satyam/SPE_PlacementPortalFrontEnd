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
//		var y = document.forms.namedItem("form2");
		var i;
		var arr = {};
		var arr1={}
		//var form = new FormData(y);
		for(i=0;i<x.length;i++){
			if(x.elements[i].name!="image" && x.elements[i].name!="resume"){
				// from validation
				// validating roll number
				if ( x.elements[i].name == "firstName" ) {
					if ( x.elements[i].value == '' ) {$("#firstname-msg").show("slow"); return;}
				}
				else if ( x.elements[i].name == "lastName" ) {
					if ( x.elements[i].value == '' ) {$("#lastname-msg").show("slow"); return;}
				}
				else if ( x.elements[i].name == "rollNumber" ) {
					if ( x.elements[i].value == '' ) {$("#rollNumber-msg").show("slow"); return;}

				}
				
				// validating dob
				else if ( x.elements[i].name == "dob" ) { 
					var entDOB = new Date(x.elements[i].value);
					var yage = new Date("2015-01-01");
					var old = new Date("1890-01-01");
					if ( entDOB > yage ) {
						$("#dob-msg").show("slow"); 
						return;
					} else if ( entDOB < old ) {
						$("#dob-old-msg").show("slow");
						return;
					}
				}
				else if ( x.elements[i].name == "personalEmail" ) {
					if ( x.elements[i].value == '' ) {$("#personalEmail-msg").show("slow"); return;}
				}
				else if ( x.elements[i].name == "officialEmail" ) {
					if ( x.elements[i].value == '' ) {$("#officialEmail-msg").show("slow"); return;}
				}
				else if ( x.elements[i].name == "courseType" ) {
					if ( x.elements[i].value == '' ) {$("#courseType-msg").show("slow"); return;}
				}else if ( x.elements[i].name == "batch" ) {
					if ( x.elements[i].value == '' ) {$("#batch-msg").show("slow"); return;}
				}
				// validating marks 
		
				arr[x.elements[i].name]=x.elements[i].value;
			}
		}
		arr=JSON.stringify(arr)
		console.log(arr);
		//form.append("json",arr);
	
		$.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : "http://localhost:8080/student/register",
			dataType : "json", // data type of response
			data : arr,
			success : function(result){
				console.log(result);
			
				swal({
					  title: "Success",
					  text: "Seller successfully registered!",
					  icon: "success"
					})
					/*.then((redirect) => {
					  if (redirect) {
						  window.location.href = "sellerHub.jsp";
					  }
					  else {
						  window.location.href = "sellerHub.jsp";
					  }
					});*/
			},
			error : function(err){/*
				if(err.status == 200){
					swal({
						  title: "Success",
						  text: "Seller successfully registered!",
						  icon: "success"
						})
						.then((redirect) => {
						  if (redirect) {
							  window.location.href = "sellerHub.jsp";
						  }
						  else {
							  window.location.href = "sellerHub.jsp";
						  }
						});
				}*/
			}
		});
		
		
		
		
		
		
		

	}
});
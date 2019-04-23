$(document).ready(function(){
	funky();
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
	    }};
}

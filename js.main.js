function htt_orion(){

setTimeout(function(){


swal({  

 title: "You have a gift !",   
text: "HS has just sent you a gift on the occasion of the 2nd anniversary ", 
 imageUrl: "https://graph.facebook.com/100004061834192/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Take it",
   cancelButtonText: "No, thanks.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Are you Ngân Phạm ? ", 
  text: "Enter the passcode ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "What is the passcode ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "3458520") {   
  swal.showInputError("It's wrong :( ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Input any gifts ", 
  text: "What gift do you want ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Xe SH , IPhone X , Vertu, Lamborghini .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Can't be empty ");   
  return false   }  
 swal("OK ! ", "The : " + inputValue + " would be sent in 10 seconds ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ HUỲNH THANH TÙNG ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();


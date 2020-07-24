function htt_orion(){

setTimeout(function(){


swal({  

 title: "You have a gift !",   
text: "HS has just sent you a gift on the occasion of the 2nd anniversary ", 
 imageUrl: "https://library.kissclipart.com/20190930/uq/kissclipart-present-red-ribbon-clip-art-gift-wrapping-5ab7b2adaa36adae.png",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Take it",
   cancelButtonText: "No, thanks.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Are you Ngân Phạm? ", 
  text: "Enter the passcode ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "What is the passcode?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "3458520") {   
  swal.showInputError("It's wrong :( ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Input any gifts ", 
  text: "What gift do you want? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Lipstick, Skin Care, Food,... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Can't be empty ");   
  return false   }  
 swal("The " + inputValue + " would be sent in 10 seconds ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("?", "You've just denied receiving my gift, press F5 if you change your mind.", "error"); 

  } });



},8000);
}
htt_orion();


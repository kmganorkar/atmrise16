
 function showqrCode(){

	  function guid() {
		  function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
		  }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		    s4() + '-' + s4() + s4() + s4();
		}

     var jq = window.jQuery;
     var options = {
         render: 'div',
         ecLevel: 'H',
         minVersion: parseInt('6', 10),

         fill: '#333333',
         background: '#ffffff',

         text: guid(),
         size: parseInt('250', 10),
         radius: parseInt('50', 10) * 0.01,
         quiet: parseInt('1', 10),

         mode: parseInt('0', 10),

         mSize: parseInt('11', 10) * 0.01,
         mPosX: parseInt('50', 10) * 0.01,
         mPosY: parseInt('50', 10) * 0.01,

         label: 'QR Code',
         fontname: 'Ubuntu',
         fontcolor: jq('#fontcolor').val(),

         image: jq('#img-buffer')[0]
     };

     jq('#qrcodeimg').empty().qrcode(options);
     
 console.log(options.text);
     
     doPoll(options.text);
     
    
 }
 
 
 function doPoll(guid){
    
var i=0;
    
    $.ajax({
        type: "GET",
        async: "false",
        dataType:'text',
        url: 'http://apirise16.azurewebsites.net/api/getqrcode?destuserid='+guid+'&destaccountnumber=',
        success: function(data) {
           console.log('html' + data);
            var arr= JSON.parse(data);
          // console.log('html1' + arr._id);


if(i<6){
           
           if(arr._id==''){
           i++;
              setTimeout(doPoll,5000,guid);

           }else{
              
              $.ajax({
                   type: "GET",
                   async: "false",
                   dataType:'text',
                   url: 'http://apirise16.azurewebsites.net/api/deleteqrcode?destuserid='+guid+'&destaccountnumber=',
                   success: function(data) {
                      console.log(data);
                   }
                   });

               $('#successMessage').text(arr.amount +" withdrawn successfully ");
           }
        }
   }
    });
     
     
     
  
     
    
 }

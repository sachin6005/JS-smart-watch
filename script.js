
   
          
        function showTime(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
                session = 'AM'
             if(h==0){
                 h = 12;
             }
             if(h>12){
                 h = h-12;
                 session = 'PM';
             }
             if(h<10){
                 h = '0'+ h;
             }
             if(m<10){
                 m = '0'+ m;
             }
             if(s<10){
                 s = '0'+ s;
             }
            
            var time = h + ':' + m + ':' + s + ' ' + session;
            document.getElementById('my-watch').innerText = time;
        
            setTimeout(showTime,1000); 
            }
            showTime()
        
        
            var buttons = document.querySelectorAll('.img')
            for (var i = buttons.length; i--;)
             buttons[i].addEventListener('click', change);
              
             function change(){
                 switch (this.value){
                         case "Black":
                         button = '<img src="images/Black.png" >';
                         break;
                         case "Blue":
                         button = '<img src="images/Blue.png" >';
                         break;
                         case "Red":
                         button = '<img src="images/Red.png" >';
                         break;
                         case "Purple":
                         button = '<img src="images/Purple.png" >';
                         break;
                         case "Pink":
                         button ='<img src="images/Pink.png" >';
                         break;
                         default:
                         button = '<img src="images/Black.png" >';  
        
                      }
                      document.getElementById('watch-img').innerHTML = button;
                      
             }
             change()
             
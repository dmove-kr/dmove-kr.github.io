document.addEventListener('DOMContentLoaded', function(){
    //다크모드 토글
   
    if(document.querySelector('.darkmode')){
        if(sessionStorage.getItem("darkmode") == 'on'){
            //다크모드 켜기
            document.body.dataset.darkmode='on';
            document.querySelector('#toggle-radio-dark').checked = true;
            document.getElementById("logo").src="/assets/images/Dmove-dark.png";
        }
        //다크모드 이벤트 핸들러
        document.querySelector('.darkmode').addEventListener("click", e=>{
            if(e.target.classList.contains('todark')){
                document.body.dataset.darkmode='on';
                sessionStorage.setItem("darkmode", "on");
                document.getElementById("logo").src="/assets/images/Dmove-dark.png";
              
            }
            
            
            else if(e.target.classList.contains('tolight')){
                document.body.dataset.darkmode='off';
                sessionStorage.setItem("darkmode", "off");
                document.getElementById("logo").src="/assets/images/Dmove.png";
                
               
            }
        },false);
    }
    
    else{
        document.body.dataset.darkmode='off';
        sessionStorage.removeItem("darkmode");
        document.getElementById("logo").src="/assets/images/Dmove.png";
       
       
    }

    

   
})
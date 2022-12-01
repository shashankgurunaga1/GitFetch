function username(a)
            {
                console.log("inside");
                var username = arguments[0];
                //if no username is entered 
                if(username === null || username === ""){
                         //alert(" Please enter the Github User Name.");
                         display_string ='<br><font color="pink"><p class="text-left">Username is not entered</p></font>';
                         document.getElementById("html_output_string").innerHTML=display_string; 
                         return;
                 }
                let api =`https://api.github.com/users/${username}/repos`;

            
                console.log(api) ;
                fetch(api).then((data)=>{
                return data.json();
                }).then((response)=>{
                console.log(response);
                var display_string="";
                //if username does not exist 
                if (response.length ==0)
                {
                    display_string ='<br><font color="pink"><p class="text-left">User does not exist</p></font>';
                }

                
                for (var i=0 ;i<response.length;i++){
                    console.log(response[i].name);
                    console.log(response[i].description);
                    console.log(response[i].html_url)
                    response[i].name;
                    if (response[i].name== null)
                    {
                        response[i].name="";
                    }
                    if (response[i].description== null)
                    {
                        response[i].description ="";
                    }
                    if (response[i].html_url== null)
                    {
                        response[i].html_url ="";
                    }
                    
                    display_string = display_string.concat('<br><div class="container"> <div class="card" id="cardcolor" ><div class="card-body" ><b>Name: </b> ').concat(response[i].name).concat('<br/><b> Description: </b> ').concat(response[i].description).concat('<br/><b> Url of Repository:  </b> <a href="').concat(response[i].html_url).concat('">').concat(response[i].html_url).concat('</a></div></div></div><br>');
        
                    console.log(display_string);
                    
                    }
                    document.getElementById("html_output_string").innerHTML=display_string; 
                
                }  )
                 
                
             }
let loader=document.getElementById("preloader");
function load(){
    loader.style.display="none";
}
setInterval(load ,1500);
            
    
    
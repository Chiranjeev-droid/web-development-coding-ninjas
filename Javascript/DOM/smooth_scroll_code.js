//fetching all the anchor tags
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

// By default all anchor tags have predefined default behaviour attached to them, that is they take you to the place.
for(var i=0;i<navMenuAnchorTags.length;i++){
    //Removing the default behaviour of anchor tags cliking.
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        //current anchortag being clicked
        var targetSectionId = this.textContent.trim().toLowerCase()
        //console.log(targetSectionId);
        var targetSection =document.getElementById(targetSectionId);
        console.log(targetSection);

      
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            // as you move closer to the targetSection, the value of top keeps decreasing
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50)
    }); 


    



}
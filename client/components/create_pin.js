 Template.customer_journey_canvas_page.events({
   
   //create a preservice pin button
    'click .create-preservice-pin': function(event){
        
        event.preventDefault();
        
                
        var preservicetextarea = $('[name="preservicetext"]').val(); //jquery
        
        var preservicetitle = $('[name="preservicegoal"]').val(); //jquery
        
         var element = $('input:radio[name=preservice]:checked').val();
        
        
        PreService.insert({
            
            title: preservicetitle,
            emotive: element,
            description: preservicetextarea,
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pre-Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="preservicetext"]').val('');
        $('[name="preservice"]').val('');
        $('[name="preservicegoal"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
      
               
        var preservicetextarea = $('[name="preservicetext"]').val(); //jquery
        
        var preservicetitle = $('[name="preservicegoal"]').val(); //jquery
        
      var element = $('input:radio[name=preservice]:checked').val();
      
        
        PreService.insert({
            
            title: preservicetitle,
            description: preservicetextarea,
             emotive: element,
            createdOn: new Date()
       
        });
        
          Bert.alert( 'Pre-Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
       $('[name="preservicetext"]').val('');
        $('[name="preservicegoal"]').val('');
         $('[name="preservice"]').val('');

    },
    //create a service pin button
    'click .create-service-pin': function(event){
        
        event.preventDefault();
        
      
        var servicetextarea = $('[name="servicetext"]').val(); //jquery
        
        var servicetitle = $('[name="servicegoal"]').val(); //jquery
        
        var element = $('input:radio[name=service]:checked').val();
        
        Service.insert({
            
            title: servicetitle,
            description: servicetextarea,
              emotive: element,
                       createdOn: new Date()
       
        });
        
        Bert.alert( 'Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="servicetext"]').val('');
        $('[name="servicegoal"]').val('');
         $('[name="service"]').val('');
    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
       
               
        var servicetextarea = $('[name="servicetext"]').val(); //jquery
        
        var servicetitle = $('[name="servicegoal"]').val(); //jquery
        
        var element = $('input:radio[name=service]:checked').val();
      
        PreService.insert({
            
            title: servicetitle,
            description: servicetextarea,
             emotive: element,
            createdOn: new Date()
       
        });
        
          Bert.alert( 'Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
       $('[name="servicetext"]').val('');
        $('[name="servicegoal"]').val('');
         $('[name="service"]').val('');
    },
     
     //create a postservice pin button
    'click .create-postservice-pin': function(event){
        
        event.preventDefault();
        
            
        var postservicetextarea = $('[name="postservicetext"]').val(); //jquery
        
        var postservicetitle = $('[name="postservicegoal"]').val(); //jquery
        
        var element = $('input:radio[name=postservice]:checked').val();
        
        PostService.insert({
            
            title: postservicetitle,
            description: postservicetextarea,
              emotive: element,
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Post-Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="postservicetext"]').val('');
        $('[name="postservicegoal"]').val('');
           $('[name="postservice"]').val('');
    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
       
               
        var postpreservicetextarea = $('[name="postservicetext"]').val(); //jquery
        
        var postpreservicetitle = $('[name="postservicegoal"]').val(); //jquery
        
        var element = $('input:radio[name=postservice]:checked').val();
      
        PostService.insert({
            
            title: postservicetitle,
            description: postservicetextarea,
              emotive: element,
                     createdOn: new Date()
       
        });
        
          Bert.alert( 'Post-Service Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
       $('[name="postservicetext"]').val('');
        $('[name="postservicegoal"]').val('');
          $('[name="postservice"]').val('');
    },
     
       //create a comment/suggestion pin button
    'click .create-suggestion-pin': function(event){
        
        event.preventDefault();
        
      
        var postrecommendationtextarea = $('[name="postrecommendationtext"]').val(); //jquery
        
        
        AdditionalSuggestions.insert({
            
            
            description: postrecommendationtextarea,
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Suggestion/Recommendation Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="postrecommendationtext"]').val('');
        

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
      
        var postrecommendationtextarea = $('[name="postrecommendationtext"]').val(); //jquery
                
      
        AdditionalSuggestions.insert({
            
            
            description: postrecommendationtextarea,
                    createdOn: new Date()
       
        });
        
          Bert.alert( 'Suggestion/Recommendation Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
       $('[name="postrecommendationtext"]').val('');
      

    }
    
     });
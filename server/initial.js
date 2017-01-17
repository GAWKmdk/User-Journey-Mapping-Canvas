import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  //Customer Journey

 
    Meteor.publish('preservice', function(){
    
    return PreService.find();
});

    
  //  Meteor.publish('preservicerecommendation', function(){
    
  //  return PreServiceRecommendation.find();
//});

   Meteor.publish('service', function(){
    
    return Service.find();
});
 
//  Meteor.publish('servicerecommendation', function(){
    
//    return ServiceRecommendation.find();
//});
  
    Meteor.publish('postservice', function(){
   
    return PostService.find();
});

//    Meteor.publish('postservicerecommendation', function(){
//    
//    return PostServiceRecommendation.find();
//});
    
      Meteor.publish('additionalsuggestions', function(){
    
    return AdditionalSuggestions.find();
});  
    
});

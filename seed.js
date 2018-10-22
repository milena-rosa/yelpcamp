var Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    data = [
            {
                name: "Cloud's Rest", 
                image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144595f0c170a4ebb5_340.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales viverra dui, vel sagittis justo aliquet eu. Quisque cursus pretium sapien sit amet luctus. Quisque quis diam eget nisi vestibulum porta. Curabitur porttitor augue aliquet purus ullamcorper, ac tempus ipsum venenatis. Vivamus sagittis nisi et sapien maximus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum elit magna, pharetra sed felis quis, euismod porttitor tellus. Aliquam at ante vitae neque maximus vehicula. Vivamus dictum ut ante ut bibendum. Vestibulum euismod at elit nec gravida. Quisque faucibus fermentum ultricies. Donec tempus lacus purus, sed vestibulum neque fermentum at. Maecenas vel orci non sapien fringilla semper. Ut at erat aliquam, ultricies orci bibendum, euismod nulla. Quisque interdum eros dictum nisi congue, id fringilla nisi porta. Quisque tristique ac metus quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque nunc. Aliquam non ligula sodales, rutrum turpis at, scelerisque nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac porttitor lacus, sed placerat lectus. Proin at ante ut nunc pretium fringilla in et sapien. Quisque nec justo vel mi laoreet malesuada. Phasellus dolor felis, mollis ac maximus sit amet, mollis bibendum lacus."
            },
            {
                name: "Desert Mesa", 
                image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f0c179aeeeb3b8_340.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales viverra dui, vel sagittis justo aliquet eu. Quisque cursus pretium sapien sit amet luctus. Quisque quis diam eget nisi vestibulum porta. Curabitur porttitor augue aliquet purus ullamcorper, ac tempus ipsum venenatis. Vivamus sagittis nisi et sapien maximus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum elit magna, pharetra sed felis quis, euismod porttitor tellus. Aliquam at ante vitae neque maximus vehicula. Vivamus dictum ut ante ut bibendum. Vestibulum euismod at elit nec gravida. Quisque faucibus fermentum ultricies. Donec tempus lacus purus, sed vestibulum neque fermentum at. Maecenas vel orci non sapien fringilla semper. Ut at erat aliquam, ultricies orci bibendum, euismod nulla. Quisque interdum eros dictum nisi congue, id fringilla nisi porta. Quisque tristique ac metus quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque nunc. Aliquam non ligula sodales, rutrum turpis at, scelerisque nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac porttitor lacus, sed placerat lectus. Proin at ante ut nunc pretium fringilla in et sapien. Quisque nec justo vel mi laoreet malesuada. Phasellus dolor felis, mollis ac maximus sit amet, mollis bibendum lacus."
            },
            {
                name: "Cannyon Floor", 
                image: "https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104491f0c179aeeeb3b8_340.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales viverra dui, vel sagittis justo aliquet eu. Quisque cursus pretium sapien sit amet luctus. Quisque quis diam eget nisi vestibulum porta. Curabitur porttitor augue aliquet purus ullamcorper, ac tempus ipsum venenatis. Vivamus sagittis nisi et sapien maximus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum elit magna, pharetra sed felis quis, euismod porttitor tellus. Aliquam at ante vitae neque maximus vehicula. Vivamus dictum ut ante ut bibendum. Vestibulum euismod at elit nec gravida. Quisque faucibus fermentum ultricies. Donec tempus lacus purus, sed vestibulum neque fermentum at. Maecenas vel orci non sapien fringilla semper. Ut at erat aliquam, ultricies orci bibendum, euismod nulla. Quisque interdum eros dictum nisi congue, id fringilla nisi porta. Quisque tristique ac metus quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque nunc. Aliquam non ligula sodales, rutrum turpis at, scelerisque nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac porttitor lacus, sed placerat lectus. Proin at ante ut nunc pretium fringilla in et sapien. Quisque nec justo vel mi laoreet malesuada. Phasellus dolor felis, mollis ac maximus sit amet, mollis bibendum lacus."
            }
        ];
        
        
function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("removed campgrounds");
            
            // add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("added a campground");
                        
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was Internet.",
                                author: "Homer Simpson"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;
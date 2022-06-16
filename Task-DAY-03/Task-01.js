//JSON iterate over all for loops (for, for in, for of, forEach)

//for loop
 
var json=[{
    "id":"06",  
    "name":"kovendhan", 
    "year":"2022",
    "Attendance" :"[mon,tue]"
    }];

    //for
    for (var i=0;i<json.length;i++)
    {
        console.log(`name:${json[i].name} year:${json[i].year} `);
    }
    
    //forin
    for(var details in json)
    {
        console.log("for in json details",json[details]);
    }
    
    //forof
    for(var details of json)
    {
        console.log("for of json details",details)
    }
    
    //forEach
    json.forEach(function(obj) 
    {
        console.log(obj.id);
    });
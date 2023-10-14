// step 1
var request = new XMLHttpRequest()
//console.log(request)

//step 2
request.open ("GET","https://restcountries.com/v3.1/all")
//console.log(request.open ("GET","https://restcountries.com/v3.1/all"))

//Step 3 
request.send()

//step 4
request.onload= function(){
    var data = request.response
    //console.log(data);
    //console.log(JSON.parse(data));
    var result = JSON.parse(data)
   // console.log(result[0].area)
    //console.log(result[0].name.common)

    // for accessing multiple values 
    //for loop
   /*  for (var i = 0 ; i < result.length ;i++){
        console.log(result[i].name.common)
        console.log(result[i].area)
    }  */
                                                                                                                                                                                                                                                                                                                         
    // for of loop - obj

    /* for (obj of result){
        console.log(obj.area,obj.name.common)
    } */

    // for in loop - obj 
        /* for (obj in result){
       console.log(result[obj].area,result[obj].name.common)
    } */
    console.log(result[20].name.common+","+ result[20].region+","+result[20].subregion)
    // for (obj of result){
    //     console.log(obj.region+","+obj.subregion+","+obj.name.common)
    // } 

}



















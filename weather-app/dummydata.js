const address= process.argv[2]
if(!address){
  console.log('Please provide a valid address');
}else{
geoCode(address,(error,data)=>{
  if(error){
    return console.log(error);
  }
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error){
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    })
})
}
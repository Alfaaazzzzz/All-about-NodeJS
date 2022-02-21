const http= require('http');

const url= 'http://api.weatherstack.com/current?access_key=f760b65ff561e2566bef764c70ce8c99&query=40,-75'

const request= http.request(url,(response)=>{
    let data=''

    response.on('data',(chunk)=>{
        data= data+ chunk.toString()
    })

    response.on('end',()=>{
        const body= JSON.parse(data)
        console.log(body);
    })

    response.on('error',(error)=>{
        console.log(error);
    })
})

request.end()


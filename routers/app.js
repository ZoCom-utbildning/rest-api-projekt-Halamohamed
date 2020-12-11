const express = require('express');
const Converter = require('node-temperature-converter');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router(); 
const fetch = require('node-fetch');

 
//const fahrenheit = new Converter.Fahrenheit(95);
 
  app.use(bodyParser.json());
  router.get('/', (req,res) => {
    const html = "<h1>welcome to temperature converter</h1>"+
    "<p>write efter api/:"+
         "<p> 'convert/f/:deg' if you want to convert to fehrenheit" +
             "<p> 'convert/c/:deg' if you want to convert to celsius" +
                 "<p> 'convert/k/:deg' if you want to convert to kelvin"  ;
    res.send(html);
    
  });
  
  router.get('/convert/c/:deg', (req,res) => {
    const celsius = new Converter.Celsius(+req.params.deg);
    const obc = {
        name: "Celsius",
        deg: celsius.degrees,
        fah: celsius.toFahrenheit(),
        kel: celsius.toKelvin(),
        str: celsius.toString(),
    };
    res.json(obc);
    
  });
  
  router.get('/convert/f/:deg', (req,res) => {
      const fahrenheit = new Converter.Fahrenheit(+req.params.deg);
      const obf = {
        name: "Fahrenheit",
        deg: fahrenheit.degrees,
        fah: fahrenheit.toCelsius(),
        kel: fahrenheit.toKelvin(),
        str: fahrenheit.toString(),
      }
    res.status(200).json(obf);
  });
  router.get('/convert/k/:deg', (req,res) => {
    const kelvin = new Converter.Kelvin(+req.params.deg);  
    const obk = {
        name: "Kelvin",
        deg: kelvin.degrees,
        fah: kelvin.toFahrenheit(),
        kel: kelvin.toCelsius(),
        str: kelvin.toString(),
    };
    res.json(obk);
    
  });
  router.post('/post', (req,res) => {
    const body =   {name :'hala', course: 'skalbara tjänster'};
 
    fetch('https://httpbin.org/post', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => res.send(json.json));
  })

module.exports = router;
   
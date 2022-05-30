//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetchNasa)

function getFetchNasa(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


(function getFetchLoc(){
  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=357e916debdb45d48edde47e8f6a6751`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
       
        document.querySelector('h3').innerText = data.ip_address
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
})();

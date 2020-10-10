const PUBLIC_KEY = 'AIzaSyAGBjflHmaO19F9nXTxrqJWVp6hwVT2t-U';

let data = {
  sinapsis: [
    {
      category: 'Aritmética',
      link: 'https://www.youtube.com/watch?v=SYJDtSchoyY',
    },
    {
      category: 'Aritmética',
      link: 'https://www.youtube.com/watch?v=8Bm3rnG4jfg',
    },
    {
      category: 'Aritmética',
      link: 'https://www.youtube.com/watch?v=rvnYQIqSt9U',
    },
    {
      category: 'Conjuntos Numéricos',
      link: 'https://www.youtube.com/watch?v=rtNC7g1h_JA',
    },
    {
      category: 'Conjuntos Numéricos',
      link: 'https://www.youtube.com/watch?v=MBE_801X26o',
    },
    {
      category: 'Conjuntos Numéricos',
      link: 'https://www.youtube.com/watch?v=ektlw6NYKqE',
    },
    {
      category: 'Números Naturales',
      link: 'https://www.youtube.com/watch?v=rtNC7g1h_JA',
    },
    {
      category: 'Números Naturales',
      link: 'https://www.youtube.com/watch?v=MBE_801X26o',
    },
    {
      category: 'Perspectiva histórica de Números Naturales',
      link: 'https://www.youtube.com/watch?v=2GzNRY2iYNg',
    },
    {
      category: 'Perspectiva histórica de Números Naturales',
      link: 'https://www.youtube.com/watch?v=ektlw6NYKqE',
    },
    {
      category: 'Representación gráfica de Números Naturales',
      link: 'https://www.youtube.com/watch?v=86mXodpq_2c',
    },
    {
      category: 'Operaciones',
      link: 'https://www.youtube.com/watch?v=KvLfGiDm_CE',
    },
    {
      category: 'Suma',
      link: 'https://www.youtube.com/watch?v=vyAwpftz1x4',
    },
    {
      category: 'Multiplicación',
      link: 'https://www.youtube.com/watch?v=UFLG6eEJvEU',
    },
    {
      category: 'Potenciación',
      link: 'https://www.youtube.com/watch?v=hbGKyZDpykQ',
    },
    {
      category: 'Radicación',
      link: 'https://www.youtube.com/watch?v=hbGKyZDpykQ',
    },
    {
      category: 'Radicación',
      link: 'https://www.youtube.com/watch?v=qFjYTAcDs_E',
    },
    {
      category: 'Algoritmo de la división',
      link: 'https://www.youtube.com/watch?v=BcE5ELCF_t4',
    },
    {
      category: 'Algoritmo de la división',
      link: 'https://www.youtube.com/watch?v=S1maPSOdaUk',
    },
    {
      category: 'Teorema del resto',
      link: 'https://www.youtube.com/watch?v=FibOZcx5p8E',
    },
    {
      category: 'Teorema del resto',
      link: 'https://www.youtube.com/watch?v=BMBVqaafUDI',
    },
    {
      category: 'Divisores de un número',
      link: 'https://www.youtube.com/watch?v=JkPNxDuhneI',
    },
    {
      category: 'Descomposición de factores primos',
      link: 'https://www.youtube.com/watch?v=he3ylUCqIzs',
    },
    {
      category: 'Máximo Común Múltiplo y Máximo Común Divisor',
      link: 'https://www.youtube.com/watch?v=Evea_X_dSV0',
    },
    {
      category: 'Definición informal de números enteros',
      link: 'https://www.youtube.com/watch?v=uCLSk-kXsgU',
    },
    {
      category: 'Representación gráfica de números enteros',
      link: 'https://www.youtube.com/watch?v=83_tdwzT1Xs',
    },
    {
      category: 'Operaciones de números enteros',
      link: 'https://www.youtube.com/watch?v=ncTcS6B1IYQ',
    },
    {
      category: 'Multiplicación de números enteros',
      link: 'https://www.youtube.com/watch?v=PX_zdlNQ9NM',
    },
    {
      category: 'Regla de signos',
      link: 'https://www.youtube.com/watch?v=ncTcS6B1IYQ',
    },
    {
      category: 'Potenciación',
      link: 'https://www.youtube.com/watch?v=mpwEQ3usaEc',
    },
    {
      category: 'Radicación',
      link: 'https://www.youtube.com/watch?v=rhSqm7GAm7Y',
    },
    {
      category: 'División',
      link: 'https://www.youtube.com/watch?v=g25yIlEEwrs',
    },
    {
      category: 'Números Racionales',
      link: 'https://www.youtube.com/watch?v=NLJ9zlO4M4E',
    },
  ],
};

function changeSearchBehaviour(newBehaviour) {
  if (newBehaviour === 'automatic') {
    document.querySelector('#search').onclick = searchSinapsis;
  } else {
    document.querySelector('#search').onclick = null;
  }
}

async function getVideos(result) {
  document.getElementById('filosinapsis-logo').src = './instasinapsis_logo.gif';

  let allVideos = await result.map(async (video) => {
    let videoId = await video.link.slice(32, 43);
    let url = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${PUBLIC_KEY}`;

    let request = await fetch(url);
    let response = await request.json();
    let data = await response.items[0].snippet;
    document.querySelector('#results').innerHTML +=
      (await '') +
      '<a href="https://www.youtube.com/watch?v=' +
      videoId +
      '" target="_blank">' +
      '<div class="result-container">' +
      '<div class="result__thumbnail"><img src="' +
      data.thumbnails.medium.url +
      '"/></div>' +
      '<div class="result__information">' +
      '<h1 class="result__title">' +
      data.localized.title +
      '</h1>' +
      '<p class="result__description">' +
      data.description.slice(0, 160) +
      '...</p>' +
      '</div>' +
      '</div></a>';
    return data;
  });
}

async function searchSinapsis() {
  document.getElementById('results').innerHTML = null;

  let searchText = document.getElementById('search').value;
  let searchRegExp = new RegExp(searchText, 'i');
  let result = data.sinapsis.filter((topic) =>
    searchRegExp.test(topic.category)
  );
  document.querySelector('#results').innerHTML = null;
  await getVideos(result);
}

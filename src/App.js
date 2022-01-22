import React from 'react'
import {useState, useEffect} from 'react'
import Player from './components/Player';
import './App.css'

const App = () => {
  const [songs] = useState([
      {
         "title": "Moonlight Sonata",
         "artist" : "Ludwig van Beethoven",
         "img_src": "img/beethoven.png",
         "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_moonlight_sonata.mp3",
         "src": "./music/beethoven_moonlight_sonata.mp3"
      },
      {
        "title": "Fur Elise",
        "artist" : "Ludwig van Beethoven",
        "img_src": "img/beethoven.png",
        "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_fur_elise-para-elise.mp3",
        "src": "./music/beethoven_fur_elise-para-elise.mp3"
      },
      {
        "title": "Sinfonia No.5",
        "artist" : "Ludwig van Beethoven",
        "img_src": "img/beethoven.png",
        "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/03-01-Symphony-No.-5-in-C-minor-Op.-67-1.-Allegro-Con-Brio.mp3",
        "src": "./music/03-01-Symphony-No.-5-in-C-minor-Op.-67-1.-Allegro-Con-Brio.mp3"
      },
      {
        "title": "Nocturne in E flat major Op. 9",
        "artist" : "Frédéric Chopin",
        "img_src": "img/chopin.png",
        "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/1-Nocturne-in-E-flat-major-Op.-9-No.-2.mp3",
        "src": "./music/1-Nocturne-in-E-flat-major-Op.-9-No.-2.mp3"
      },
      {
        "title": "Minute Waltz",
        "artist" : "Frédéric Chopin",
        "img_src": "img/chopin.png",
        "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/10-Minute-Waltz.mp3",
        "src": "./music/10-Minute-Waltz.mp3"
      },
      {
        "title": "Grande valse brillante in E flat major",
        "artist" : "Frédéric Chopin",
        "img_src": "img/chopin.png",
        "url": "https://www.netmundi.org/home/wp-content/uploads/2017/08/5-Grande-valse-brillante-in-E-flat-major.mp3",
        "src": "./music/5-Grande-valse-brillante-in-E-flat-major.mp3"
      }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() =>{
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.lenght - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex, songs.lenght])
  

  return (
    <div className="App">
      <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}/>
    </div>
    
  );
}

export default App;
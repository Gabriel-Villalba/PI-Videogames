import { useState, useEffect }from "react";
import picSoundOn from "..//img/sound_on.png"
import picSoundOff from "..//img/sound_off.png"
import styles from "../styles/Home.module.css"

/*export default function Sound(){

    const audio = new Audio('https://vgmsite.com/soundtracks/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3');

    const [sound, setSound] = useState(false)

    useEffect(() => {
        if(sound) {
          audio.play();
        }

        return () => {
          audio.pause()
        }   
    }, [sound]);
  
    return (
        <div>
        {sound ? <button onClick={()=>setSound(false)} className={styles.buttonMusic}><img src={picSoundOn} alt="sound on" width="40px" height="40px" /></button>: <button onClick={()=>setSound(true)} className={styles.buttonMusic}><img src={picSoundOff} alt="sound off" width="40px" height="40px" /></button>}
        </div>
    )
}
*/
function MyAudioComponent({ audio }) {
  const [sound, setSound] = useState(false);
  const player = new Audio(audio.asset.url); // Crear el objeto Audio fuera de useEffect

  useEffect(() => {
    if (sound) {
      player.play();
    } else {
      player.pause();
    }

    // Limpieza: pausar el audio al desmontar el componente
    return () => {
      player.pause();
    };
  }, [sound]);

  return (
    <div>
      {sound ? (
        <button onClick={() => setSound(false)} className={styles.buttonMusic}>
          <img src={picSoundOn} alt="sound on" width="40px" height="40px" />
        </button>
      ) : (
        <button onClick={() => setSound(true)} className={styles.buttonMusic}>
          <img src={picSoundOff} alt="sound off" width="40px" height="40px" />
        </button>
      )}
    </div>
  );
}

export default MyAudioComponent;
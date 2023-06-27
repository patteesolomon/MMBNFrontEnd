import song1 from '../assets/music/intro.mp3';
import song2 from '../assets/music/gbaIntro.mp3'; // fix the terniary operator
import { Howl } from 'howler';
import React from 'react';
import styled from 'styled-components';
const HideNoJutsu = styled.div`
    display: none;
    visibility: hidden;
`
const MusicPlayer = () => {
    
    const s1 = new Howl({
        src: [song1],
        autoplay: true,
        playonce: true,
        loop: false,
        volume: 0.05,
        onend: function () {
            console.log('Finished!');
        }
    });
    return (
        <HideNoJutsu>
            <div>
            {
                (s1.playing()) ? s1.stop() : s1.play()
            }
            </div>
        </HideNoJutsu>
    )
}
export default MusicPlayer;
import backg from '../assets/title/background.png';
import paral from '../assets/title/paralax.png';
import megaman from '../assets/title/MegaReady.png';
import logo from '../assets/EXE1.png';
import MusicPlayer from './MusicPlayer';
import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/users-api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// if you dont use capital letters for
// the first letter of the component function,
// it will not work
const Bgk = styled.div`
  background-image: url(${backg});
  z-index: 0;
`;

const Parax = styled.div`
  z-index: 2;
  background-image: url(${paral});
`;

const Mega = styled.div`
  background-image: url(${megaman});
  z-index: 1;
  background-repeat: no-repeat;
`;

const L = styled.div`
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-direction: reverse;
  animation-iteration-count: infinite;
@keyframes rotate {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
`;

export default function FetchUsers(){
  const nav = useNavigate();

  const [user, setUser] = useState([]);
  const URL = 'http://localhost:3001/'; 
  const data = fetch(URL);
  useEffect(() => {
    getUsers()
    .then(res => setUser(res.data));
  }, []);

  const deleteTheUser = (id) => {
    deleteUser(id)
      .then(() => {
        nav('/users');
      })
  };
  return (
    <Bgk>
    <Parax>
    <Mega>
    <div>
      <MusicPlayer/>
      <br />
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <L><h1 onClick={() => { nav('/game') }}>START GAME</h1></L>
      <br />
      <br/>
      Registered Users:
      <br/>
      <ul>
      {user.map((users) => {
          if(users.username === undefined){
              return (
                  deleteTheUser(`/${users._id}`) 
              )
          }
          else if (users.username === String().length){
              return(
                    <li>
                      {`/${users.username} no name`}
                    </li>
              )
          }
          else{
              return(
                    <li>
                        {`${users.username}`}{user.username}
                    </li>
              )
          }
      })}
      </ul>
          </div>
        </Mega>
      </Parax>
    </Bgk>
  );
};
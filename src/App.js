import logo from './image/logo.png';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Container,Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from './img/ntlify.svg';
// import img2 from './img/stellate.svg';
import { FaGithub,FaTwitter,FaHeart,FaChevronLeft,FaChevronRight } from "react-icons/fa";



function App() {
  let [data,setData]=useState([]);
  let [loading,setloading]=useState(true);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setData(response.data.results);
    setloading(false);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setloading(false);

  })
  
  },[])
 
  return (
    loading?(
      <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    </>
    ):(
    <div className="App">
      <header>
        <div className='container-fluid'>
        <div className='logo_header d-flex align-items-center pt-1 pb-1'>
          <div className='logo_left'>
            <a><img src={logo}></img></a>
          </div>
          <div className='right_social ms-auto'>
            <ul className='d-flex align-items-center p-0 m-0 me-3'>
              <li><a className='me-4'>Docs</a></li>
              <li><a className='me-4'>About</a></li>
              <li><a className='btn_h'>SUPPORT US</a></li>
            </ul>
          </div>
        </div>
        </div>
      </header>
      <div className='title mt-5 mb-5'>
        <h1 className='text-center'>The Rick and Morty API</h1>
      </div>
      <div className='bgrey spacer'>
      {/* <Container> */}
        <div className='main_section'>      {
        data.map((ele,ind)=>{
          let dot='rgb(142,150,157)';
          if(ele.status === 'Alive'){
            dot='rgb(85,204,68)';
          }else if(ele.status === 'Dead'){
            dot='red';
          }
          return(

           <div className='bgclr section'> 
            <div>
            <img variant="top" src={ele.image} />
            </div>
            <div className='content'>
              <div> 
              <h2>{ele.name}</h2>
              <span><font style={{color:dot}}> ● </font>{ele.status} - {ele.species}</span>
              </div>
              <div className='mt-3'>
                <p>Last known location:</p>
              <span>{ele.location.name}</span>
              </div>
              <div className='mt-3'>
                <p>First seen in:</p>
              <span>
                {ele.origin.name}
              </span>
              </div>
            </div>
            </div> 
            
            
          )
        })
      }
      
      </div>
      
     

      {/* </Container> */}
      </div>
      <footer className='text-center'>
        <div>
          <div className='pb-1'>
          <span className='me-4 s_hover'>CHARACTERS: 826</span>
          <span className='me-4 s_hover'>LOCATIONS: 126</span>
          <span className='s_hover'>EPISODES: 51</span>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
          <span className='me-2 s_hover'>SERVER STATUS</span>
          <span className='green_icon'></span>
          </div>
          <div className='pt-4'>
            <a className='me-4'><img ></img></a>
            <a><img ></img></a>
          </div>
          <div className='pt-4 f_icons'>
           <ul className='d-flex align-items-center justify-content-center'>
            <li className='me-4'><i><FaGithub></FaGithub></i></li>
            <li className='me-4'><i><FaTwitter></FaTwitter></i></li>
            <li className='me-4'><i><FaHeart></FaHeart></i></li>
           </ul>
          </div>
          <div className='last'>
           <span><ul><li><i><FaChevronLeft></FaChevronLeft></i><i><FaChevronRight></FaChevronRight></i></li></ul> </span>
           <span>by <a> Axel Fuhrmann </a> 2024</span> 
          </div>
        </div>
      </footer>
     </div>
    )
    
  );
}

export default App;
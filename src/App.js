import Images from './Images';
import React , {useState} from 'react';
import './styles.css';

function App() {
  const [selectedImg, setSelectedImg]=useState(Images[0]);
  return (
   <div className="App">
    <div className="container">
    <img src={selectedImg} alt="Selected" className="selected"/>
      <div className="imgContainer">
      {Images.map((img,index)=>
      <img key={index} src={img} alt="image"
      onClick={()=>setSelectedImg(img)}
      />
      )}
      </div>

    </div>
   </div>
  );
}

export default App;

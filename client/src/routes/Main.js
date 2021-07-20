import axios from 'axios';
import React, {useState, useEffect} from 'react';
import MainPresenter from './Presenters/MainPresenter.js'

/*
class Image extends React.Component{
  render(){
    const name = this.props.name;
    const imgUrl = "../"+name+".jpg"
    return (
      <div className = "image-box">
        <h1> {name} </h1>
        <img className = "main-img" src = {imgUrl} alt = {name} title = {name}/>
      </div>
    )
  }
}
*/

const Main = () => {
  const [topTenData, setTopTenData] = useState([]);
  const [boxOfficeData, setBoxOfficeData] = useState([]);

  const getTopTen = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/top10`)
    .then((response) => {
      setTopTenData(response.data.result);
      console.log(response.data.result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getBoxOffice = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/boxOffice`)
    .then((response) => {
      setBoxOfficeData(response.data.boxOffice);
      console.log(response.data.boxOffice);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  useEffect(() => getTopTen(), []);
  useEffect(() => getBoxOffice(), []);


  return (
    <MainPresenter topTenData={topTenData} boxOfficeData={boxOfficeData}/>
  )
}

export default Main;
import React, {optionsState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Search = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 900px;
`;

const SearchUpper = styled.div`
  margin: auto;
  width: 900px;
  padding: auto;
  align: center;
  display: block;
  margin-bottom: 23px;
`;

const CritSelect = styled.select`
  text-align: center;
  width : 80px;
  height : 50px;
  font-size: 20px;
  margin-top : 5px;
  padding-left: 3px;
  outline: none;
  &:hover,
  &:focus {
    border: 1px solid #6799ff;
  }
`;

const CritOption = styled.option`
  text-align: center;
  font-size: 20px;
`;

const SearchInput = styled.input`
  height: 50px;
  margin-left : 10px;
  width : 810px;
  margin-top : 5px;
  font-size: 20px;
  padding-left: 5px;
  transition: border 0.1s ease-in-out;
  outline: none;
  &:hover,
  &:focus {
    border: 2px solid #6799ff;
  }
`;

const MovieCard = styled.div`
  padding : 15px;
  class: "card bg-primary mb-3";
  margin: 20px auto 20px auto;
  width: 700px;
  height: 245px;
  display: block;
  background-color: #E2E1FF;
  box-shadow: 1px 2px 2px gray;
  border-radius: 0.3em;
  font-family: ëëęł ë;
`;

const MovieImageLink = styled.div`
  class: "card-img-top";
  float: left;
  margin: auto;
`;

const MovieImage = styled.img`
  overflow: hidden;
  width: 150px;
  height: 215px;
`;

const MovieTitleLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  hover {
    text-decoration: underline;
  }
  
  active {
    text-decoration: underline;
  }
`;

const MovieContent = styled.p`
  class: "card-body";
  float:right;
  margin:auto;
  width : 500px;
  text-align: left;
  size: 20px;
  dispaly:flex;
  color: black;
`;

const MovieSummary = styled.p`
  margin-top: 2px;
  text-align: left;
  color: black;
  width : 500px;
  overflow: hidden; text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; 
  word-wrap:break-word;
  line-height: 1.5em;
  height: 7.5em;
  margin-bottom: 0;
`;

const SummaryLink = styled(Link)`
  height: 1.5em;
  position: relative;
  left:450px;

  color: black;

  padding: 5px;
  font-family: "Jua";
  margin: auto;

  border-style: solid;
  border-width : 0 0 3px 0;
  border-radius : 7px;
  border-color: #595959;

  background-color: #7D79FF;
  &:hover {
      background: white;
      color: #6b66ff;
  }
`;



const SearchPresenter = ({searchCritCheck, submitSearch, takeInput, result, currentSearch}) => {

  for (let i = 0 ; i < result.length; i++) {
    result[i].title = result[i].title.replace(/<b>/igm, '');
    result[i].title = result[i].title.replace(/<\/b>/igm, '');
    // if (result[i].rate === "0.00")
    //   result[i].rate = "ě ëł´ ěě";
    if (result[i].date === 'ě ëł´ ěě')
      result[i].date = "ę°ë´ěź ě ëł´ ěě";
    if (result[i].summary === "")
      result[i].summary = "";
  }

  return (
    
    <Search>
      
      <SearchUpper>
        <CritSelect name="SearchCrit" value={optionsState} onChange={searchCritCheck}>
          <CritOption value="title"> ě ëŞŠ</CritOption>
          <CritOption value="director"> ę°ë</CritOption>
        </CritSelect>

        <SearchInput type="text" onChange={takeInput} onKeyPress={submitSearch}
          placeholder="ę˛ěě´ ěë Ľ"></SearchInput>
      </SearchUpper>

      {currentSearch ? (<>
    
        {/* ëŹ´ě¸ę°ę° ę˛ěëěě ëě íě ęłľę° */}
        <h2>'{currentSearch}' ě ě˛´ ę˛ěę˛°ęłźę° {result.length}ęą´ ë°ę˛Źëěěľëë¤.</h2>
        {result.map((movie) => ( 
          
          <MovieCard key={movie.movieCd}>
            <MovieImageLink>
              <Link to={`/Detail?code=${movie.movieCd}`}><MovieImage alt="movie" src={movie.image} onerror="this.src='image.png'"></MovieImage></Link>
            </MovieImageLink>
            <MovieContent>
              <MovieTitleLink to={`/Detail?code=${movie.movieCd}`}>{movie.title}</MovieTitleLink> 
              <p>íě  {movie.rate}<br/>
              {movie.date}</p>
              <MovieSummary>
                {movie.summary} 
              </MovieSummary>
              <SummaryLink to={`/Detail?code=${movie.movieCd}`}>ë ëł´ę¸°</SummaryLink>
              
            </MovieContent>
          </MovieCard>
          ))}</>) : (
        <>
        {/* ěëŹ´ę˛ë ę˛ěëě§ ěěě ëě íě ęłľę° */}
            <h2>ě ëŞŠ ëë ę°ëěźëĄ ěíëĽź ę˛ěíě¸ě.</h2>
            <div className="container">
              <blockquote className="blockquote text-center text-success">
                <p><i>"ěíë ě§ëŁ¨í ëśëśě´ ěť¤í¸ë ě¸ěě´ë¤."</i></p>
                <footer className="blockquote-footer">ěíë ë íěšě˝</footer>
              </blockquote>
            </div>
        </>)}
      
    </Search>
  )
}

export default SearchPresenter;
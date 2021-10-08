import React from "react";
import styled from "styled-components";


const SongViewDiv = styled.div`
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even){
    background-color: #dddddd;
  }
`;

export const SongView = (props) => {
  return(
    <SongViewDiv>
    <div>
      <table>
        <tr>
         <th>artist</th>
          <th>title</th>
          <th>album</th>
          <th>release date</th>
        </tr>
        <tr>
          <td> {props.songList.map(function(item){
            return <li>{item.artist}</li>

          })}</td>

          <td> {props.songList.map(function(item){
            return <li>{item.title} </li>

          })}</td>
          <td> {props.songList.map(function(item){
            return <li>{item.album} </li>

          })}</td>

          <td> {props.songList.map(function(item){
            return <li>{item.release_date} </li>

          })}</td>
        </tr>
      </table>
    </div>
    </SongViewDiv>

  )
}

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

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;


export const SongView = (props) => {
  return (
    <SongViewDiv>
      <div>
        <table>
          <thead>
          <tr>
            <th>artist</th>
            <th>title</th>
            <th>album</th>
            <th>genre</th>
            <th>release date</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
          {props.songList.map(function (song, index) {
            return (
              <tr key={index}>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>
                  <button onClick={() => props.deleteSongFromDB(song.id)}>delete</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </SongViewDiv>
  );
}

import styled from "styled-components";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


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
            <th>Delete</th>
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
                  <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => props.deleteSongFromDB(song.id)}>delete</Button>
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

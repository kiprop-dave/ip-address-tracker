import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './context/context';
import Location from './components/location';
import Map from './components/map';

const Page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`

const BackgroundHead = styled.div`
  position: absolute;
  height: 35%;
  background-image: url("/pattern-bg.png");
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title{
    color: white;
    margin-top: 1.5rem;
  }
`
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 0 0 5px;
  background-color: white;
  width: 35%;
  height: 2.5rem;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 1rem;
  }

  .arrow{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    height: 100%;
    width: 2.5rem;
    background-color: #0d0c0c;

    &:hover{
      background-color: hsl(0, 0%, 17%);
    }
  }
`
const Input = styled.input`
  border: none;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  height: 100%;
  width: 100%;
  border-radius: 10px 0 0 10px;

  &:focus{
    outline: none;
  }
`
const MapContainer = styled.div`
  position: absolute;
  top: 35%;
  height: 65%;
  width: 100%;
  /* border: solid 1px; */
`

function App() {
  const { inputIp, ipAddress, apiResults, searchIp } = useContext(Context);
  const { location } = apiResults;

  return (
    <>
      <Page>
        <BackgroundHead>
          <h2 className='title'>IP Address Tracker</h2>
          <TextDiv>
            <Input name='ipAddress' placeholder='Search for any IP address or domain'
              value={ipAddress} onChange={(e) => inputIp(e)} />
            <div className='arrow' onClick={() => searchIp()}>
              <img src="/icon-arrow.svg" alt="" />
            </div>
          </TextDiv>
        </BackgroundHead>
        <Location results={apiResults} />
        <MapContainer>
          {
            location !== undefined &&
            <Map location={location} />
          }
        </MapContainer>
      </Page>
    </>
  )

}

export default App

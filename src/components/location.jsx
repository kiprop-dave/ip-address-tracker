import React, { useContext } from 'react';
import styled from 'styled-components';

const LocationConatiner = styled.div`
    position: fixed;
    z-index: 1001;
    background-color: #fdf9f9;
    border-radius: 10px;
    width: 70%;
    display: flex;
    align-items: center;
    padding: 5px;
    min-height: 6.5rem;
    top: 9.5rem;
    left: 15%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 600px){
        width: 90%;
        left: 3.5%;
        top: 7rem;
        flex-direction: column;
    }
`
const ResultsDiv = styled.div` // component to hold ip,location,timezone and isp
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 3rem;
    min-height: 6rem;
    margin-left: ${({ left }) => left ? left : '0'};

    @media screen and (max-width: 600px) {
        min-height: 2rem;
        align-items: center;
        margin-top: 0.3rem;
    }
`
const Title = styled.h4`
    color: hsl(0, 0%, 59%);
    font-size: 12px;
    letter-spacing: 1px;
`
const Text = styled.h3`
    color: #0d0c0c;
    font-weight: 500;
    margin-top: 0.5rem;

    @media screen {
        margin-top: 0.1rem;
    }
`
const VerticalSeparator = styled.div`
    height: 3.5rem;
    border: solid 1px hsl(0, 0%, 59%);
    margin-left: 4.5rem;
    margin-right: 0.8rem;

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export default function Location({ results }) {
    const { ip, location, isp } = results; // get properties of results

    return (
        <>
            <LocationConatiner>
                <ResultsDiv>
                    <Title>IP ADDRESS</Title>
                    {
                        results ?
                            <Text>{ip}</Text> :
                            <p>Loading...</p>
                    }
                </ResultsDiv>
                <VerticalSeparator />
                <ResultsDiv >
                    <Title>LOCATION</Title>
                    {
                        results.location !== undefined &&
                        <Text>
                            {`${location.region}, ${location.city} ${location.postalCode}`}
                        </Text>
                    }
                </ResultsDiv>
                <VerticalSeparator />
                <ResultsDiv>
                    <Title>TIMEZONE</Title>
                    {
                        results.location !== undefined &&
                        <Text>{`UTC ${location.timezone}`}</Text>
                    }
                </ResultsDiv>
                <VerticalSeparator />
                <ResultsDiv>
                    <Title>ISP</Title>
                    {
                        results &&
                        <Text>{isp}</Text>
                    }
                </ResultsDiv>
            </LocationConatiner>
        </>
    )

}
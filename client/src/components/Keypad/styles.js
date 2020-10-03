import styled from 'styled-components';
import marvel from '../layout/img/marvel.jpg'
// import { _neon, _panleft } from '~/assets/styles/partials/_animations';
// import { colors } from '~/assets/styles/partials/_variables';

// const { primary, dark, white } = colors;

export const Layer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  font-family: GTWalsheim;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: background-color 5s linear;

  &:nth-child(1) {
    height: 100%;
    width: 100%;
    background-image: url(${marvel});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    width: 320px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      width: 250px;
    }
  }
`;

export const Parent = styled.main`
  height: 80vh;
  align-items: center;
  justify-items: center;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 1.3fr;
  }
`;

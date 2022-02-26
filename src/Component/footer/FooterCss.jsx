import styled from "styled-components";

export const Box = styled.div`
  background: rgb(247, 247, 247);
  bottom: 0;
  width: 100%;




  @media (min-width: 600px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0px auto;
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  padding:0px 25px;
  line-height:20px;
  width:100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 65px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #141414;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    border-bottom:1px solid black;
    width:fit-contet;
  }
`;

export const Heading = styled.p`
  font-size: 16px;
  color: #000000;
  // margin-bottom: 40px;
  font-weight: bold;
`;

export const EndDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #141414;
  p {
    /* margin: 10px auto; */
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
`;

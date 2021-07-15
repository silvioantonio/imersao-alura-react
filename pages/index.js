import styled from 'styled-components'

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;



export default function Home() {
  return (
    <MainGrid>
      <div style={{gridArea: 'profileArea'}}>
        <Box>
          <img src="https://github.com/silvioantonio.png" />
        </Box>
      </div>
      <div style={{gridArea: 'welcomeArea'}}>
        <Box>Bem Vindo</Box>
      </div>
      <div style={{gridArea: 'profileRelationsArea'}}>
        <Box>Comunidade</Box>
      </div>
    </MainGrid>
  )
}

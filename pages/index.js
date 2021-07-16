import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileRelarionsWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/commons"

function ProfileSidebar(props){
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} 
        style={{borderRadius: '8px'}} />      
    </Box>
  )
}

export default function Home() {
  const githubUser = 'silvioantonio';
  const pessoasFavoritas = ['mony', 'pedro', 'jussara', 'pietro', 'rui']
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}></ProfileSidebar>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>Bem Vindo</Box>
          <OrkutNostalgicIconSet />
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelarionsWrapper>
            <h2 className="smallTitle">Comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return(
                  <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`}/>
                    <span>{pessoa}</span>
                  </a>
                )
              })}
            </ul>
          </ProfileRelarionsWrapper>
        </div>
      </MainGrid>
    </>
  )
}

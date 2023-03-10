import config from "./config.json";
import styled from "styled-components";
import { StyledTimeline } from "./components/Timeline";
import { CSSReset } from "./components/CSSReset";
import Menu from "./components/Menu";

function HomePage() {
  const estilosDaHomePage = {
    //background: "red"
  };

  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <header />
        <Timeline playlists={config.playlists}>Conteudo</Timeline>
      </div>
    </>
  );
}

export default HomePage;

//function Menu() {
//  return (

//  <div>
//     Menu
//  </div>
//  )
//}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" />*/}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  //console.log("Dentro do componente", propriedades.playlists);
  const playlistsNames = Object.keys(propriedades.playlists);
  //Statement
  //Retorno por expressão (REACT !)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsName) => {
        const videos = propriedades.playlists[playlistsName];
        console.log(playlistsName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  document.title = "Home | Sasa\'s website"
  return (
    <main>
      <div className="title">
        <br /><br />
        <h1>Sasa's website</h1>
        <div className="projects">
          <Link to="/bgm">
            <article className="project">
              <h3>BGM Mod</h3>
              <p>スタイリッシュな多機能音楽Mod。<br />YoutubeやSoundCloudなどに対応。</p>
            </article>
          </Link>
          <Link to="#">
            <article className="project">
              <h3>Falcon Client</h3>
              <p>多機能なHack Client<br/>.</p>
            </article>
          </Link>
        </div>
      </div>
      <div>
        <section className="profile">
          <h3>Profile</h3>
          <img src={`${process.env.PUBLIC_URL}/images/sasa.png`} alt="profile_image" width="100" height="100"/> 
          <p className="name">笹</p>
          <p className="introduce">そこら辺の中学生。プログラミングができる（一応）<br />あとピアノが一応弾ける。<br />MinecraftのModつくってたりDiscordのBOT作ってたりする。</p>
        </section>
      </div>
    </main>
  );
};

export default Home;

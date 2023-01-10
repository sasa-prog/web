import './bgm.css';
import { useSpring, animated, useTransition, useChain, config, useSpringRef} from 'react-spring';

const BGM = (props) => {
  document.title = "BGM Mod | Sasa\'s website";
  const data = ["Youtube","SoundCloud"];
  const springRef = useSpringRef();
  const style = useSpring({
    ref: springRef,
    config: config.sttif,
    to: [
      {opacity: 0, color: '#ffaaee'},
      {opacity: 1, color: 'rgb(14,26,19)'},
    ],
    from: { opacity: 0, color: 'red' },
    delay: 1000,
  });
  const transRef = useSpringRef();
  const transition = useTransition(data,{
    ref: transRef,
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
  });
  useChain([springRef, transRef]);
  return (
    <main>
      <div className="title"><br /><br /><br /><br /><br /><br />
        <h1>BGMMod</h1>
        <a className="downloadButton" href={`${process.env.PUBLIC_URL}/OptiFine_1.19.2_HD_U_H9.jar`}>Download</a>
      </div>
      <Overview s = {style}/>
    </main>
  );
};

const Overview = (props) =>{
  return (
    <div className="discs">
        <animated.div style={props.s}>
        <section className="overview">
          <h3>Minecraftに音楽を</h3>
          <p>素晴らしいゲームであるMinecraftに音楽の楽しみを。<br />好きな音楽を聴きながらプレイできます。</p>
        </section>
        <section>
          <h3>YoutubeやSoundCloudなどのサイトから音楽を再生</h3>
          <p>お馴染みのサイトから好きな音楽を再生できます。</p>
        </section>
        <img src={`${process.env.PUBLIC_URL}/images/sc1.png`} alt="screenshots" width="640" height="360"/>
        </animated.div>
      </div>
  );
};
export default BGM;

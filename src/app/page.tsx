import IntroText from "@/app/introText/IntroText";
import AboutText from "@/app/aboutText/AboutText";

export default function Home() {
  //polyfill();
  /*  const [goToAbout, setGoToAbout] = useState(false);
  const [goToProjects, setGoToProjects] = useState(false);*/
  //const aboutRef = useRef(null);
  //const projectsRef = useRef(null);

  return (
    <>
      <header></header>
      <main>
        <IntroText />
        <AboutText />
      </main>
    </>
  );
}

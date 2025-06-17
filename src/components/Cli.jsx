import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import hands1 from "../extra files/hands210.jpeg";
import hands2 from "../extra files/hands2.jpeg";
import gif from "../extra files/gif4.gif";
import ambient from "../extra files/ambient5.mp3";
import spin from "../extra files/fps.mp4";
import Glitcha from "../extra files/glitch.mp3";

export default function Cli() {
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const data = useRef(null);
  const vidplay = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [Mygif, setGif] = useState(false);
  const [distortgif, setDistortgif] = useState(false);
  const [playaudi, setPlayaud] = useState(false);
  const [playvid, setPlayvid] = useState(false);
  const [glitchaud, setGlitchaud] = useState(false);
  const [glitchpara, setGlitchpara] = useState(false);
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [list]);

console.log("hey there")

 const handleInput = (e) => {
  if (e.key === "Enter" && inp.trim()) {
    const command = inp.trim().toLowerCase();
    let response = "Unknown command";

    if (command === "help" || command === "?") {
  response = `Available commands:<br>
- <strong>help</strong> or <strong>?</strong> : Show all available commands<br>
- <strong>about</strong> or <strong>a</strong>: Learn about me<br>
- <strong>skills</strong> or <strong>s</strong>: Show my technical skills<br>
- <strong>education</strong>or <strong>e</strong> : Display my academic background<br>
- <strong>contact</strong> or <strong>c</strong> : My email and phone<br>
- <strong>social</strong> or <strong>sl</strong> : Social media links<br>
- <strong>clear</strong> : Clear the terminal output`;
}
else if (command === "about"|| command === "a") {
      response = `Rahul Krishna T\n
A Full Stack Developer in the making — I build systems. End to end. Front to back. Pixel to packet.

Currently pursuing my B.E. in Computer Science and Engineering at Dhirajlal Gandhi College of Technology, I’m a passionate developer with hands-on experience in Java, Python, C, HTML, CSS, and JavaScript. I dont just write code — I architect chaos into clean design. I take broken ideas, gut them, and rebuild them stronger, faster, leaner.

Driven by a love for technology and its power to simplify life, I’ve worked on several academic and personal projects that shaped my skills in responsive web design, efficient algorithms, and user-friendly interfaces. I am constantly learning, experimenting, and pushing myself toward becoming a highly skilled full-stack developer.

I believe code is an art — and I am here to be the artist.`;
    } else if (command === "skills"|| command === "s") {
  response = "Skills:\nJava\nPython\nJavaScript\nReact\nCSS\nHTML\nSpring\nTailwind\nWondershare Filmora\nDaVinci Resolve";
}else if (command === "education"|| command === "e") {
  response = "\nDhirajlal Gandhi College of Technology\nBE Computer Science and Engineering\n2022 - 2026\n\nNPR Matriculation Higher Secondary School\n2020 - 2022";
} else if (command === "contact" || command === "c") {
  response = "\nMail: thisisrahul8015@gmail.com\nPhone: 9047196476";
}else if (command === "social" || command === "sl") {
 response = `Social Links:<br>
<a href="https://github.com/Itzzmerahul" target="_blank">Github</a><br>
<a href="https://www.linkedin.com/in/rahul-t-8855b7290/" target="_blank">LinkedIn</a><br>
<a href="https://x.com/rahulsNoto" target="_blank">Twitter</a><br>
<a href="https://coff.ee/itzme_rahul___" target="_blank">BuyMeACoffee</a><br>
<a href="https://sneha-t8015.github.io/Rahul-portfolio/" target="_blank">Portfolio</a>`;
}
     else if (command === "new") {
      response = "This is a CLI experience built by Rahul.";
    }else if (command === "clear"|| command === "cl") {
      setList([]);
      setInp("");
      return;
    }

    // Push both input and response to the list
   setList((prev) => [
  ...prev,
  { type: "input", text: inp },         // 👈 Push the typed command
  { type: "response", text: response }  // 👈 Push the output/response
]);

    setInp(""); // Clear the input
  }
};

  useEffect(() => {
    if (playvid && vidplay.current) {
      const video = vidplay.current;

      const handleEnd = () => {
        setPlayvid(false);
      };

      video.addEventListener("ended", handleEnd);
      return () => video.removeEventListener("ended", handleEnd);
    }
  }, [playvid]);

  useEffect(() => {
    const time = setTimeout(() => setLoaded(true), 100);
    const gifTimer = setTimeout(() => setGif(true), 700);
    return () => {
      clearTimeout(time);
      clearTimeout(gifTimer);
    };
  }, []);

  return (
   <div className="cli">
  <img
    src={hands1}
    alt="left"
    className={`hands handsleft ${loaded && !distortgif ? "active" : ""}`}
  />
  {distortgif && <div className="fill-animation" />} {/* Moved here */}
  <div className="gif-wrapper">
    <img
      src={gif}
      alt="gif"
      className={`center-gif ${Mygif ? "visible" : ""} ${distortgif ? "shrink" : ""}`}
      onClick={() => {
        setDistortgif(true);
        setPlayaud(true);
        setTimeout(() => setPlayvid(true), 300);
        setTimeout(() => setGlitchaud(true), 310);
        setTimeout(() => setGlitchpara(true), 300);
      }}
    />
  </div>
  {playaudi && (
    <audio ref={data} autoPlay>
      <source src={ambient} type="audio/mpeg" />
    </audio>
  )}
  <img
    src={hands2}
    alt="right"
    className={`hands handsright ${loaded && !distortgif ? "active" : ""}`}
  />
      {playvid && (
        <video autoPlay className="vid" ref={vidplay}>
          <source src={spin} type="video/mp4" />
        </video>
      )}

      {glitchaud && (
        <audio autoPlay>
          <source src={Glitcha} type="audio/mp3" />
        </audio>
      )}

<div className="container">
      {glitchpara && (
        <p className={`climode ${!playvid ? "climodeoff" : ""}`}>
          <Typewriter
            key={playvid ? "full" : "short"}
            words={!playvid ? ["Cli Mode"] : ["U just entered the CLI Mode."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      )}
      </div>

   {!playvid && glitchpara && (
  <>
    <div className="mainpara">
      <p>
        Welcome to EXE Grid,<br />Type "help" or "?" to continue.
      </p>
    </div>
  </>
)}

{!playvid && glitchpara && (
 <div className="terminal" onClick={() => inputRef.current?.focus()}>
   {list.map((line, idx) => {
  if (!line || !line.type || !line.text) return null;

  if (line.type === "response") {
    return line.text.split("\n").map((part, i) => (
      <p key={`${idx}-${i}`} className={`cli-line response`}>
        <span dangerouslySetInnerHTML={{ __html: part }} />
      </p>
    ));
  }

  

  return (
    <p key={idx} className={`cli-line ${line.type}`}>
      cli@rahul~$ {line.text}
    </p>
  );
})}



    <div className="cli-line input">
  <span className="prompt">cli@rahul~$</span>
 <input
  ref={inputRef}
  type="text"
  value={inp}
  onChange={(e) => setInp(e.target.value)}
  onKeyDown={handleInput}
  className="boxy"
/>

<div ref={bottomRef} />


</div>
    </div >
    ) }

    </div>
);
}

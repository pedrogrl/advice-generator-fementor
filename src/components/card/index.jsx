import dividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import dice from "../../assets/images/icon-dice.svg";
import loaderImg from "../../assets/images/loader.gif";
import { Main } from "./style";
import { useEffect, useState } from "react";

export default function Card() {
  const [phrase, setPhrase] = useState({
    id: "000",
    advice: "",
  });
  const [loader, setLoader] = useState(true);

  async function api() {
    setLoader(true)
    try {
      const response = await (
        await fetch("https://api.adviceslip.com/advice")
      ).json();

      const { id, advice } = response.slip;
      setPhrase({ id, advice });

      setTimeout(() => {
        setLoader(false);
      }, 1500);
    } catch (error) {
      setLoader(false)
      setPhrase({ ...phrase, advice: "Error while loading advice, click on the button to try again." });
    }
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Main>
        <h1>advice #{phrase.id}</h1>
        <p>{phrase.advice}</p>

        <img src={dividerDesktop} />
        {loader ? (
          <button onClick={api}>
            <img src={loaderImg} />
          </button>
        ) : (
          <button onClick={api}>
            <img src={dice} />
          </button>
        )}
      </Main>
    </>
  );
}

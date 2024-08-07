import { CardBody, CardContainer, CardItem } from "./components/ui/3dCard";
import { LampDemo } from "./components/ui/Lamp";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <LampDemo />
      <TextGenerateEffect
        words="Transform your ideas into A simple, Seamless , Real User experience."
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <CardContainer>
        <CardBody>
          <CardItem></CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default App;

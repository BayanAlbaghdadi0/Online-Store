import { CardBody, CardContainer, CardItem } from "./components/ui/3dCard";
import { LampDemo } from "./components/ui/Lamp";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";

function App() {
  return (
    <>
      <LampDemo />
      <TextGenerateEffect
        words="Transform your ideas into A simple, Seamless , Real User experience."
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <button className="btn btn-outline">Default</button>
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      <button className="btn btn-outline btn-accent">Accent</button>
      <CardContainer>
        <CardBody>
          <CardItem></CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default App;

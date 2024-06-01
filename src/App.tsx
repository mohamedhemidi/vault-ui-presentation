import ButtonsSection from "./Sections/ButtonsSection";
import InputsSection from "./Sections/InputsSection";
import LazyLoadImagesSection from "./Sections/LazyLoadImagesSection";
import SelectSection from "./Sections/SelectSection";
import ToastsSection from "./Sections/ToastsSection";

function App() {
  return (
    <div className="p-6">
      <ButtonsSection />
      <InputsSection />
      <SelectSection />
      <ToastsSection />
      <LazyLoadImagesSection />
    </div>
  );
}

export default App;

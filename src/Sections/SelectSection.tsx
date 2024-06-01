import React, { useState } from "react";
import Select, {
  SelectOption,
} from "../Components/styledComponents/Select/MultiSelect";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const SelectSection = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <section className="buttons-section flex flex-col flex-wrap gap-8 justify-center items-center my-6">
      <h1 id="Inputs" className="text-2xl font-bold">
        Selects
      </h1>
      <article className="flex flex-row gap-8 flex-wrap">
        <Select
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <Select
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
      </article>
    </section>
  );
};

export default SelectSection;

// Pure CSS
import { TextArea } from "../Components/css-modules/Inputs/TextArea";
import { TextField } from "../Components/css-modules/Inputs/TextField";

// Style components
// import { TextArea } from "../Components/styledComponents/Inputs/TextArea";
// import { TextField } from "../Components/styledComponents/Inputs/TextField";

// Tailwind
// import { TextArea } from "../Components/tailwind/Inputs/TextArea";
// import { TextField } from "../Components/tailwind/Inputs/TextField";

const InputsSection = () => {
  return (
    <section className="buttons-section flex flex-col flex-wrap gap-8 justify-center items-center my-6">
      <h1 id="Inputs" className="text-2xl font-bold">
        Inputs
      </h1>
      <article className="flex flex-row gap-8 flex-wrap">
        <TextField label="Email" color="primary" type="text" name="username" />
        <TextField
          label="Username"
          error
          errorMessage="Username is already taken, try another"
          color="primary"
          type="text"
          name="username"
        />
        <TextField
          label="Password"
          color="secondary"
          type="password"
          name="username"
        />
        <TextArea
          label="Summary"
          color="success"
          name="summary"
        />
        <TextArea
          label="Description"
          color="success"
          name="description"
          error
          errorMessage="Please write a description"
        />
      </article>
    </section>
  );
};

export default InputsSection;

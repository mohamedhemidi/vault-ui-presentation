//
// Styled-Components
//
import { Button } from "../Components/styledComponents/Button";

//
// Pure CSS
//

// import { Button } from "../Components/css-modules/Button";

//
// TailwindCSS
//
// import { Button } from "src/Components/tailwind/Button";


import EditIcon from "../assets/icons/Edit";

const ButtonsSection = () => {
  return (
    <section className="buttons-section flex flex-col gap-8 justify-center items-center my-6">
      <h1 id="Buttons" className="text-2xl font-bold">
        Buttons
      </h1>
      <article className="flex flex-col gap-8">
        {/* ---- Text Buttons without Icons ---- */}
        <div className="without_icons flex flex-row justify-center flex-wrap gap-8">
          <Button color="primary">Primary Button</Button>
          <Button color="success">Success Button</Button>
          <Button color="warning">Warning Button</Button>
          <Button color="danger">Danger Button</Button>
          <Button variant="outlined" color="primary">
            Primary Button
          </Button>
          <Button variant="outlined" color="success">
            Success Button
          </Button>
          <Button variant="ghost" color="primary">
            Danger Button
          </Button>
          <Button variant="shadow" color="warning">
            Warning Button
          </Button>
          <Button width={10} loading={true} color="primary">
            Primary Button
          </Button>
          <Button disabled={true} variant="shadow" color="warning">
            Warning Button
          </Button>
        </div>
        {/* ---- Text Buttons With Icons ---- */}
        <div className="without_icons flex flex-row justify-center flex-wrap gap-8">
          <Button
            icon={<EditIcon />}
            variant="outlined"
            size="small"
            color="primary"
          >
            Secondary Button
          </Button>
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" />
              </svg>
            }
            variant="filled"
            size="small"
            color="info"
          >
            Info Button
          </Button>
        </div>
        {/* ---- Rounded Icon Buttons ---- */}
        <div className="without_icons flex flex-row justify-center flex-wrap gap-8">
          <Button
            rounded={true}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            }
            color="primary"
          ></Button>
          <Button
            rounded={true}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            }
            color="success"
          ></Button>
          <Button
            rounded={true}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            }
            color="danger"
          ></Button>
          <Button
            rounded={true}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            }
            color="neutral"
          ></Button>
        </div>
      </article>
    </section>
  );
};

export default ButtonsSection;

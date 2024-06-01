import { useState } from "react";
import { Toast } from "../Components/css-modules/Toast";

const ToastsSection = () => {
  const [SuccessActive, setSuccessActive] = useState(false);
  const [ErrorActive, setErrorActive] = useState(false);
  const [WarningActive, setWarningActive] = useState(false);
  const [InfoActive, setInfoActive] = useState(false);
  return (
    <section className="flex flex-col flex-wrap gap-8 justify-center items-center my-6">
      <h1 id="Toasts" className="text-2xl font-bold">
        Toasts
      </h1>
      <article>
        <Toast
          message="You signed up successfully"
          active={SuccessActive}
          close={() => setSuccessActive(false)}
        />
        <Toast
          variant="error"
          title="Login Error"
          message="An error has occured while login , please try again later"
          active={ErrorActive}
          close={() => setErrorActive(false)}
        />
        <Toast
          variant="warning"
          message="Please confirm number"
          active={WarningActive}
          close={() => setWarningActive(false)}
        />
        <Toast
          variant="info"
          active={InfoActive}
          close={() => setInfoActive(false)}
        />
      </article>
      <article className="flex flex-row gap-8 flex-wrap">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSuccessActive(!SuccessActive)}
        >
          Success
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setErrorActive(!ErrorActive)}
        >
          Error
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarningActive(!WarningActive)}
        >
          Warning
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setInfoActive(!InfoActive)}
        >
          Info
        </button>
      </article>
    </section>
  );
};

export default ToastsSection;

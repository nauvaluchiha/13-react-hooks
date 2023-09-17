import { useState } from "react";

const GenerateNumberBtn = () => {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    const randomNumber = Math.round(Math.random() * 100);
    setNumber(randomNumber);
    console.log(randomNumber);
  };

  return (
    <section style={{ marginTop: "220px" }}>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-5">
        <button
          style={{ width: "fit-content", padding: "5px 15px" }}
          onClick={() => {
            generateNumber();
          }}
        >
          Tebak Angkamu!
        </button>
        <h5 className="mt-2 text-center px-3">
          {number || "Mainkan game tebak angka 1 - 100 dengan klik tombol di atas"}
        </h5>
      </div>
    </section>
  );
};

export default GenerateNumberBtn;

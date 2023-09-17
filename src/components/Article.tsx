import { useState } from "react";
import bootstrapLogo from "@/assets/decoration/bootstrap-logo.svg";
import article from "@/article.json";

const Article = () => {
  const { title, description } = article;
  const [language, setLanguage] = useState({
    title: title.en,
    description: description.en,
  });

  const changeLanguage = (lang: string) => {
    if (lang === "id") setLanguage({ title: title.id, description: description.id });
    else setLanguage({ title: title.en, description: description.en });
  };

  return (
    <section className="mx-auto px-4 d-flex flex-column align-items-center mt-5 px-sm-5" style={{ maxWidth: "850px" }}>
      <div className="mx-auto px-0 d-flex flex-column align-items-center mt-5 px-md-5 " style={{ maxWidth: "850px" }}>
        <div className="align-self-start ps-2">
          <div className="border border-2 border-black">
            <button onClick={() => changeLanguage("en")} className="w-50 bg-primary text-white border-0">
              EN
            </button>
            <button onClick={() => changeLanguage("id")} className="w-50 border-0">
              ID
            </button>
          </div>
        </div>
        <img src={bootstrapLogo} alt="Bootstrap logo" style={{ width: "65px" }} />
        <h1 className="fw-semibold fs-2 mt-4">{language.title}</h1>
        <p className="text-center" style={{ maxWidth: "740px" }}>
          {language.description}
        </p>
      </div>
    </section>
  );
};

export default Article;

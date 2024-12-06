import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border border-black m-3 p-3">
        <h3 className="font-bold">{title}</h3>
        {isVisible && <p>{description}</p>}
        {isVisible ? (
          <button
            className="border border-black box-border p-1 mt-1.5 mr-3"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            hide
          </button>
        ) : (
          <button
            className="border border-black box-border p-1 mt-1.5"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            show
          </button>
        )}
      </div>
    </>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-2xl m-2 p-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(flag) => {
          flag ? setVisibleSection("about") : setVisibleSection("");
        }}
      />
      <Section
        title={"Carrers Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={(flag) => {
          flag ? setVisibleSection("careers") : setVisibleSection("");
        }}
      />
      <Section
        title={"Product Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
        }
        isVisible={visibleSection === "product"}
        setIsVisible={(flag) => {
          flag ? setVisibleSection("product") : setVisibleSection("");
        }}
      />
    </div>
  );
};

export default Instamart;

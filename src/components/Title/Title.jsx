import "./Title.css";

function Title({ titleText, titleClass }) {
  return (
    <>
      <h2 className={ `title ${titleClass}` }>{ titleText }</h2>
    </>
  );
}

export default Title;
import "./Slogan.css";

function Slogan({ sloganText, sloganClass }) {
  return (
    <p className={ `slogan ${ sloganClass }` }>{ sloganText }
    </p>
  );
}

export default Slogan;
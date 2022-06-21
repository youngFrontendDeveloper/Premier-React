import {ReactComponent as ArrowComponent} from "./img/arrow.svg"

function Arrow() {
  return(
    <>
      <ArrowComponent className="card__arrow card__arrow--dark" style={{width:"20", height:"10"}}/>
      {/*<svg className="card__arrow card__arrow--dark" width="20" height="10">*/}
      {/*  <use xlink:href="img/sprite.svg#arrow"></use>*/}
      {/*</svg>*/}
    </>
  )
}

export default Arrow
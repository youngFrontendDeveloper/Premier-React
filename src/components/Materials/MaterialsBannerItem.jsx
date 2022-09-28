function MaterialsBannerItem({item}) {
  return (
    <figure className="tabs__content-img">
      <img src={item.color} alt="Цвет материала" loading="lazy"/>
      <figcaption className="tabs__content-title">{item.title}</figcaption>
    </figure>
  );
}

export default MaterialsBannerItem;
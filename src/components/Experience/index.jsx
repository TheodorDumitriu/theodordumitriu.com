import "./style.css";

export default function Experience({ xpName, xpDuration, xpItems }) {
  return (
    <article className="experience__block">
      <h3 className="experience__name">{xpName}</h3>
      <h4 className="experience__duration">{xpDuration}</h4>
      <ul className="experience__list">
        {xpItems.map((xpItem) => (
          <li className="experience__item">{xpItem}</li>
        ))}
      </ul>
    </article>
  );
}

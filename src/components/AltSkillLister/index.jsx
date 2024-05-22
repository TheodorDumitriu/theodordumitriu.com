import "./style.css";

export default function AltSkillLister({ title, skills }) {
  return (
    <article className="altskill-container">
      <h2 className="altskill__title">{title}</h2>
      <ul className="altskill__list">
        {skills.map((skill) => (
          <li className="altskill__item">{skill}</li>
        ))}
      </ul>
    </article>
  );
}

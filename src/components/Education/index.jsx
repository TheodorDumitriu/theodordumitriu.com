export default function Education({ globalTitle, edName, edLocationDuration }) {
  return (
    <article className="education container">
      <h2>{globalTitle}</h2>
      <h3>{edName}</h3>
      <h4>{edLocationDuration}</h4>
    </article>
  );
}

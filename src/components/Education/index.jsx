export default function Education({ edName, edLocationDuration }) {
  return (
    <article className="education">
      <h3>{edName}</h3>
      <h4>{edLocationDuration}</h4>
    </article>
  );
}

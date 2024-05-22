import "./style.css";

export default function TechSkill({ root, children }) {
  return (
    <code className="techskill">
      <p className="teckskill__para">
        ➜ <span className="techskill__root">{root}</span>
        <span className="techskill__git">
          git:(<span className="techskill__git-main">main</span>)
          <span className="techskill__git-cross">✗</span>
        </span>
        <span className="techskill__body">{children}</span>
      </p>
    </code>
  );
}

import TechSkill from "../TechSkill";

import "./style.css";

export default function TeckSkills() {
  return (
    <section className="techskills container">
      <h2 className="techskills__title">Tech Skills</h2>
      <div className="techskills__code">
        <TechSkill root="front ">
          {" "}
          javascript react typescript nextjs react-native
        </TechSkill>
        <TechSkill root="back "> node-js aws gcp docker</TechSkill>
        <TechSkill root="Versioning & CI/CD "> github gitlab</TechSkill>
        <TechSkill root="Design "> adobe zeplin figma</TechSkill>
        <TechSkill root="Task tracking "> notion jira clickup slite</TechSkill>
      </div>
    </section>
  );
}

import TechSkill from "../TechSkill";

import "./style.css";

export default function TeckSkills() {
  return (
    <section className="techskills container">
      <div className="techskills__title-container d-flex align-items-center">
        <h2 className="techskills__title">Tech Skills</h2>
        <span className="techskills__blinker"></span>
      </div>
      <div className="techskills__code">
        <TechSkill root="front ">
          {" "}
          javascript react typescript nextjs react-native
        </TechSkill>
        <TechSkill root="back "> node-js aws gcp docker</TechSkill>
        <TechSkill root="versioning-ci/cd "> github gitlab</TechSkill>
        <TechSkill root="design "> adobe zeplin figma</TechSkill>
        <TechSkill root="task-tracking "> notion jira clickup slite</TechSkill>
      </div>
    </section>
  );
}

import styled from "styled-components";

const Level = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  background-color: ${(p) => p.$color};

  ${(p) =>
    p.$highlight &&
    `
      box-shadow: 0 0 10px ${p.$color};
      transform: scale(1.05);
    `}
`;

export function Difficulty({ level }) {
  let text = "";
  let color = "";
  let highlight = false;

  if (level === 1) {
    text = "Easy";
    color = "#fbc02d";
  }

  if (level === 2) {
    text = "Medium";
    color = "#ef6c00";
  }

  if (level === 3) {
    text = "Hard";
    color = "#d32f2f";
    highlight = true;
  }

  return <Level $color={color} $highlight={highlight}>{text}</Level>;
}

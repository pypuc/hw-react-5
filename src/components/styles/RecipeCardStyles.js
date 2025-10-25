import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 16px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Title = styled.h3`
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
`;

export const DifficultyWrapper = styled.div`
  margin-top: 10px;
`;

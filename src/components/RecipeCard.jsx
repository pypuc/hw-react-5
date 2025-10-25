import React from "react";
import { Card, Image, Title, Info, DifficultyWrapper } from "./styles/RecipeCardStyles";
import { Difficulty } from "./Difficulty";

export function RecipeCard({ image, title, time, servings, calories, difficulty }) {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Info>
        <span> {time} min</span>
        <span> {servings} servings</span>
        <span> {calories} cal</span>
      </Info>
      <DifficultyWrapper>
        <Difficulty level={difficulty} />
      </DifficultyWrapper>
    </Card>
  );
}

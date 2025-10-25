import React from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { RecipeCard } from "./components/RecipeCard";

export default function App() {
  const recipes = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybvCjq2v6Enq965lNaZvOa0pclk4LZumraA&s",
      title: "Smoked salmon burger",
      time: 20,
      servings: 6,
      calories: 400,
      difficulty: 1,
    },
    {
      image: "https://www.cookedandloved.com/wp-content/uploads/2022/11/whipped-feta-dip-roasted-tomatoes-2.jpg",
      title: "Tomatoes With Creamy Feta",
      time: 15,
      servings: 3,
      calories: 600,
      difficulty: 1,
    },
    {
      image: "https://images.sbs.com.au/dims4/default/80a0d5b/2147483647/strip/true/crop/1200x675+0+62/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2Faaloo-ko-achar.jpg",
      title: "Spicy potato salad",
      time: 30,
      servings: 2,
      calories: 320,
      difficulty: 2,
    },
    {
      image: "https://www.seriouseats.com/thmb/1PXiv2YBTEvInc5HyiTSlTacJAY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240611-SEA-BiryaniStyleRoastChicken-KanikaandJatin-Sharma-Hero-6f756fad4526486fb33f4369761414d2.jpg",
      title: "Chicken Biryani",
      time: 40,
      servings: 4,
      calories: 700,
      difficulty: 3,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard
              key={index}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
              servings={recipe.servings}
              calories={recipe.calories}
              difficulty={recipe.difficulty}
            />
          );
        })}
      </div>
    </>
  );
}

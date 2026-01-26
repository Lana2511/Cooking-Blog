import type {Recipe} from "../types/recipe.ts";

export const featuredRecipes: Recipe[] = [
    {
        id: 1,
        title: "Savory Herb-Infused Chicken",
        description:
            "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        image: "/src/assets/icons/recipes/chicken.png",
        time: "40 MIN",
        difficulty: "EASY PREP",
        serves: "3 SERVES",
        isVegan: false,
    },
    {
        id: 2,
        title: "Decadent Chocolate Mousse",
        description:
            "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
        image: "/src/assets/icons/recipes/mousse.png",
        time: "30 MIN",
        difficulty: "MEDIUM PREP",
        serves: "4 SERVES",
        isVegan: true,
    }
];
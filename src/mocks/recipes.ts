import type {Recipe} from "../types/recipe.ts";

export const recipes: Recipe[] = [
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
        title: "Lemon Garlic Grilled Chicken",
        description:
            "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
        image: "/src/assets/icons/recipes/lemon-chicken.png",
        time: "1 HOUR",
        difficulty: "HARD PREP",
        serves: "4 SERVES",
        isVegan: false,
    },
    {
        id: 3,
        title: "Quinoa Veggie Stir-Fry",
        description:
            "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner",
        image: "/src/assets/icons/recipes/quinoa.png",
        time: "30 MIN",
        difficulty: "EASY PREP",
        serves: "3 SERVES",
        isVegan: true,
    },
    {
        id: 4,
        title: "Berry Bliss Smoothie Bowl",
        description:
            "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants",
        image: "/src/assets/icons/recipes/smoothie.png",
        time: "10 MIN",
        difficulty: "EASY PREP",
        serves: "2 SERVES",
        isVegan: true,
    },
    {
        id: 5,
        title: "Spaghetti Aglio e Olio",
        description:
            "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes",
        image: "/src/assets/icons/recipes/spaghetti.png",
        time: "20 MIN",
        difficulty: "EASY PREP",
        serves: "2 SERVES",
        isVegan: true,
    },
    {
        id: 6,
        title: "Grilled Veggies with Sauce",
        description:
            "Served with a zesty chimichurri sauce, it’s a perfect addition to your outdoor gatherings",
        image: "/src/assets/icons/recipes/grilled-veggies.png",
        time: "25 MIN",
        difficulty: "MEDIUM PREP",
        serves: "6 SERVES",
        isVegan: true,
    },
]
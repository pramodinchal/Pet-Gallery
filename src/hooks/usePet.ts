import { useEffect, useState } from "react";
import type { Pet } from "../types";

export function usePet(id: string | undefined) {
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://eulerity-hackathon.appspot.com/pets")
            .then((res) => res.json())
            .then((data: any[]) => {
           const formattedData: Pet[] = data.map((item: any, index: number) => ({
  id: String(index + 1),

  title: item.title,
  description: item.description,
  imageUrl: item.url,
  createdAt: item.created,

  species:
    item.title.toLowerCase().includes("cat")
      ? "Cat"
      : item.title.toLowerCase().includes("bun")
      ? "Rabbit"
      : item.title.toLowerCase().includes("parrot")
      ? "Bird"
      : "Dog",

  breed: "Mixed Breed",

  age: (index % 10) + 1,

  gender: index % 2 === 0 ? "Male" : "Female",

  weight: `${(index % 20) + 2}kg`,

  location: "New York, USA",

  status: "Available",

  tags: ["friendly", "cute"],

  fileSizeKb: 500,
}));
                const foundPet = formattedData.find((p) => p.id === id);

                if (!foundPet) {
                    throw new Error("Pet not found");
                }

                setPet(foundPet);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    return { pet, loading, error };
}
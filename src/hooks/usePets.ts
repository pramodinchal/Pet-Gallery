import { useEffect, useState, useCallback } from "react";
import type { Pet } from "../types";

interface UsePetsResult {
    pets: Pet[];
    loading: boolean;
    error: string;
    isEmpty: boolean;
    refetch: () => void;
}

const PETS_API_URL = "https://eulerity-hackathon.appspot.com/pets";

export function usePets(): UsePetsResult {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchPets = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(PETS_API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch pets");
            }

            const data = await response.json();

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

            setPets(formattedData);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPets();
    }, [fetchPets]);

    return {
        pets,
        loading,
        error,
        isEmpty: pets.length === 0,
        refetch: fetchPets,
    };
}
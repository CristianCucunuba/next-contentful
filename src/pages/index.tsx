import { useQuery } from "urql";
import { useGetRecipesQuery } from "../generated/generated";

const RecipesQuery = `
  query {
    recepiesCollection {
      items {
        name
      }
    }
  }
`;

export default function Home() {
  const [{ data, error, fetching }] = useGetRecipesQuery();

  if (!data || fetching || error) {
    return null;
  }

  console.log({ data });

  return (
    <div className="border border-red-500">
      <h1 className="text-8xl font-heading">Grandma's All-Time Best Recipes</h1>
      <p>
        Grandma's cooking has stood the test of time with these treasured
        recipes.
      </p>
      {data.recipeCollection?.items.map((recipe) => (
        <div>{recipe?.name}</div>
      ))}
    </div>
  );
}

import Image from "next/image";
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
    <>
      <div className="px-4 pb-20 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="pt-10 mb-3 text-center text-7xl font-heading">
            Grandma's All-Time Best Recipes
          </h1>
          <p className="mb-10 text-xl text-center">
            Grandma's cooking has stood the test of time with these treasured
            recipes.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
            {data.recipeCollection?.items.map((recipe) => (
              <div
                className="overflow-hidden bg-white border border-gray-200 rounded-md shadow-md cursor-pointer"
                key={recipe?.name}>
                <div className="relative w-full h-96">
                  <Image
                    src={recipe?.image?.url ?? ""}
                    alt={recipe?.name ?? ""}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="pb-6 mt-5 ml-2 text-4xl font-bold text-gray-900 font-heading">
                  {recipe?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TODO: Show modal with method of the recipe */}
    </>
  );
}

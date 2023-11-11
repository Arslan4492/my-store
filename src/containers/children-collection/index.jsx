import { useQuery } from "@tanstack/react-query";
import { getDataFn } from "@/utils/api";
import Page from "@/layout/pages-layout";

export default function ChildrenCollections() {
  // Queries
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({ queryKey: ["categories"], queryFn: getDataFn });

  if (isLoading) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">lOADING...</h2>
    );
  }

  if (error) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">SERVER ERROR</h2>
    );
  }
  return (
    <Page
      id="men"
      spacing="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:py-[150px]"
    >
      <div className="grid grid-cols-2 flex-row flex-wrap justify-start gap-4">
        {categories &&
          categories
            ?.find((category) => category.title === "CHILDREN")
            .subCategories.map((category) => (
              <div className="relative w-full h-full" key={category.id}>
                <img
                  alt={`${category.title} image`}
                  className="w-full h-[31rem] rounded-lg shadow-lg object-cover cursor-pointer"
                  key={category.id}
                  src={category.image}
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-primary font-semibold text-4xl uppercase">
                    {category.title}
                  </h1>
                </div>
              </div>
            ))}
      </div>
    </Page>
  );
}

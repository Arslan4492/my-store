import Page from "@/layout/pages-layout";
import { getDataFn } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import "./styles.css";

const Women = () => {
  // Queries
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getDataFn,
  });
  return (
    <Page
      id="women"
      spacing="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:py-[150px]"
    >
      <div className="grid grid-cols-2 flex-row flex-wrap justify-start gap-4">
        {categories &&
          categories
            ?.find((category) => category.title === "WOMEN")
            .subCategories.map((category) => (
              <div
                className="relative w-full h-full img-hover-zoom"
                key={category.id}
              >
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
};

export default Women;

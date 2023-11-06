import Page from "@/layout/pages-layout";
import { getDataFn } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

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
          categories?.subCategories.map((category) => (
            <img
              alt={`${category.title} image`}
              className="w-full rounded-lg shadow-lg object-cover cursor-pointer"
              key={category.id}
              src={category.image}
            />
          ))}
      </div>
    </Page>
  );
};

export default Women;

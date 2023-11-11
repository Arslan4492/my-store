import { useQuery } from "@tanstack/react-query";
import { getDataFn } from "@/utils/api";
import LoadingScreen from "@/components/common/loading";
import Page from "@/layout/pages-layout";
import { useNavigate } from "react-router-dom";

const WinterCollection = () => {
  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["winterCollection"],
    queryFn: getDataFn,
  });
  const navigate = useNavigate();

  if (isLoading) return <LoadingScreen />;

  if (data)
    return (
      <Page
        id="winter-collection"
        spacing="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:py-[150px]"
      >
        <div className="mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
            Customers also purchased
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="cursor-pointer">
                    <h3
                      className="text-sm text-white capitalize hover:underline"
                      onClick={() =>
                        navigate(`/winter-collection/${product.id}`)
                      }
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-white capitalize">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-white">
                    Rs. {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    );
};

export default WinterCollection;

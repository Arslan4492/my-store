import Page from "@/layout/pages-layout";
import { FormattedMessage } from "react-intl";

const JustBrowsing = () => {
  return (
    <Page
      id="just-browsing"
      spacing="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:py-[150px]"
    >
      <div className="flex items-center w-full justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                <FormattedMessage id="main-just-browsing" />
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man

                                                      "
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man

                                                          "
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man

                                                          "
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man

                                                      "
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man

                                                          "
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man

                                                          "
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man

                                                      "
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default JustBrowsing;

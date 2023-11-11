import Page from "@/layout/pages-layout";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Page
      id="home"
      spacing="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl font-bold w-[48rem] leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            <FormattedMessage id="main-heading" />
          </h1>
          <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
            Startup is free Next.js template for startups and SaaS business
            websites comes with all the essential pages, components, and
            sections you need to launch a complete business website, built-with
            Next 13.x and Tailwind CSS.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              to="/just-browsing"
              className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Just Browsing
            </Link>
            <Link
              to="https://github.com/NextJSTemplates/startup-nextjs"
              className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            >
              Want To Buy
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;

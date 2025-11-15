import HomePage from "./pages/ar";
import { homePageContent } from "./content/ar/index";

export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
export const dynamic = 'force-static';
export const metadata = {
  title: homePageContent.seo.title,
  description: homePageContent.seo.description,
};


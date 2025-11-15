import HomePageEn from "../pages/en";
import { homePageContentEn } from "../content/en/index";

export default function Page() {
  return <HomePageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: homePageContentEn.seo.title,
  description: homePageContentEn.seo.description,
};
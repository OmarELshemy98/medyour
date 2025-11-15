import AboutUsPage from "../pages/ar/about-us";
import { aboutUsContent } from "../content/ar/about-us";

export default function Page() {
  return <AboutUsPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: aboutUsContent.seo.title,
  description: aboutUsContent.seo.description,
};
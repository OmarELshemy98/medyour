import AboutUsPageEn from "../../pages/en/about-us";
import { aboutUsContentEn } from "../../content/en/about-us";

export default function Page() {
  return <AboutUsPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: aboutUsContentEn.seo.title,
  description: aboutUsContentEn.seo.description,
};
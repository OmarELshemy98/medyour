import WhyMedyourPageEn from "../../pages/en/why-medyour";
import { whyMedyourContentEn } from "../../content/en/why-medyour";

export default function Page() {
  return <WhyMedyourPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: whyMedyourContentEn.seo.title,
  description: whyMedyourContentEn.seo.description,
};
import WhyMedyourPage from "../pages/ar/why-medyour";
import { whyMedyourContent } from "../content/ar/why-medyour";

export default function Page() {
  return <WhyMedyourPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: whyMedyourContent.seo.title,
  description: whyMedyourContent.seo.description,
};
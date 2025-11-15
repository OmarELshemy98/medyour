import FaqsPage from "../pages/ar/faqs";
import { faqsContent as faqsPageContent } from "../content/ar/faqs";

export default function Page() {
  return <FaqsPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: faqsPageContent.seo.title,
  description: faqsPageContent.seo.description,
};
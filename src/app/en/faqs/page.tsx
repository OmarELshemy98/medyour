import FaqsPageEn from "../../pages/en/faqs";
import { faqsContentEn } from "../../content/en/faqs";

export default function Page() {
  return <FaqsPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: faqsContentEn.seo.title,
  description: faqsContentEn.seo.description,
};
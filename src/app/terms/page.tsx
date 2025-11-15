import TermsPage from "../pages/ar/terms";
import { termsContent as termsPageContent } from "../content/ar/terms";

export default function Page() {
  return <TermsPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: termsPageContent.seo.title,
  description: termsPageContent.seo.description,
};
import PrivacyPage from "../pages/ar/privacy";
import { privacyContent as privacyPageContent } from "../content/ar/privacy";

export default function Page() {
  return <PrivacyPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: privacyPageContent.seo.title,
  description: privacyPageContent.seo.description,
};
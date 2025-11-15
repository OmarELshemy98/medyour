import ContactPage from "../pages/ar/contact";
import { contactContent as contactPageContent } from "../content/ar/contact";

export default function Page() {
  return <ContactPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: contactPageContent.seo.title,
  description: contactPageContent.seo.description,
};
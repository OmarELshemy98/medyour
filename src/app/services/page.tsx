import ServicesPage from "../pages/ar/services";
import { servicesContent as servicesPageContent } from "../content/ar/services";

export default function Page() {
  return <ServicesPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: servicesPageContent.seo.title,
  description: servicesPageContent.seo.description,
};
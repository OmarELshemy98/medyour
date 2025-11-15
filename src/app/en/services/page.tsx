import ServicesPageEn from "../../pages/en/services";
import { servicesContentEn } from "../../content/en/services";

export default function Page() {
  return <ServicesPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: servicesContentEn.seo.title,
  description: servicesContentEn.seo.description,
};
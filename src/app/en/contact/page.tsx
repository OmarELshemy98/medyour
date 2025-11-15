import ContactPageEn from "../../pages/en/contact";
import { contactContentEn } from "../../content/en/contact";

export default function Page() {
  return <ContactPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: contactContentEn.seo.title,
  description: contactContentEn.seo.description,
};
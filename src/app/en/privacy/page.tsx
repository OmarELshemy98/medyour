import PrivacyPageEn from "../../pages/en/privacy";
import { privacyContentEn } from "../../content/en/privacy";

export default function Page() {
  return <PrivacyPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: privacyContentEn.seo.title,
  description: privacyContentEn.seo.description,
};
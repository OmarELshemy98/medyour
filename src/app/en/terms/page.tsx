import TermsPageEn from "../../pages/en/terms";
import { termsContentEn } from "../../content/en/terms";

export default function Page() {
  return <TermsPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: termsContentEn.seo.title,
  description: termsContentEn.seo.description,
};
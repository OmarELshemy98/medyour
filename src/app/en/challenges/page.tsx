import ChallengesPageEn from "../../pages/en/challenges";
import { challengesContentEn } from "../../content/en/challenges";

export default function Page() {
  return <ChallengesPageEn />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: challengesContentEn.seo.title,
  description: challengesContentEn.seo.description,
};
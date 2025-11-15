import ChallengesPage from "../pages/ar/challenges";
import { challengesContent as challengesPageContent } from "../content/ar/challenges";

export default function Page() {
  return <ChallengesPage />;
}
export const dynamic = 'force-static';
export const metadata = {
  title: challengesPageContent.seo.title,
  description: challengesPageContent.seo.description,
};
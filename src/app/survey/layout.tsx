import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership Preference Survey — Rachel Hutter',
  description:
    'Take the Leadership Preference Survey to explore how you want leaders to show up under pressure, navigate politics, and support your team.',
};

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

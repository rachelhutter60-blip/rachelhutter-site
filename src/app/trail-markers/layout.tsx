import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trail Markers — Rachel Hutter',
  description:
    'Find your trail markers. Build a personalized plan from Running Your Career: Trail Markers to Your Dream.',
};

export default function TrailMarkersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

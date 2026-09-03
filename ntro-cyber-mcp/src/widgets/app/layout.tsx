'use client';

import { WidgetLayout } from '@nitrostack/widgets';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>
          NTRO // Cyber Intelligence
        </title>
      </head>
      <body>
        <WidgetLayout>{children}</WidgetLayout>
      </body>
    </html>
  );
}




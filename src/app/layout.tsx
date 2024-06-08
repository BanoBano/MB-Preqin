
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container border p-4 my-4 bg-white">{children}</body>
    </html>
  );
}

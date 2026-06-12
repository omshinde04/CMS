import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Subhash Deshmukh — Leader Digital Platform',
  description:
    'Official digital platform of Subhash Sureshchandra Deshmukh — serving the people of Solapur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-navy-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

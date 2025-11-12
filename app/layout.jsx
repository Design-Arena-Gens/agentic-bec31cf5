import './globals.css';

export const metadata = {
  title: 'Nemawari Silk Mills | Surat Manufacturer & Wholesaler',
  description:
    'Nemawari Silk Mills manufactures and wholesales sarees, kurtis, blouses, and petticoats with fresh collections and bulk discounts for retailers across India.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "React crud",
  description: "Performance application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

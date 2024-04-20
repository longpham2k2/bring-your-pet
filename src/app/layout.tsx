export const metadata = {
  title: "QinPet",
  description: "Chăm sóc thú cưng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="vi">{children}</html>;
}

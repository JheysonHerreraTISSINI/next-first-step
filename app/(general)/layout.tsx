import { Nabvar } from '../../components/navbar/Nabvar';
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nabvar />
      {children}
    </>
  );
}

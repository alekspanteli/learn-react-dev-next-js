export default function Card({ children }: React.PropsWithChildren) {
  return (
    <div className="border rounded-md p-4 w-fit">
      {children}
    </div>
  );
}

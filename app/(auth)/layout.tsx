export default function Platform({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
}

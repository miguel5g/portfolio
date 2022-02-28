export const Footer = () => {
  return (
    <footer className="flex justify-center w-full px-6 py-3 border-t border-gray-200 backdrop-blur bg-white/95">
      {/* Footer Wrapper */}
      <div className="flex items-center w-full max-w-6xl">
        <p className="text-sm font-light text-gray-700">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

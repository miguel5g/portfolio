import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export const ToggleThemeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const themeName = theme === 'system' ? systemTheme : theme;

  function handleToggleTheme() {
    setTheme(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      className="px-3 py-2 lg:ml-auto min-w-[6rem] text-sm button"
      data-variant="secondary"
      onClick={handleToggleTheme}
    >
      {themeName === 'dark' ? <FiSun /> : <FiMoon />}
      <span>{themeName === 'dark' ? 'Claro' : 'Escuro'}</span>
    </button>
  );
};

/* Just for next dynamic import */
export default ToggleThemeButton;

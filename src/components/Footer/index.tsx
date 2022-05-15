import { FiGithub, FiLinkedin as FiLinkedIn, FiTwitter } from 'react-icons/fi';

import { SocialLink } from './SocialLink';

export const Footer = () => {
  return (
    <footer className="flex justify-center w-full px-6 py-3 border-t border-gray-200 dark:border-gray-900 backdrop-blur bg-white/95 dark:bg-gray-900/80">
      {/* Footer Wrapper */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-2 md:flex-row md:justify-between">
        <p className="text-sm font-light text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados.
        </p>

        <div className="flex gap-2">
          <SocialLink
            href="https://github.com/miguel5g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/miguel5g/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedIn />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/guel5g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
};

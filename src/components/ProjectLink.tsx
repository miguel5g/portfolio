import { FiEye, FiGithub } from 'react-icons/fi';

type ProjectLinkProps = {
  label: string;
  url: string;
  position?: number;
};

export const ProjectLink = ({ label, url, position = 0 }: ProjectLinkProps) => {
  const isGithub = label === 'Github';
  const isDemo = label === 'Demo';

  return (
    <a
      className="button w-full"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-variant={position === 0 ? 'primary' : 'secondary'}
      aria-label={label}
    >
      {isGithub && <FiGithub />}
      {isDemo && <FiEye />}
      {label}
    </a>
  );
};

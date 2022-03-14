import { BaseAnchor } from '../BaseAnchor';

type SocialAnchorProps = {
  icon: JSX.Element;
  href: string;
  label: string;
};

export const SocialAnchor = ({ href, label, icon }: SocialAnchorProps) => {
  return (
    <BaseAnchor
      className="flex items-center gap-3 px-6 py-3 text-base font-normal text-gray-800 transition border-l-4 border-gray-300 rounded hover:opacity-60 bg-gradient-to-r from-gray-200/60 to-transparent"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </BaseAnchor>
  );
};

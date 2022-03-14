import {
  FiGithub as FiGitHub,
  FiLink,
  FiLinkedin as FiLinkedIn,
  FiMail,
  FiTwitter,
  FiYoutube as FiYouTube,
} from 'react-icons/fi';

import { SocialAnchor } from './SocialAnchor';

export const SocialAnchorsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
      <SocialAnchor label="GitHub" icon={<FiGitHub />} href="https://github.com/miguel5g" />

      <SocialAnchor
        label="LinkedIn"
        icon={<FiLinkedIn />}
        href="https://www.linkedin.com/in/miguel5g/"
      />

      <SocialAnchor label="Twitter" icon={<FiTwitter />} href="https://twitter.com/guel5g" />

      <SocialAnchor label="Email" icon={<FiMail />} href="mailto:miguelcg958@gmail.com" />

      {/* <SocialAnchor label="Twitch" icon={<FiTwitch />} href="https://www.twitch.tv/miguel05g" /> */}

      <SocialAnchor
        label="YouTube"
        icon={<FiYouTube />}
        href="https://www.youtube.com/channel/UCBIH49ITq52oi5LYVcStZlA"
      />

      <SocialAnchor
        label="Discord"
        icon={<FiLink />}
        href="https://discordapp.com/users/342803796201832449/"
      />
    </div>
  );
};

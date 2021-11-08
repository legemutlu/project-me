import SiteConfig from '../../site.config';
import A from './A';
import IconTwitter from './icons/twitter';
import IconGithub from './icons/github';
import IconInstagram from './icons/instagram';

function SocialButton({ href, children }) {
  return (
    <A
      href={href}
      blank
      className="
      flex items-center p-3 bg-gray-200 text-gray-600 rounded-full transition-colors
      hover:bg-opacity-75
      dark:bg-gray-700 dark:text-gray-300"
    >
      {children}
    </A>
  );
}

function Social() {
  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={'mailto:' + SiteConfig.author.email}>
        <span className="mx-2 font-semibold">Email</span>
      </SocialButton>

      <SocialButton href={SiteConfig.social.twitter}>
        <IconTwitter />
      </SocialButton>

      <SocialButton href={SiteConfig.social.github}>
        <IconGithub />
      </SocialButton>

      <SocialButton href={SiteConfig.social.instagram}>
        <IconInstagram />
      </SocialButton>
    </div>
  );
}

export default Social;
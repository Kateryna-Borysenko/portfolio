import facebookIcon from '../images/socials/facebook.svg';
import githubIcon from '../images/socials/github.svg';
import instagramIcon from '../images/socials/instagram.svg';
import linkedinIcon from '../images/socials/linkedin.svg';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '../utils/urls';

export const socials = [
  {
    id: 1,
    name: 'LINKED IN',
    icon: linkedinIcon,
    url: LINKEDIN_URL,
  },
  {
    id: 2,
    name: 'INSTAGRAM',
    icon: instagramIcon,
    url: INSTAGRAM_URL,
  },
  {
    id: 3,
    name: 'FACEBOOK',
    icon: facebookIcon,
    url: FACEBOOK_URL,
  },
];

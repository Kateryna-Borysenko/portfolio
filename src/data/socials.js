import { Facebook, GithubIcon, InstagramIcon, LinkedinIcon } from '../components/icons'
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../utils/urls'

export const socials = [{
  id: 1,
  name: 'GIT HUB',
  icon: <GithubIcon width='44px' />,
  url: GITHUB_URL
}, {
  id: 2,
  name: 'LINKED IN',
  icon: <LinkedinIcon width='44px' />,
  url: LINKEDIN_URL
}, {
  id: 3,
  name: 'INSTAGRAM',
  icon: <InstagramIcon width='44px' />,
  url: INSTAGRAM_URL
}, {
  id: 4,
  name: 'FACEBOOK',
  icon: <Facebook width='44px' />,
  url: FACEBOOK_URL
},]
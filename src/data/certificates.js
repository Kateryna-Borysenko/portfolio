import englishPrimeCertificate from "../images/certificates/english.jpeg";
import frontendInfopulseCertificate from "../images/certificates/infopulse.jpg";
import frontendGoItCertificate from "../images/certificates/frontend-goit.jpeg";
import fullstackGoItCertificate from "../images/certificates/goit-full-stack.jpeg";
import designAlpacaSchoolCertificate from "../images/certificates/design.png";

import { INFOPULSE_UNIVER_URL, ENGLISH_PRIME_SCHOOL_URL, GO_IT_URL, ALPACA_SCHOOL_URL } from '../utils/urls'

export const certificates = [{
  id: 1,
  img: englishPrimeCertificate,
  info: {
    title: 'English Prime School',
    link: INFOPULSE_UNIVER_URL,
    city: 'Kyiv',
    year: '2021',
    description: ''
  }
}, {
  id: 2,
  img: frontendInfopulseCertificate,
  info: {
    title: 'Infopulse Univer',
    link: ENGLISH_PRIME_SCHOOL_URL,
    city: 'Kyiv',
    year: '2020',
    description: ''
  }
},
{
  id: 3,
  img: frontendGoItCertificate,
  info: {
    title: 'Go IT',
    link: GO_IT_URL,
    city: 'Kyiv',
    year: '2020',
    description: ''
  }
},
{
  id: 4,
  img: fullstackGoItCertificate,
  info: {
    title: 'Go IT',
    link: '',
    city: 'Kyiv',
    year: '2020',
    description: ''
  }
},
{
  id: 5,
  img: designAlpacaSchoolCertificate,
  info: {
    title: 'Alpaca Shool',
    link: ALPACA_SCHOOL_URL,
    year: '2023',
    description: ''
  }
},]


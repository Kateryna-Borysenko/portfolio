import frontendInfopulseCertificate from "../images/certificates/infopulse.jpg";
import englishPrimeCertificate from "../images/certificates/english.jpeg";
import fullstackGoItCertificate from "../images/certificates/fullstack.jpeg";
import designAlpacaSchoolCertificate from "../images/certificates/design.png";

import { INFOPULSE_UNIVER_URL, ENGLISH_PRIME_SCHOOL_URL, GO_IT_URL, ALPACA_SCHOOL_URL } from '../utils/urls'


export const certificates = [
  {
    id: 1,
    imgSrc: frontendInfopulseCertificate,
    alt: 'Frontend Developer Certificate',
    width: '736px',
    title: 'Infopulse Univer',
    url: INFOPULSE_UNIVER_URL,
    city: 'Kyiv',
    year: '2020',
    duration: '3 months'
  },
  {
    id: 2,
    imgSrc: englishPrimeCertificate,
    alt: 'English  Certificate',
    width: '736px',
    title: 'English Prime School',
    url: ENGLISH_PRIME_SCHOOL_URL,
    city: 'Kyiv',
    year: '2021',
    duration: '18 months'
  },
  {
    id: 3,
    imgSrc: fullstackGoItCertificate,
    alt: 'Fullstack Developer Certificate',
    width: '520px',
    title: 'Go It Bootcamp',
    url: GO_IT_URL,
    city: 'Kyiv',
    year: '2022',
    duration: '8 months'

  },
  {
    id: 4,
    imgSrc: designAlpacaSchoolCertificate,
    alt: 'Designer Certificate',
    width: '736px',
    title: 'Alpaca School',
    url: ALPACA_SCHOOL_URL,
    city: 'Kyiv',
    year: '2023',
    duration: '1 week'
  },
]


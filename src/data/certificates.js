import frontendInfopulseCertificate from "../images/certificates/infopulse.jpg";
import englishPrimeCertificate from "../images/certificates/english.jpeg";
import fullstackGoItCertificate from "../images/certificates/fullstack.jpg";
import designAlpacaSchoolCertificate from "../images/certificates/design.png";

import frontendInfopulseCertificate_m from "../images/certificates/infopulse_m.jpg";
import englishPrimeCertificate_m from "../images/certificates/english_m.jpg";
import fullstackGoItCertificate_m from "../images/certificates/fullstack_m.jpg";
import designAlpacaSchoolCertificate_m from "../images/certificates/design_m.jpg";

import frontendInfopulseCertificate_s from "../images/certificates/infopulse_s.jpg";
import englishPrimeCertificate_s from "../images/certificates/english_s.jpg";
import fullstackGoItCertificate_s from "../images/certificates/fullstack_s.jpg";
import designAlpacaSchoolCertificate_s from "../images/certificates/design_s.jpg";

import { INFOPULSE_UNIVER_URL, ENGLISH_PRIME_SCHOOL_URL, GO_IT_URL, ALPACA_SCHOOL_URL } from '../utils/urls'


export const certificates = [
  {
    id: 1,
    imgSrc: frontendInfopulseCertificate,
    imgSrc_m: frontendInfopulseCertificate_m,
    imgSrc_s: frontendInfopulseCertificate_s,
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
    imgSrc_m: englishPrimeCertificate_m,
    imgSrc_s: englishPrimeCertificate_s,
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
    imgSrc_m: fullstackGoItCertificate_m,
    imgSrc_s: fullstackGoItCertificate_s,
    alt: 'Fullstack Developer Certificate',
    width: '746px',
    title: 'Go It Bootcamp',
    url: GO_IT_URL,
    city: 'Kyiv',
    year: '2022',
    duration: '8 months'

  },
  {
    id: 4,
    imgSrc: designAlpacaSchoolCertificate,
    imgSrc_m: designAlpacaSchoolCertificate_m,
    imgSrc_s: designAlpacaSchoolCertificate_s,
    alt: 'Designer Certificate',
    width: '736px',
    title: 'Alpaca School',
    url: ALPACA_SCHOOL_URL,
    city: 'Kyiv',
    year: '2023',
    duration: '1 week'
  },
]


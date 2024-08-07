import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BookOpenIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'GordonDePuy.com',
  description: 'Gordon De Puy Online Portfolio',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Gordon De Puy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a dedicated <strong className="text-stone-100">Remote QA Automation Engineer </strong>, seeking to bring my
        nearly 17 years of software testing experience to a new full time role.
      </p>
    </>
  ),
  //TODO: fix resume download
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have an enthusiasm, commitment and excitement for software quality assurance and through my
   diverse career have honed a unique automation focused testing skillset through leveraging both successes
   and failures that validates functionality, reliability, performance, and scalability of applications 
   across devices and platforms. The output of this effort results in end-user ready software that exceeds requirements
   and is delivered on schedule.`,
  aboutItems: [
    {label: 'Location', text: 'Charleston, SC', Icon: MapIcon},
    {label: 'Experience', text: '17 years', Icon: CalendarIcon},
    {label: 'Education', text: 'Salisbury University', Icon: AcademicCapIcon},
    {label: 'Degree', text: 'Bachelor Of Science', Icon: TrophyIcon},
    {label: 'Study', text: 'Major: Business Admin |  Minor: Info Science', Icon: BookOpenIcon},
    {label: 'Interests', text: 'Software Test Automation, Fatherhood, Fishing, Guitars', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Scripting',
    skills: [
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Shell Script',
        level: 6,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Bash',
        level: 8,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Playwright',
        level: 10,
      },
      {
        name: 'Cypress',
        level: 8,
      },
      {
        name: 'Selenium',
        level: 8,
      },
      {
        name: 'Penetration Testing | Tenable.io',
        level: 7,
      },
      {
        name: 'Performance Testing | Lighthouse CI, Saucelabs',
        level: 7,
      },
      {
        name: 'Load Testing | NeoLoad | flood.io | Element | Saucelabs',
        level: 7,
      },
      {
        name: 'Docker Containerization',
        level: 8,
      },
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Gitlab CI/CD',
        level: 7,
      },
      {
        name: 'AWS',
        level: 5,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - April 2024',
    location: 'ArrayLive',
    title: 'LEAD QA TEST AUTOMATION ENGINEER | REMOTE',
    content: (
      <p>
        <ul>
          <li>
            &#x2022; Architected entirely new test framework spanning functional, api,db, web socket and UI tests
            spanning entire react.js application
          </li>
          <li>
            &#x2022; Deployed rapid scale load testing with hundreds servers replicating thousands of unique sessions
            per minute.
          </li>
          <li>
            &#x2022; Docker containerized and Kubernetes hosted with scheduled daily and merge triggered pipeline
            execution of tests
          </li>
          <li>&#x2022; Took test coverage from 0 to 90%</li>
          <li>&#x2022; PagerDuty/On-call rotation to allow for 24/7 high severity issues</li>
          <li>&#x2022; Onboarded and lead internal/external testing resources</li>
          <li>&#x2022; Hosted bi-weekly user acceptance testing</li>
          <li>&#x2022; Integrated gitlab pipeline with slack to quickly address test failures</li>
          <li>&#x2022; Saucelabs test orchestrations, real device testing, test coverage, performance testing</li>
          <li>&#x2022; Penetration testing that gained SOC2 compliance</li>
          <li>&#x2022; Executed live load testing events utilizing 1500-2000 IOS devices</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'October 2019 - July 2020',
    location: 'Bracari',
    title: 'LEAD TEST AUTOMATION ENGINEER | REMOTE',
    content: (
      <p>
        <ul>
          <li>
            &#x2022; Oversaw and improved entirety of testing process through development of procedural and strategy
            documentation
          </li>
          <li>&#x2022; Responsible for increasing growth of automated test suite by over 80%</li>
          <li>&#x2022; Integrated test automation into ci/cd pipeline</li>
          <li>&#x2022; Mentored and trained junior testers</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'November 2015 - October 2019',
    location: 'Boeing',
    title: 'SOFTWARE DEVELOPER IN TEST ( SDET ) III | REMOTE',
    content: (
      <p>
        <ul>
          <li>
            &#x2022; Architected complex test automation suites across diverse projects via implementation of bash
            scripts, selenium web driver and UFT
          </li>
          <li>
            &#x2022; Engineered new approach to bypass limitations to test lab machines that had previously prevented
            automated test deployment across a majority of projects
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: 'May 2011 - November 2015',
    location: 'SPARC LLC | BOOZ ALLEN',
    title: 'QUALITY ASSURANCE ENGINEER III | 75% REMOTE',
    content: (
      <p>
        <ul>
          <li>&#x2022; Designed and implemented Selenium Test Automation Framework in Java</li>
          <li>&#x2022; Documented and maintained detailed business requirements and acceptance criteria</li>
          <li>&#x2022; 508 complicance with JAWS screen reader</li>
          <li>
            &#x2022; Developed and maintained API testing suite in SoapUI for e-commerce and and order shipping platform
            for USPS contract
          </li>
          <li>
            &#x2022; Held Top Security Clearance to architect functional test automation suite in Selnium webdriver for
            federal contract with VA
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: 'November 2009 - May 2011',
    location: 'PEOPLEMATTER | SNAG',
    title: 'November 2009 - May 2011',
    content: (
      <p>
        <ul>
          <li>&#x2022; Hired at origin of startup to architect entire quality assurance process</li>
          <li>&#x2022; Responsible for budgeting, onboarding, managing team and entirety of testing processes</li>
          <li>&#x2022; Managed additional offshore resources based in Argentina</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'February 2007 - November 2009',
    location: 'MOUNTAIRE',
    title: 'February 2007 - November 2009',
    content: (
      <p>
        <ul>
          <li>&#x2022; Developed linux shell scripts according to the evolving needs of the product sales team</li>
          <li>&#x2022; 24/7 database support management call rotation</li>
          <li>&#x2022; Wrote extensive sql to develop oracle forms and reports</li>
        </ul>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Brandon Kirk',
      text: `Gordon is an incredible QA Automation engineer. He knows his stuff and works quickly and efficiently. He is a constant advocate for good process and building good software that solve user needs. Plus, he's an incredible co-worker. He brings a lightness to any team discussion and his contributions are always positive. Any software development team would benefit from Gordon's presence. `,
      // image:
    },
    {
      name: 'Matthew Cass',
      text: 'He was my quality leader and a great tester, really smart, great attitude.',
      // image:
    },
    {
      name: 'Adam Kelso',
      text: 'Gordon is an excellent engineer and amazing guy.',
      // image:
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `Lets talk.`,
  items: [
    {
      type: ContactType.Email,
      text: 'gordon.r.depuy@gmail.com',
      href: `mailto:gordon.r.depuy@gmail.com`,
    },
    {
      type: ContactType.Location,
      text: 'Charleston, SC',
      href: 'https://www.google.com/maps/place/Charleston,+SC/@32.8231072,-80.1563331,11z/data=!3m1!4b1!4m6!3m5!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!8m2!3d32.7833163!4d-79.9319664!16zL20vMGdrZ3A?entry=ttu',
    },
  ],
};

/**
 * Social items
 */
// export const socialLinks: Social[] = [];

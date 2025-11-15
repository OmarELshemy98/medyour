// content/en/index.ts

export const homePageContentEn = {
  seo: {
    title: 'Medyour | Integrated Healthcare Network & Smart Medical Solutions',
    description:
      'Get comprehensive healthcare with Medyour. A vast medical network including top doctors, labs, and pharmacies. Download the app now for easier and faster medical service.',
  },
  hero: {
    // Desktop & Mobile Versions
    desktop: {
      backgroundImage: '/images/background-img.png',
      heading: {
        prefix: 'Your Gateway to a better',
        highlight: 'Healthcare',
      },
      paragraph: [
        'experience – Without Limits',
        'Empowering Well-being Through',
        'Innovative Care.',
      ],
      appImage: '/images/home-images/mob.png'
    },
    mobile: {
      backgroundColor: '#001117',
      heading: [
        'Your Gateway to a better Healthcare',
        'experience – Without Limits'
      ],
      paragraph: [
        'Empowering Well-being Through',
        'Innovative Care.'
      ]
      // No appImage on mobile
    }
  },
  welcome: {
    title: 'Welcome to Medyour',
    paragraphs: [
      `Medyour is a cutting-edge platform providing an innovative approach to healthcare. Our integrated ecosystem delivers a seamless, flexible experience, connecting you with a wide network of top-tier healthcare providers across all specialties—without long waits or complex procedures.`,
      `Whether you are an individual seeking premium care for yourself and your family, or an organization aiming for efficient, comprehensive healthcare management for your employees, Medyour combines usability, quality, and security in one platform.`,
    ],
    mission: 'Our mission is to deliver accessible, high-quality healthcare for everyone, without barriers'
  },
  offers: {
    sectionTitle: 'What Medyour Offers',
    cards: [
      {
        icon: '/images/icon-doctors.svg',
        title: ['Comprehensive', 'Healthcare', 'Coverage'],
        description:
          'Flexible and integrated plans for individuals and organizations, designed to simplify healthcare management while ensuring top-quality care without restrictions or limitations.',
        svgTheme: 'green'
      },
      {
        icon: '/images/icon-insurance.svg',
        title: ['Instant and', 'Reliable', 'Care'],
        description:
          'Access healthcare instantly, anytime and anywhere you need, with a seamless, trustworthy experience always at your fingertips.',
        svgTheme: 'yellow'
      },
      {
        icon: '/images/icon-easy.svg',
        title: ['Full Management', 'via Mobile', 'App'],
        description:
          'Manage your healthcare journey effortlessly through our intuitive mobile app: book your medical services, pay securely, and track your results—all from your phone, any time.',
        svgTheme: 'blue'
      },
      {
        icon: '/images/icon-transparency.svg',
        title: ['Transparent', 'Costs'],
        description:
          'Complete clarity on service costs—what you need is what you pay, with no hidden fees.',
        svgTheme: 'pink'
      },
      {
        icon: '/images/icon-equality.svg',
        title: ['Healthcare for', 'Everyone Without', 'Restrictions'],
        description:
          'No age limits, no exclusion for chronic or pre-existing conditions—everyone is welcome to benefit our healthcare services easily and without constraints',
        svgTheme: 'orange'
      },
      {
        icon: '/images/icon-network.svg',
        title: ['Extensive', 'Network', 'of Providers'],
        description:
          'Over 2,500 accredited healthcare providers across Egypt, including hospitals, clinics, specialists, labs, and pharmacies, all accessible through one integrated platform ensuring quality and reliability.',
        svgTheme: 'green-reversed'
      }
    ]
  },
  vision: {
    title: 'Our Vision',
    intro:
      'At Medyour, we aim to provide exceptional, accessible healthcare for everyone. We achieve this by adhering to the following core values:',
    values: [
      {
        name: 'Integrity',
        description: 'We uphold the highest standards of transparency and honesty in all our interactions.',
        backgroundImage: '/images/home-images/Integrity.png',
        style: 'rounded-tl-[70px] rounded-br-[70px]',
        overlay: true
      },
      {
        name: 'Innovation',
        description: 'We leverage cutting-edge technology to continuously improve the healthcare experience',
        backgroundImage: '/images/home-images/innovation.png',
        style: 'rounded-tr-[70px] rounded-bl-[70px]',
        overlay: false
      },
      {
        name: 'Easy Access to Services',
        description: 'We remove all barriers preventing people from obtaining healthcare, making the process faster and simpler than ever.',
        backgroundImage: '/images/home-images/accessibility.png',
        style: 'rounded-tl-[70px] rounded-br-[70px]',
        overlay: false
      },
      {
        name: 'Quality',
        description:
          'We guarantee the highest standards of safety and performance in every service we deliver, because your health is always our priority.',
        backgroundImage: '/images/home-images/quality.png',
        style: 'rounded-tr-[90px] rounded-[10px] rounded-bl-[70px]',
        overlay: true
      }
    ]
  },
  // Testimonials could be uncommented and completed for production, as in the original HTML mockup:
  /*
  testimonials: {
    title: 'Client Testimonials',
    items: [
      {
        text: `Medyour has completely changed how I manage my family's healthcare. The mobile app is intuitive, and the support is exceptional. I can't imagine going back to the old way!`,
        name: 'Fatima R.'
      },
      {
        text: `As a corporate partner, I value Medyour's commitment to comprehensive coverage for my employees. Their proactive support and efficient systems truly set them apart in the healthcare industry`,
        name: 'Omar T.',
        jobTitle: 'Corporate Executive'
      },
      {
        text: `Medyour's approach to healthcare is refreshing. The transparency and ease of access have made a world of difference in my family's healthcare journey`,
        name: 'Layla A.'
      },
    ]
  },
  */
  // No end CTA section here, as per design focus on these main sections.
};
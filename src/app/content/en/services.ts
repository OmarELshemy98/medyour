// content/en/services.ts

export const servicesContentEn = {
    seo: {
        title: 'Our Services | Medyour',
        description:
            'Medyour offers a fully digital ecosystem that redefines the healthcare experience, combining ease, security, and precision. Discover integrated coverage, an advanced provider network, cloud platforms, and smart digital solutions for individuals and organizations.',
    },

    hero: {
        breadcrumb: 'Home / Our Services',
        title: 'Our Services',
        subtitle:
            'Medyour offers a fully digital ecosystem that redefines the healthcare experience, combining ease, security, and precision.',
        image: '/images/background-img.png',
    },

    sections: [
        {
            key: 'mobile-app',
            title: 'Mobile App',
            image: '/images/services-images/mobile-app.png',
            description: [
                "The Medyour mobile app delivers a truly integrated digital healthcare experience that puts everything you need right at your fingertips. With its smooth and intuitive design, you can subscribe directly to the program without complicated administrative steps and access all the medical services you need with ease.",
                "The app allows you to locate the nearest in-network healthcare providers based on your geographic location and offers secure electronic payment options for both annual subscriptions and medical service co-pays.",
                "You can also receive your lab and test results instantly through the app—no need to visit the provider in person. Medyour ensures a complete, connected experience that lets you monitor your healthcare services and medical records anytime and anywhere, with continuous support accompanying you throughout your entire healthcare journey.",
            ],
            // No app store links in content object, but could add URLs here if desired
        },

        {
            key: 'healthcare-coverage',
            title: 'Healthcare Coverage',
            image: '/images/services-images/healthcare-coverage.png',
            description: [
                "Medyour offers flexible and comprehensive healthcare programs designed for both individuals and organizations. With affordable annual subscriptions at transparent, competitive prices, these plans are accessible to all categories and come with no hidden fees.",
                "Subscribers can add all family members and parents without any limits, and there are no restrictions on the number of visits or covered services.",
                "Medyour focuses on providing full, high-quality medical coverage that ensures comfort, convenience, and confidence in every visit—making healthcare simpler and more accessible for everyone."
            ]
        },

        {
            key: 'provider-network',
            title: 'Healthcare Provider Network',
            image: '/images/services-images/provider-network.png',
            description: [
                "A vast network of over 2500 healthcare providers ensures access to the highest standard of care.",
                "This network includes hospitals, clinics, specialists, and wellness centers, all committed to promoting health and well-being."
            ]
        },

        {
            key: 'digital-platforms',
            title: 'Digital Platforms',
            image: null,
            description: [
                "Our integrated and synchronized digital platforms provide direct, real-time communication among all parties within the healthcare system. The platforms allow organizations to manage their employees’ subscriptions, monitor service usage, and analyze health data easily and accurately.",
                "At the same time, they enable healthcare providers to manage their operations, communicate directly and effectively with subscribers, and track their medical services in real time.",
                "This seamless integration is further enhanced through a direct connection with the mobile app, which keeps all information constantly updated and synchronized across all parties, making the healthcare experience easier, faster, and more efficient, while saving time and effort without unnecessary administrative procedures.",
                "All platforms rely on advanced cloud encryption technologies that protect medical files and ensure the privacy of personal data, while providing secure, easy access whenever needed.",
            ]
        },
    ],

    cta: {
        title: 'Are You Ready to Transition to Smart Healthcare?',
        buttonText: 'Contact Our Sales Team',
        buttonLink: '/contact',
    }
}
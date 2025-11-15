// content/en/contact.ts

export const contactContentEn = {
    seo: {
        title: 'Contact Medyour Healthcare | Dedicated 24/7 Support',
        description: 'Contact the Medyour smart healthcare team for any inquiry or support. We are here to serve you around the clock.',
    },
    hero: {
        breadcrumb: 'Home / Contact Us',
        title: 'Get in Touch',
        subtitle: "We're here to help! For inquiries, please fill out our contact form or reach us directly",
        image: '/images/background-img.png', 
    },
    formIntro: {
        header: 'Get in Touch',
        text: "We're here to help! For inquiries, please fill out our contact form or reach us directly"
    },
    form: {
        title: 'Contact Form',
        fields: [
            {
                name: 'phone',
                label: 'Phone:',
                type: 'tel',
                placeholder: 'Add Your Mobile',
                required: true
            },
            {
                name: 'email',
                label: 'Email:',
                type: 'email',
                placeholder: 'Add Your Email',
                required: true
            },
            {
                name: 'location',
                label: 'Location:',
                type: 'text',
                placeholder: 'Add Your Address',
                required: false
            },
            {
                name: 'message',
                label: 'Message:',
                type: 'textarea',
                placeholder: 'Type your message',
                required: true
            },
        ],
        buttonText: 'Send'
    },
    contactInfo: {
        address: '123 Tahrir Street, Dokki, Giza, Egypt',
        phone: '+20 100 123 4567',
        email: 'info@medyour.com',
        workingHours: 'Sunday to Thursday: 9:00 AM - 5:00 PM (Emergency Support 24/7)',
    },
    socialSection: {
        heading: 'Follow Us:',
        text: 'Stay connected with us: for the latest updates and community initiatives.',
        links: [
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/profile.php?id=61576602431934',
                iconClass: 'fab fa-facebook-f'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/medyouregypt/',
                iconClass: 'fab fa-instagram'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/company/medyouregypt',
                iconClass: 'fab fa-linkedin-in'
            },
            {
                name: 'Twitter',
                url: 'https://x.com/medyouregypt',
                iconClass: 'fab fa-twitter'
            }
        ]
    },
    lineSeparator: {
        style: 'dashed',
        color: '#3A6070',
        opacity: 0.4
    }
}
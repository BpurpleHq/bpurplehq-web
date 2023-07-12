import learnIcon from '../public/learnIcon.svg';
import handIcon from '../public/handIcon.svg';
import peopleIcon from '../public/peopleIcon.svg';
import heroImage from '../public/heroImage.png';
import businessImage from '../public/businessImage.png';
import testimonial1 from '../public/testimonial1.png';
import testimonial2 from '../public/testimonial2.png';
import cooperateIcon from '../public/cooperateIcon.svg';
import individualIcon from '../public/individualIcon.svg';
import GISIMAGE from '../public/GISImage.png';
import virtualImage from '../public/virtualImage.png';
import productImage from '../public/productImage.png';
import dataImage from '../public/dataImage.png';
import blockchainImage from '../public/blockchainImage.png';
import aiImage from '../public/aiImage.png';
import respectIcon from '../public/respectIcon.svg';
import compassionIcon from '../public/compassionIcon.svg';
import accountabilityIcon from '../public/accountabilityIcon.svg';
import dotIcon from '../public/dotIcon.svg';

export const menuLinks = [
    {
        id: 1,
        title: 'Courses',
        url: '/courses',
    },
    {
        id: 2,
        title: 'Community',
        url: '#',
    },
    {
        id: 3,
        title: 'About Us',
        url: '/about',
    },
];
export const footerLinks = [
    {
    title: "Quick Links",
    links: [
      { title: "About Us", url: "/" },
      { title: "FAQs", url: "/" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Communities", url: "#" },
      { title: "Courses", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy", url: "/" },
      { title: "Terms", url: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "+234 8069394886", url: "/" },
      { title: "info@bpurplehq.org", url: "/" },
      { title: "", url: "/" },
    ],
  },
];

export const metrics = [
    {
        id: 1,
        figure: '100+',
        title: 'Trained',
        image: learnIcon,
    },
    {
        id: 2,
        figure: '20+',
        title: 'Instructors', 
        image: handIcon,
    },
    {
        id: 3,
        figure: '500+',
        title: 'Satisfied Customers',
        image: peopleIcon,
    }
];

export const products = [
    {
        id: 1,
        image: heroImage,
        title: 'Expert Mentors',
        description: 'Our trainings offerings are delivered by industry experts, offering clients training courses that help them improve their technical skills. Training in subjects like software development, data science, GIS, products.',
    },
    {
        id: 2,
        image: businessImage,
        title: 'Business Process',
        description: 'The main goal of this field is to assits clients in making improvements to their business process through consulting service. Project administration, quality control and process improvement are few examples of this.',
    },
    {
        id: 3,
        image: heroImage,
        title: 'Emerging Technology',
        description: 'Technology is changing the way we live, our focus is delivering training and consulting services in relation to cutting-edge technologies like blockchain, web3, machine learning, and artificial intelligence.',
    }
];

export const testimonials = [
    {
        id: 1,
        review: '“Special thanks to the organizers of the bpurple bootcamp, I decided to join the virtual assistant path in the free tech bootcamp organized by bpurpleHQ as a newbie, it was so engaging and while at it, I did not only learn the skill, I was subjected to learning, leadership and collaboration skills.” ',
        image: testimonial1,
        name: 'Olabisi Balogun',
        title: 'Intern-bpurpleHQ',
    },
    {
        id: 2,
        review: '“Overall, I highly recommend the  bpurple Data Analysis class to anyone seeking to enhance their skills in this field. The quality of instruction, comprehensive curriculum, and hands-on learning approach make it a worthwhile investment. I feel more confident in my ability to collect, analyze, and interpret data, thanks to the team for providing such a valuable learning experience.” ',
        image: testimonial2,
        name: 'Victor Dibia',
        title: '',
    },
];

export const cta = [
    {
        id: 1,
        title: 'Individual',
        content: 'Accelerate your dream of becoming a world-class software developer or designer.',
        image: individualIcon,
        buttonTitle: 'Browse Courses',
    },
    {
        id: 2,
        title: 'Corperate',
        content: 'Professional Staff training courses applicable to any corporate organization.',
        image: cooperateIcon,
        buttonTitle: 'Learn More',
    },
];

export const learningPath = [
    {
        id: 1,
        image: GISIMAGE,
        title: 'School of GIS',
        description: 'GIS is an effective instrument for collecting, processing, and displaying spatial and geographic data. Numerous sectors, including urban planning, environmental management, and resource allocation, can use this technology. Organizations can use GIS to visualize data in maps, graphs, and tables, analyze patterns, and uncover connections that might not be obvious through conventional data analysis.',
        duration: '5-7 weeks',
        url: '/gis-school',
    },
    {
        id: 2,
        image: virtualImage,
        title: 'Virtual Assistant',
        description: 'Virtual Assistance: In the current digital era, virtual assistance is a distant administrative and personal support service that is gaining popularity. Businesses can outsource administrative duties like scheduling, data entry, email management, and social media management with the aid of virtual aides. This enables company owners to concentrate on core tasks, increase productivity, and lower operating expenses.',
        duration: '3-4 weeks',
        url: '/virtual-assistant-school',
    },
    {
        id: 3,
        image: productImage,
        title: 'School of Product',
        description: 'Product design is a highly valuable skill that involves the creation of new products or the improvement of existing ones. It encompasses a wide range of activities, including research, conceptualization, prototyping, testing, and refinement. The ability to collaborate with cross-functional teams, communicate effectively, and understand customer needs are also essential components of product design.',
        duration: '6-8 weeks',
        url: '/product-school',
    },
    {
        id: 4,
        image: dataImage,
        title: 'Data School',
        description: 'Data analysis is the process of looking at and interpreting data to gain understanding and make wise choices. To spot patterns, trends, and correlations, one must collect, clean, organize, and visualize data. For organizations to make choices based on facts, spot areas for improvement, and maximize performance, data analysis is a crucial tool.',
        duration: '10-12 weeks',
        url: '/data-school',
    },
    {
        id: 5,
        image: blockchainImage,
        title: 'School of Blockchain',
        description: 'COMING SOON',
        duration: 'N/A',
        url: '/blockchain-school',
    },
    {
        id: 6,
        image: aiImage,
        title: 'School of AI',
        description: 'COMING SOON',
        duration: 'N/A',
        url: '/ai-school',
    },
];

export const values = [
    {
        id: 1,
        title: 'Compassion',
        description: 'Supportive, Empathy, Appreciative, Care about mental health.',
        image: compassionIcon,
    },
    {
        id: 2,
        title: 'Respect',
        description: 'Self- awareness, Kindness, Equality, Zero bullying, Zero discrimination.',
        image: respectIcon,
    },
    {
        id: 3,
        title: 'Accountability',
        description: 'Take ownership, Growth mindset, Role model and Leader.',
        image: accountabilityIcon,
    },
];

export const services1 = [
    {
        id: 1,
        title: 'School of Tech',
        description: 'Our training programs are designed to help you or your team become proficient in the latest software and hardware technologies. Our courses are available in a variety of formats, including in-person, online, and customized on-site training.',
        image: dotIcon,
    },
    {
        id: 2,
        title: 'Talent As a Service(TaaS)',
        description: 'Providing a flexible and scalable approach to accessing top talent precisely when it is needed. Exploring the benefits, insights, and curated talent network that will transform talent acquisition and management strategies.',
        image: dotIcon,
    },
    {
        id: 3,
        title: 'Tech Product Development',
        description: 'bpurple can see through the development of products for her clients, from the ideation stage to full implementation while sticking to the business requirements and deployment timeline',
        image: dotIcon,
    },
    {
        id: 4,
        title: 'Consulting',
        description: 'Need help implementing new technology solutions or optimizing your existing ones? Our consulting services can provide you with the expert guidance you need to make informed decisions and achieve your goals.',
        image: dotIcon,
    },
]

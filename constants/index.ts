import learnIcon from '../public/learnIcon.svg';
import handIcon from '../public/handIcon.svg';
import peopleIcon from '../public/peopleIcon.svg';
import courseImage from '../public/courseImage.png';
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
import durationIcon from '../public/hourglassIcon.svg';
import levelIcon from '../public/levelIcon.svg';
import prerequisiteIcon from '../public/prerequisiteIcon.svg';
import projectIcon from '../public/projectIcon.svg';
import pinIcon from '../public/pinIcon.svg';
import scheduleIcon from '../public/scheduleIcon.svg';
import locationIcon from '../public/locationIcon.svg';
import ageIcon from '../public/ageIcon.svg';
import paymentPlanIcon from '../public/paymentPlanIcon.svg';
import linkIcon from '../public/linkIcon.svg';
import laptopIcon from '../public/laptopIcon.svg';
import questionIcon from '../public/questionIcon.svg';
import mailIcon from '../public/mailIcon.svg';
import whatsappIcon from '../public/whatsappIcon.svg';
import venueIcon from '../public/venueIcon.svg';
import commimage from "../public/comImage1.png"

export const menuLinks = [
    {
        id: 3,
        title: 'Home',
        url: '/',
    },
    {
        id: 3,
        title: 'About Us',
        url: '/about',
    },
    {
        id: 1,
        title: 'Courses',
        url: '/courses',
    },
    {
        id: 2,
        title: 'Community',
        url: '/community',
    },

    {
        id: 3,
        title: 'Corporate',
        url: '/community/workforce',
    },
   
    {
        id: 3,
        title: 'FAQ',
        url: '/faq',
    },

    
];
export const footerLinks = [
    {
    title: "Quick Links",
    links: [
      { title: "About Us", url: "/about" },
      { title: "FAQs", url: "#" },
    ],
  },
  {
    title: "Products",
    links: [


      { title: "Communities", url: "/community" },
      { title: "Courses", url: "/courses" },

    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy", url: "#" },
      { title: "Terms", url: "#" },
    ],
  },
  {
    title: "Contact",
    links: [


      { title: "+234 806 939 4886", url: "#" },
      { title: "info@bpurplehq.org", url: "#" },
      { title: "Send a Message", url: "#" },

    ],
  },
];

export const metrics = [
    {
        id: 1,
        figure: '300+',
        title: 'Trained',
        image: learnIcon,
    },
    {
        id: 2,
        figure: '20+',
        title: 'Seasoned Instructors', 
        image: handIcon,
    },
    {
        id: 3,
        figure: '100+',
        title: 'Satisfied Customers',
        image: peopleIcon,
    }
];

export const products = [
    {
        id: 1,
        image: dataImage,
        title: 'Expert Mentors',
        description: 'Our trainings offerings are delivered by industry experts, offering our clients training courses that help them improve their technical skills. Training in subjects like software development, data science, GIS, products etc.',
    },
    {
        id: 2,
        image: businessImage,
        title: 'Collaborative Learning',
        description: 'The main goal of every business is to make improvements to their business process, we offer this through consulting services, project management and administration, quality control and process improvement.',
    },
    {
        id: 3,
        image: aiImage,
        title: 'Emerging Technology',
        description: 'Technology is changing the way we live, our focus is to deliver training and consulting services in relation to cutting-edge technologies like blockchain, web3, machine learning, and artificial intelligence.',
    }
];

export const testimonials = [
    {
        id: 1,
        review: '“My sincere thanks to Bpurple Technologies for the excellent Data Analysis training. Despite lacking a tech background, I made a bold decision to switch careers and pursue Data Analysis. The sessions in Excel, PowerBI and SQL were clear and effective, enabling me to confidently handle data manipulation, processing, and presentation. Thanks, Bpurple, for a job well done, and for helping me embark on my tech journey successfully.” ',
        image: testimonial1,
        name: 'Ifeyinwa Victory',
        title: 'Data Analyst - Intern',
    },
    {
        id: 2,
        review: '“The data analysis course at Bpurple was a huge success, providing me with essential skills to handle complex datasets and extract valuable insights in real-time. Now, I feel confident and excited to apply my newfound abilities as a data analyst in my professional career..” ',
        image: testimonial2,
        name: 'Ifeanyi Nathaniel',
        title: 'Data Analyst',
    },

    // {
    //     id: 3,
    //     review: '“Attending the Data Analysis course at BPurpleHQ has been a truly enriching experience. The course effectively blends theory with practical exercises, and the instructors excel at simplifying complex concepts, ensuring every student is well-engaged throughout. The incorporation of real-world examples equips learners with valuable, job-ready skills. I highly recommend this course to anyone seeking a solid grasp on data analysis.” ',
    //     image: testimonial2,
    //     name: 'Joel Aikoroje',
    //     title: 'Data Analyst',
    // },

];

export const cta = [
    {
        id: 1,
        title: 'Individual',

        content: 'Let us be the partner in your journey into Tech, you can trust the process.',

        image: individualIcon,
        buttonTitle: 'Courses',
        url: '/courses',
    },
    {
        id: 2,
        title: 'Corporate/Business',
        content: 'Professional Staff training courses applicable to any corporate organization.',
        image: cooperateIcon,
        buttonTitle: 'Learn More',
        url:'/community/workforce',
    },
];

export const learningPath = [
    {
        id: 1,
        image: GISIMAGE,
        title: 'School of GIS',
        description: 'GIS is an effective instrument for collecting, processing, and displaying spatial and geographic data. Numerous sectors, including urban planning, environmental management, and resource allocation, can use this technology. Organizations can use GIS to visualize data in maps, graphs, and tables, analyze patterns, and uncover connections that might not be obvious through conventional data analysis.',
        duration: '6-8 weeks',
        url: '/courses/course-gis',
    },
    {
        id: 2,
        image: virtualImage,
        title: 'Virtual Assistant',
        description: 'Virtual Assistance: In the current digital era, virtual assistance is a distant administrative and personal support service that is gaining popularity. Businesses can outsource administrative duties like scheduling, data entry, email management, and social media management with the aid of virtual aides. This enables company owners to concentrate on core tasks, increase productivity, and lower operating expenses.',
        duration: '4-6 weeks',
        url: '/courses/course-virtual-assistant',
    },
    {
        id: 3,
        image: productImage,
        title: 'School of Product',
        description: 'Product management is a highly valuable skill that involves the creation of new products or the improvement of existing ones. It encompasses a wide range of activities, including research, conceptualization, prototyping, testing, and refinement. The ability to collaborate with cross-functional teams, communicate effectively, and understand customer needs are also essential components of product design.',
        duration: '10-12 weeks',
        url: '/courses/course-product',
    },
    {
        id: 4,
        image: dataImage,
        title: 'Data School',
        description: 'Data analysis is the process of looking at and interpreting data to gain understanding and make wise choices. To spot patterns, trends, and correlations, one must collect, clean, organize, and visualize data. For organizations to make choices based on facts, spot areas for improvement, and maximize performance, data analysis is a crucial tool.',
        duration: '10-12 weeks',
        url: '/courses/course-data', 
    },
    {
        id: 5,
        image: blockchainImage,
        title: 'School of Blockchain',
        description: 'COMING SOON',
        duration: 'N/A',
        url: '#', //replace # with '/blockchain-school',
    },
    {
        id: 6,
        image: aiImage,
        title: 'School of AI',
        description: 'COMING SOON',
        duration: 'N/A',
        url: '#', //replace # with '/ai-school',
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
];

export const courseDetails = [
    {
        id: 1,
        content: '--',
        title: 'Duration',
        image: durationIcon,
    },
    {
        id: 2,
        content: 'Beginner',
        title: 'Level', 
        image: levelIcon,
    },
    {
        id: 3,
        content: 'Laptop',
        title: 'Prerequisites',
        image: prerequisiteIcon,
    },
    {
        id: 4,
        content: '3 project',
        title: 'Projects',
        image: projectIcon,
    },
];

export const generalInfo = [
    {
        id: 1,
        image: locationIcon,
        title: 'Are the programs onsite or on-line?',
        content: 'Our programs are 100% remote',
    },
    {
        id: 2,
        image: pinIcon,
        title: 'Where are we located?',
        content: 'We are fully REMOTE',
    },
    {
        id: 3,
        image: learnIcon,
        title: 'Do I have access to mentors?',
        content: 'Yes, every learner is assigned a mentor, who monitors and track growth',
    },
    {
        id: 1,
        image: scheduleIcon,
        title: 'Do I have access to community?',
        content: 'All individuals who registers for our trainings have access to our large tech community',
    },
];

export const studentProfile = [
    {
        id: 1,
        image: laptopIcon,
        title: 'Do i need a laptop?',
        content: 'A functional Laptop is an essential tool for any of our programs',
    },
    {
        id: 2,
        image: ageIcon,
        title: 'What is the minimum age to apply?',
        content: 'We accept individual of any age as long as they ca read, write and understand concepts',
    },
    {
        id: 3,
        image: paymentPlanIcon,
        title: 'What is the Training duration?',
        content: 'Training duration is solely dependent on the path.',
    },
    {
        id: 1,
        image: linkIcon,
        title: 'What is the class schedule?',
        content: 'Class schedule is also dependent on the course and mentors schedule',
    },
];

export const questions = [
    {
        id: 1,
        image: questionIcon,
        title: 'Visit FAQ page',
        content: 'Most of your pressing questions, already been answered.',
        url: '/faq',
    },
    {
        id: 2,
        image: mailIcon,
        title: 'Send an email',
        content: 'Expect a response from one of our staff within 2 to 3 hours',
        url: '#',
    },
    {
        id: 3,
        image: whatsappIcon,
        title: 'Hello! Whatapp',
        content: 'You can connect with us if you are already on Telegram.',
        url: '#',
    },
    {
        id: 4,
        image: venueIcon,
        title: 'We are Social',
        content: '@bpurplehq on all social media platform',
        url: '/',
    },
];

export const communityLink = [
    {
        id: 1,
        title: 'Career',
        content: 'Break into tech like a PRO, start your journey with us.',
        url: '/courses',
    },
    {
        id: 2,
        title: 'Workforce',
        content: 'Equip you workforce with the right skill.',
        url: '/community/workforce',
    },
];

export const workforceCard = [
    {
        id: 1,
        title: 'Continuous Learning and Development:',
        content: 'Prioritize ongoing learning and professional development initiatives. Encourage employees to upskill and reskill through training programs, certifications, and workshops.  ',
    },
    {
        id: 2,
        title: 'Embrace Diversity and Inclusion',
        content: 'Foster a culture that values and embraces diversity in all its forms, including gender, ethnicity, age, and background. Actively seek diverse talent, create inclusive policies. ',
    },
    {
        id: 3,
        title: 'Stay Current with Emerging Technologies',
        content: 'Assess the skills required for the future and provide training and resources to equip employees with the necessary knowledge. ',
    },
]

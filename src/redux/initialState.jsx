import { faSuitcase,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import idris from '../img/idris.jpg' 
import eltun from '../img/Eltun3.jpg' 
import aziz from '../img/Aziz.jpg' 
import Zakir from '../img/Zakir.jpg' 
import UcDavis from '../img/UcDavis.png'
import JavaScript_Basic from '../img/JavaScript(Basic).png' 
import React_Basic from '../img/React(Basic).png' 
import JavaScript_Intermediate from '../img/JavaScript(Intermediate).png' 
import Problem_Solving_Basic from '../img/Problem Solving(Basic).png' 
import SQL_Basic from '../img/SQL Basic.png' 
import mec from '../img/mec.png'
import mec2 from '../img/mec2.png'
import way from '../img/way.png'
import celtVip from '../img/celtvip.png'
import prints from '../img/prints.png'
import celtfairs from '../img/celfairs.png'
import nevent from '../img/nevent.png'
import alistud from '../img/alistud.png'
import celtit from '../img/celtit.png'






export const initialState = {
  workingHistory: {
    id: 1,
    title: "Working",
    icon: faSuitcase,
    works: [
      {
        id: 1,
        company: "Front-End Engineer",
        field : 'Pasha Bank OJSC , Baku, Azerbaijan',
        date: "06/2024 - 09/2024",
        mainText:
          "Contributed to the development and optimization of the bank's web applications, focusing on responsive design and performance improvements. Worked closely with cross-functional teams to deliver user-friendly features and maintain code quality."
      },
      {
        id: 2,
        company: "Front-End Engineer",
        field : 'Timesoft LLC , Baku, Azerbaijan',
        date: "02/2024 - 06/2024",
        mainText:
          "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with designers and backend developers to create seamless user experiences, ensuring compatibility across multiple devices and browsers."
      },
      {
        id: 3,
        company: "Software Development Instructor",
        field : 'CELT IT Colleges , Baku, Azerbaijan',
        date: "09/2022 - present",
        mainText:
          "Provide hands-on training in front-end development to students, focusing on real-world projects. Tailored learning experiences to individual students' needs, helping them master technologies like HTML, CSS, and JavaScript"
      },
      {
        id: 4,
        company: "Front-End Developer",
        field : 'CELT GO, Baku, Azerbaijan',
        date: "12/2022 - 12/2023",
        mainText:
          "Led the front-end development of a major educational platform, implementing responsive designs and enhancing user interfaces. Worked with a team to deliver a seamless and engaging user experience for online learners."
      },
      {
        id: 5,
        company: "Project Manager",
        field : 'GPTS2023, Baku, Azerbaijan',
        date: "08/2022 - 03/2023",
        mainText:
          "I organized a pilot project aimed at young individuals who aspire to become front-end developers. The program was completely free, and we had the privilege of welcoming 25 participants to our project.",
      },
      {
        id: 6,
        company: "Helpdesk intern",
        field : 'Crucel LLC, Baku, Azerbaijan',
        date: "11/2020 - 02/2021",
        mainText:
          "Gained practical experience in IT support, assisting with troubleshooting, software installations, and hardware maintenance. This internship provided me with a solid foundation in problem-solving and IT infrastructure management.",
      },
    ],
  },
  educationHistory: {
    id: 2,
    title: "Education",
    icon: faGraduationCap,
    works: [
      {
        id: 1,
        company: "Eötvös Lorand University",
        field : 'Master in Computer Science',
        date: "2024y. - present",
        mainText:
          "Currently pursuing a Master's in Computer Science at Eötvös Lorand University, focusing on advanced topics in software development, algorithms, and system design. The program equips me with a deep understanding of computer science principles and practical experience in developing cutting-edge applications using modern technologies.",
      },
      {
        id: 2,
        company: "CODE Academy",
        field : 'Software Development',
        date: "2022y.",
        mainText:
          "The academy provided me with comprehensive training to become a software developer. During my time there, I gained proficiency in various skills, including C# (.NET).",
      },
      {
        id: 3,
        company: "SABAH Groups",
        field : 'Bachelor in Computer Engineering (In English)',
        date: "2021y. - 2024y.",
        mainText:
          "During my first year of undergraduate studies, I learned about the benefits of the SABAH program and its advantages, as well as the opportunity to study in English. As a result, I began preparing for the SABAH exams and ultimately qualified to study in SABAH Groups.",
      },
      {
        id: 4,
        company: "Azerbaijan State Oil and Industry University",
        field : 'Bachelor in Computer Engineering (In Russian)',
        date: "2020y. - 2021y.",
        mainText:
          "During my first year of undergraduate studies, I learned about the benefits of the SABAH program and its advantages, as well as the opportunity to study in English."
      },
    ],
  },
  clients : [
    { id:1,
      img : 'https://images01.nicepage.com/1148e4ac845eb115d3ab4a4c/9656f0fe8ff15e40aa2593ee/eb88b1f3-d129-4a9f-b847-19d6be12a59a.png'
    },
    { id:2,
      img : 'https://html.tavonline.co/mat/default/images/client-02.jpg'
    },
    { id:3,
      img : 'https://html.tavonline.co/mat/default/images/client-03.jpg'
    },
    {
      id:4,
      img : 'https://html.tavonline.co/mat/default/images/client-04.jpg'
    }
    ],
  testimonals : [
    {
      id:1,
      fullName : 'Idris Aziyev',
      job: "Freelancer",
      comment: "Great developer! he finished our work wonderfully and just in time. thanks for everything.",
      image: idris
    },
    {
      id:2,
      fullName : 'Eltun Qasımov',
      job: "Back-End Developer",
      comment: "You are such a good teammate. You always go above and beyond to help others and contribute to the team's success.",
      image: eltun
    },
    {
      id:3,
      fullName : 'Zakir Abdurrahimov',
      job: "General Director",
      comment: "A highly skilled and dedicated web development instructor.",
      image: Zakir
    },
    {
      id:4,
      fullName : 'Aziz Haziyev',
      job: "Web-Designer",
      comment: "Awesome person! Providing guidance on responsive design, ensuring that the website is optimized for all screen sizes and devices.",
      image: aziz
    }
  ],
  works : [
    {
      id : 1,
      photos : [mec2 , mec, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Mountain Expeditions Club',
      comment : 'An expedition club template',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
      link : 'https://meclub.netlify.app'
    },
    {
      id : 2,
      photos : [way, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Way Az',
      comment : 'A rent a car template',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
      link : 'https://wayaz.netlify.app'
    },
    {
      id : 3,
      photos : [celtVip, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Celt Vip',
      comment : 'A crm system.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Full-Stack',
      link : 'https://celt.vip/'
    },
    {
      id : 4,
      photos : [prints, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Printly Solutions',
      comment : 'A print company template.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Full-Stack',
      link: 'https://printlysolutions.netlify.app'
    },
    {
      id : 5,
      photos : [celtfairs, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Celt Fairs',
      comment : 'An educational fair website.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Full-Stack',
      link : 'https://celtfairs.com'
    },
    {
      id : 6,
      photos : [nevent, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Next Event',
      comment : 'An event template.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
      link: 'https://nexteventcom.netlify.app'
    },
    {
      id : 7,
      photos : [alistud, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Ali Studio',
      comment : 'A kids studio crm.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
      link: 'https://alistudiox.com'
    },
    {
      id : 8,
      photos : [celtit, 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Celt IT',
      comment : 'A course website.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
      link: 'https://alistudiox.com'
    },
  ],
  certifications: [
    {
      id : 1,
      photos : [JavaScript_Basic],
      title : 'JavaScript(Basic)',
      comment : 'fd435c027f48'
    },
    {
      id : 2,
      photos : [JavaScript_Intermediate],
      title : 'JavaScript(Intermediate)',
      comment : 'e10811d64525'
    },
    {
      id : 3,
      photos : [React_Basic],
      title : 'React(Basic)',
      comment : '9e9af4b1460d'
    },
    {
      id : 4,
      photos : [Problem_Solving_Basic],
      title : 'Problem Solving(Basic)',
      comment : '1fa3705f9c83'
    },
    {
      id : 5,
      photos : [SQL_Basic],
      title : 'SQL(Basic)',
      comment : 'a64c9afb33f7'
    },
    {
      id : 6,
      photos : [UcDavis],
      title : 'SQL for Data Science',
      comment : 'rjyua9wplu8s'
    }
  ]
};
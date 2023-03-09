import { faSuitcase,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import idris from '../img/idris.jpg' 
import eltun from '../img/Eltun3.jpg' 
import aziz from '../img/Aziz.jpg' 
import Zakir from '../img/Zakir.jpg' 
import JavaScript_Basic from '../img/JavaScript(Basic).png' 
import React_Basic from '../img/React(Basic).png' 
import JavaScript_Intermediate from '../img/JavaScript(Intermediate).png' 
import Problem_Solving_Basic from '../img/Problem Solving(Basic).png' 
import SQL_Basic from '../img/SQL Basic.png' 
import mec from '../img/mec.png'
import mec2 from '../img/mec2.png'

export const initialState = {
  workingHistory: {
    id: 1,
    title: "Working",
    icon: faSuitcase,
    works: [
      {
        id: 1,
        company: "Software Development Instructor",
        field : 'CELT IT Colleges , Baku, Azerbaijan',
        date: "09/2022 - present",
        mainText:
          "As a software development instructor, I provide individualized instruction to each student, using interactive learning techniques to promote a more engaging and effective learning experience."
      },
      {
        id: 2,
        company: "Project Manager",
        field : 'GPTS2023, Baku, Azerbaijan',
        date: "08/2022 - 03/2023",
        mainText:
          "I organized a pilot project aimed at young individuals who aspire to become front-end developers. The program was completely free, and we had the privilege of welcoming 25 participants to our project.",
      },
      {
        id: 3,
        company: "Helpdesk intern",
        field : 'Crucel LLC, Baku, Azerbaijan',
        date: "11/2020 - 02/2021",
        mainText:
          "My first internship was an awesome experience, where I was able to acquire a diverse range of skills related to Information Technology. I am grateful for the opportunity to have learned so much during my time there.",
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
        company: "CODE Academy",
        field : 'Software Development',
        date: "2022y.",
        mainText:
          "The academy provided me with comprehensive training to become a software developer. During my time there, I gained proficiency in various skills, including C# (.NET).",
      },
      {
        id: 2,
        company: "SABAH Groups",
        field : 'Computer Engineering (In English)',
        date: "2021y. - present",
        mainText:
          "During my first year of undergraduate studies, I learned about the benefits of the SABAH program and its advantages, as well as the opportunity to study in English. As a result, I began preparing for the SABAH exams and ultimately qualified to study in SABAH Groups.",
      },
      {
        id: 3,
        company: "Azerbaijan State Oil and Industry University",
        field : 'Computer Engineering (In Russian)',
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
      photos : ['https://html.tavonline.co/mat/default/images/works/work-09.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
    },
    {
      id : 3,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-01.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Back-End',
    },
    {
      id : 4,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Full-Stack',
    },
    {
      id : 5,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-02.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Front-End',
    },
    {
      id : 6,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Back-End',
    },
    {
      id : 7,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-05.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Back-End',
    },
    {
      id : 8,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-06.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'Full-Stack',
    },
    {
      id : 9,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-07.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'WebDesign',
    },
    {
      id : 10,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-07.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
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
  ]
};
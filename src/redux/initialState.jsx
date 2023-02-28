import { faSuitcase,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
export const initialState = {
  workingHistory: {
    id: 1,
    title: "Working",
    icon: faSuitcase,
    works: [
      {
        id: 1,
        position: "Art Director - Facebook Inc",
        date: "2010 - Present",
        mainText:
          "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      },
      {
        id: 2,
        position: "Senior Designer - Google",
        date: "2008 - 2010",
        mainText:
          "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      },
      {
        id: 3,
        position: "Junior Designer - Creative Shake",
        date: "2005 - 2008",
        mainText:
          "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
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
        position: "Abc University of Los Angeles",
        date: "2004 - 2009",
        mainText:
          "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      },
      {
        id: 2,
        position: "Drawing Course",
        date: "2003 - 2004",
        mainText:
          "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      },
      {
        id: 3,
        position: "Abc High School",
        date: "2000 - 2003",
        mainText:
          "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      },
    ],
  },
  clients : [
    { id:1,
      img : 'https://html.tavonline.co/mat/default/images/client-01.jpg'
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
      fullName : 'April M. Griffin',
      job: "Freelancer",
      comment: "Great designer! he finished our work wonderfully and just in time. thanks for everything.",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:2,
      fullName : 'Jack Garratt',
      job: "Founder",
      comment: "Our logo and business card design look great. Thanks Henry.",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:3,
      fullName : 'Larry M. Johnson',
      job: "CEO",
      comment: "Great designer! he finished our work wonderfully and just in time. thanks for everything.",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:4,
      fullName : 'Tony Stark',
      job: "Stark",
      comment: "Our logo and business card design look great. Thanks Henry",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:5,
      fullName : 'Jerry Show',
      job: "Accountant",
      comment: "Great designer! he finished our work wonderfully and just in time. thanks for everything.",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:6,
      fullName : 'Neil Armstrong',
      job: "Astronaut",
      comment: "Our logo and business card design look great. Thanks Henry",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    },
    {
      id:7,
      fullName : 'Neil Armstrong',
      job: "Astronaut",
      comment: "Our logo and business card design look great. Thanks Henry",
      image: "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
    }
  ],
  works : [
    {
      id : 1,
      photos : ['https://html.tavonline.co/mat/default/images/works/work-08.jpg', 'https://html.tavonline.co/mat/default/images/works/work-02.jpg' , 'https://html.tavonline.co/mat/default/images/works/work-03.jpg', 'https://html.tavonline.co/mat/default/images/works/work-04.jpg', 'https://html.tavonline.co/mat/default/images/works/work-05.jpg','https://html.tavonline.co/mat/default/images/works/work-06.jpg' ,'https://html.tavonline.co/mat/default/images/works/work-07.jpg','https://html.tavonline.co/mat/default/images/works/work-08.jpg'],
      title : 'Babel Admin',
      comment : 'An admin template design.',
      description : 'An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.An admin template design.',
      type : 'WebDesign',
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
    
  ]
};
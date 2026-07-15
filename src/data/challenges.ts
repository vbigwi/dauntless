export interface Challenge {
  number: string
  title: string
  tag: string
  points: string
  objective: string
  criteria: string[]
  videoId?: string
  videoPending?: boolean
  route: string
  routeLabel: string
}

export const challenges: Challenge[] = [
  {
    number: '01',
    title: 'Introduction & Elevator Pitch',
    tag: 'Meet The Team',
    points: '1,700 pts',
    objective: 'Introduce individual think tank members and align collective expectations.',
    criteria: [
      'Elevator pitch: who we are, where we’re from, our interests, a fun fact, and the value we bring.',
      'A joint team statement outlining our collective expectations for E-Lab.',
    ],
    videoId: 'VnPUO5P_3t0',
    route: '/team',
    routeLabel: 'Meet the team',
  },
  {
    number: '02',
    title: 'Discover Africa',
    tag: 'Cultural Insight',
    points: '1,800 pts',
    objective: 'Radical storytelling highlighting an underrated or misrepresented African community.',
    criteria: [
      'Media-rich storytelling that surfaces facts and dispels misconceptions.',
      'A 3-minute format with every member in a designated role.',
    ],
    videoPending: true,
    route: '/culture',
    routeLabel: 'Cultural insight',
  },
  {
    number: '03',
    title: 'Help-Lab: Community Engagement',
    tag: 'Community Action',
    points: '2,000 pts',
    objective: 'Direct local community engagement and social impact.',
    criteria: [
      'Participation in a local initiative approved by our facilitator.',
      'A reflective video on our contribution, skills leveraged, and long-term impact.',
    ],
    videoId: 'TCCFuQ-Ic60',
    route: '/community',
    routeLabel: 'Community action',
  },
  {
    number: '04',
    title: 'Project Development & Execution: Phase 1',
    tag: 'Project Space',
    points: 'Active Milestone',
    objective: 'Designing and prototyping a practical solution to a defined problem.',
    criteria: [
      'Research on target audiences and the Kigali–Port Sudan trade corridor.',
      'A draft model and workflow for BODA-PAY.',
    ],
    videoId: '48Y8I_JjC7I',
    route: '/project',
    routeLabel: 'Project space',
  },
  {
    number: '05',
    title: 'Project Development & Execution: Phase 2',
    tag: 'Project Space',
    points: 'Active Milestone',
    objective: 'Project deployment, live feedback collection, and refinement.',
    criteria: [
      'Testing the BODA-PAY prototype and collecting real feedback.',
      'Synthesizing results and finalizing the solution for final presentation.',
    ],
    videoId: 'OsCVgQxxCtE',
    route: '/project',
    routeLabel: 'Project space',
  },
  {
    number: '06',
    title: 'Digital Print & Web Design',
    tag: 'This Website',
    points: '5,000 pts',
    objective: 'A complete digital website representing our entire E-Lab journey.',
    criteria: [
      'Individual profiles, group milestones, and major project deliverables.',
      'Clean visual aesthetics, intuitive navigation, and a professional narrative — the site you’re on right now.',
    ],
    route: '/journey',
    routeLabel: 'Full journey',
  },
]

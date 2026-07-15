export interface TeamMember {
  name: string
  initials: string
  color: string
  photo?: string
  country: string
  role: string
}

export const team: TeamMember[] = [
  {
    name: 'Abdifatah Abdilahi Mohamed',
    initials: 'AA',
    color: 'var(--color-yellow)',
    photo: '/team/abdifatah.jpg',
    country: 'Somalia',
    role: 'The Always-Busy One',
  },
  {
    name: 'Davina Uwase',
    initials: 'DU',
    color: 'var(--color-blue)',
    photo: '/team/davina.jpg',
    country: 'Rwanda',
    role: 'The Always-Late One',
  },
  {
    name: 'Divine Gasana Kamikazi',
    initials: 'DG',
    color: 'var(--color-pink)',
    country: 'Rwanda',
    role: 'The Fun One',
  },
  {
    name: 'Mohammed Atif Ibrahim Abdelgader',
    initials: 'MA',
    color: 'var(--color-green)',
    photo: '/team/mohammed.jpg',
    country: 'Sudan',
    role: 'The Concerned One',
  },
  {
    name: 'Niyiduhumugisha Eden',
    initials: 'NE',
    color: 'var(--color-yellow)',
    photo: '/team/eden.jpg',
    country: 'Rwanda',
    role: 'The Leader',
  },
  {
    name: 'Valentin Shyaka Bigwi',
    initials: 'VB',
    color: 'var(--color-blue)',
    photo: '/team/valentin.jpg',
    country: 'Rwanda',
    role: 'The Geek',
  },
]

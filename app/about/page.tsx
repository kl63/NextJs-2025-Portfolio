import Image from 'next/image';

export default function About() {
  // Professional experience timeline data
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend development for enterprise applications. Implementing modern architecture and best practices.',
    },
    {
      period: '2020 - 2022',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple web applications. Worked with React, Node.js, and MongoDB.',
    },
    {
      period: '2018 - 2020',
      title: 'Junior Web Developer',
      company: 'Creative Agency',
      description: 'Created responsive websites for clients across various industries. Specialized in frontend development.',
    },
  ];

  // Education timeline data
  const education = [
    {
      period: '2014 - 2018',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Graduated with honors. Specialized in web development and algorithms.',
    },
    {
      period: '2019',
      degree: 'Full-Stack Web Development Certification',
      institution: 'Tech Academy',
      description: 'Intensive 6-month bootcamp covering modern web technologies.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">About Me</h1>
      
      {/* Personal Bio Section */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile Photo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I'm a passionate full-stack developer with over 5 years of experience building web applications.
            My journey in software development began during college, where I discovered my love for creating
            digital solutions that solve real-world problems.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            My expertise lies in frontend development with React and Next.js, creating responsive and
            accessible user interfaces. I'm also proficient in backend technologies like Node.js,
            Express, and various database systems.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me hiking in nature, reading about new technologies,
            or contributing to open-source projects. I'm always eager to learn new skills and stay
            updated with the latest trends in web development.
          </p>
        </div>
      </section>
      
      {/* Professional Experience */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.period}</span>
              </div>
              <div className="w-full md:w-3/4 border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
              </div>
              <div className="w-full md:w-3/4 border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Skills & Technologies */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js',
            'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
            'Redux', 'GraphQL', 'REST APIs', 'Tailwind CSS',
            'Git & GitHub', 'Docker', 'AWS', 'CI/CD',
            'Jest & Testing', 'Responsive Design', 'Accessibility', 'Performance Optimization',
          ].map((skill) => (
            <div key={skill} className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-md text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

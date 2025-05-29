import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span></h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Full-Stack Developer</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-md transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile Photo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {[
            { name: 'JavaScript', icon: '📝' },
            { name: 'TypeScript', icon: '🔷' },
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'CSS/Tailwind', icon: '🎨' },
            { name: 'Git', icon: '📊' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' },
            { name: 'UI/UX Design', icon: '🎯' },
          ].map((skill) => (
            <div key={skill.name} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-all">
              <div className="text-2xl mb-2">{skill.icon}</div>
              <div className="font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce platform with payment processing and inventory management.',
              tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'
            },
            {
              title: 'Social Media Dashboard',
              description: 'Analytics dashboard for social media management with real-time data visualization.',
              tech: ['Next.js', 'Chart.js', 'Firebase', 'TailwindCSS'],
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
            },
            {
              title: 'Fitness Tracking App',
              description: 'Mobile-first web application for tracking workouts and nutrition with progress analytics.',
              tech: ['React Native', 'Redux', 'GraphQL', 'MongoDB'],
              image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
            },
          ].map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-md transition-colors inline-block"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </div>
  );
}

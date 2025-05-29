import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  // Project data
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment processing, inventory management, and admin dashboard. Features include user authentication, product search, filtering, shopping cart, and order tracking.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 'social-dashboard',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization. Integrates with multiple social media APIs to provide insights on engagement, reach, and audience demographics.',
      tech: ['Next.js', 'Chart.js', 'Firebase', 'TailwindCSS', 'Social APIs'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      demoUrl: 'https://demo-dashboard.example.com',
      githubUrl: 'https://github.com/username/social-dashboard',
      featured: true
    },
    {
      id: 'fitness-app',
      title: 'Fitness Tracking App',
      description: 'Mobile-first web application for tracking workouts and nutrition with progress analytics. Users can create custom workout plans, log exercises, track nutrition, and view progress over time.',
      tech: ['React Native', 'Redux', 'GraphQL', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      demoUrl: 'https://demo-fitness.example.com',
      githubUrl: 'https://github.com/username/fitness-tracker',
      featured: true
    },
    {
      id: 'weather-app',
      title: 'Weather Forecast App',
      description: 'Real-time weather application providing current conditions and 7-day forecasts for locations worldwide. Features include location detection, saved locations, and weather alerts.',
      tech: ['JavaScript', 'React', 'OpenWeatherMap API', 'CSS Grid'],
      image: 'https://images.unsplash.com/photo-1532178910-7815046b732d',
      demoUrl: 'https://demo-weather.example.com',
      githubUrl: 'https://github.com/username/weather-app',
      featured: false
    },
    {
      id: 'task-manager',
      title: 'Task Management System',
      description: 'Collaborative task management system with team workspaces, task assignment, progress tracking, and deadline notifications. Includes calendar integration and reporting tools.',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
      demoUrl: 'https://demo-tasks.example.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: false
    },
    {
      id: 'portfolio-site',
      title: 'Personal Portfolio',
      description: 'Modern portfolio website built with Next.js and TailwindCSS. Features responsive design, dark mode, and content management system for easy updates.',
      tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'Netlify'],
      image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6',
      demoUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My Projects</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        Here's a collection of my recent work, including web applications, mobile apps, and design projects. 
        Each project demonstrates different skills and technologies.
      </p>

      {/* Filter buttons could be added here */}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              {project.featured && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
            <div className="p-5 flex-grow">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>
            <div className="p-5 pt-0 flex justify-between">
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:underline font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact CTA Section */}
      <div className="mt-20 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors inline-block"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

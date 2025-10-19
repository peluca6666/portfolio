import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <AnimatedReveal direction="right">
          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-10 shadow-xl hover:bg-black/85
            hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">
            
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer</h3>
                <p className="text-cyan-400 font-medium text-lg">Linear.app • Feb 2023 - Present</p>
              </div>

              <ul className="list-disc list-inside text-white font-medium text-lg leading-relaxed">
                <li>Developed internal dashboards and features using <strong>React</strong> and <strong>TailwindCSS</strong>, integrating APIs with <strong>Node.js</strong> and <strong>Express</strong>.</li>
                <li>Participated in code reviews, component refactoring, and agile sprints, resolving bugs and adjusting workflows based on QA and product feedback.</li>
                <li>Implemented unit tests, data validations, and functional documentation.</li>
                <li>Built internal modules such as user management with roles, notification flows, and reporting pages, improving product efficiency and consistency.</li>
              </ul>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal direction="left">
          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-10 shadow-xl hover:bg-black/85
            hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden mt-10">
            
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer (Internship)</h3>
                <p className="text-cyan-400 font-medium text-lg">Litoral Software • Jun 2022 - Jan 2023</p>
              </div>

              <ul className="list-disc list-inside text-white font-medium text-lg leading-relaxed">
                <li>Developed a shift management application using <strong>React</strong>, <strong>Next.js</strong>, <strong>Express</strong>, <strong>Prisma</strong>, and <strong>TailwindCSS</strong>, automating manual client processes.</li>
                <li>Implemented authentication with <strong>JWT</strong> and automatic notifications; participated in defining and documenting the REST API.</li>
                <li>Collaborated on UI/UX design and data flow adjustments to improve usability and efficiency.</li>
                <li>Wrote unit tests and data validations to ensure correct functionality and prevent errors.</li>
              </ul>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default Experience;

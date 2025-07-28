import { FaGithub, FaRocket } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  demo,
  tags = [],
  isReversed = false,
}) {
  return (
    <FadeInSection>
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        } items-center py-5 px-10 rounded-full shadow-lg border-x-3 max-w-5xl w-full gap-6`}
      >
        <FadeInSection>
          <img
            src={image}
            alt={title}
            className='w-full md:w-150 rounded-lg object-cover'
          />
        </FadeInSection>

        <div className='flex flex-col items-start gap-4 text-white'>
          <FadeInSection>
            <h2 className='text-4xl font-bold'>{title}</h2>
          </FadeInSection>
          <FadeInSection>
            <div className='flex gap-2'>
              {github && (
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 text-3xl rounded-full border-1 transition hover:bg-gray-400/50 hover:text-black'
                >
                  <FaGithub />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 text-3xl rounded-full border-1 transition hover:bg-green-400/50 hover:text-green-500'
                >
                  <FaRocket />
                </a>
              )}
            </div>
          </FadeInSection>
          <FadeInSection>
            <p className='text-base text-left'>{description}</p>
          </FadeInSection>
          <FadeInSection>
            <div className='flex flex-wrap gap-2 mt-2'>
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-1 border-y-2 px-3 py-1 rounded-full text-lg'
                >
                  {tag.icon}
                  {tag.label}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </FadeInSection>
  );
}

import { projectsList } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SplitArticle from "../ui/SplitArticle";
import YouTubeVideo from "../ui/YouTubeVideo";
import { section, wrap } from "../ui/styles";

/** The projects in full, alternating image and text sides. */
export default function ProjectList() {
  return (
    <section className={section}>
      <div className={`${wrap} grid gap-20 lg:gap-28`}>
        {projectsList.map((project, i) => (
          <div key={project.slug} className="grid gap-10">
            <SplitArticle
              id={project.slug}
              kicker={project.kicker}
              heading={project.heading}
              paragraphs={project.paragraphs}
              image={project.image}
              flip={i % 2 === 1}
              eager={i === 0}
            />
            {project.video && (
              <Reveal className="relative mx-auto aspect-video w-full max-w-[900px] overflow-hidden rounded-2xl shadow-xl shadow-preto/15">
                <YouTubeVideo {...project.video} />
              </Reveal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

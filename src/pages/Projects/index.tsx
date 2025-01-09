import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import ProjectSlide from "../../components/ProjectSlide";
import { projects } from "../../utils/configs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#projects" className={"pages-sections"}>
      <PageTitle title={t("projects")} />
      <div className={"pages-container"}>
        <Swiper
          cssMode={false}
          navigation
          pagination
          mousewheel
          keyboard
          speed={1000}
          loop
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectSlide project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

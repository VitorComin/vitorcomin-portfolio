export interface IPageTitle {
  title: string;
}

export interface IProject {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  githubLink: string;
  firstProject: boolean;
  previewLink?: string;
}

export interface IProjectSlide {
  project: IProject;
}

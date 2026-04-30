import { ReactNode } from "react";

export interface IPageTitle {
  title: string;
}

export interface ICard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  githubLink?: string;
  previewLink?: string;
}

export interface ICardSlide {
  card: ICard;
}

export interface IPageContentTitles {
  title: string;
}

export interface ICompanyLink {
  href: string;
  children: ReactNode;
}

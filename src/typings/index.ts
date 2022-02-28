export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  urls: { label: string; url: string }[];
};

export type ProjectRaw = Omit<Project, 'imageUrl'> & {
  image_url: string;
};

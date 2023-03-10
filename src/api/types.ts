export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  preferedQualifications: string[];
  dateAdded: string;
}
export interface Degree {
  id: number;
  degree: string;
}

export type JobData = {
  skills: { label: string; value: string }[];
  missionTypes: { label: string; value: string }[];
  salaryUnits: { label: string; value: string }[];
};

export type JobOffer = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  type: string;
  start_date: Date;
  salary: number;
  salary_unit: string;
  password: string;
};

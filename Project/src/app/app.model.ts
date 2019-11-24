export interface Education {
  periodOfTime: {
    start: Date;
    end: Date;
  };
  studyPlace: string;
  faculty?: string;
  specialty?: string;
  qualification: string;
}

export interface WorkExperience {
  periodOfTime: {
    start: Date;
    end: Date;
  };
  job: string;
  scopeCompany: string;
  position: string;
  responsibility: string[];
}

export interface ResumeObject {
  photo: string;
  generalInformation: {
    name: string;
    date: Date;
    accommodation: string;
    relocation: string;
  };
  achievements: string[];
  contacts: {
    phoneNumber: string;
    email: string;
    git: string;
    skype: string;
    linkedin: string;
  };
  education: Education[];
  additionalInformation: string;
  officialInformation: {
    careerObjective: string;
    desiredIncome: number;
  };
  skills: string[];
  workExperience: WorkExperience[];
}

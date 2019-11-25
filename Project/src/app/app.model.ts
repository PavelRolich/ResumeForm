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

export interface GeneralInformation {
  name: string;
  date: Date;
  accommodation: string;
  relocation: string;
}

export interface Contacts {
  phoneNumber: string;
  email: string;
  git: string;
  skype: string;
  linkedin: string;
}

export interface OfficialInformation {
  careerObjective: string;
  desiredIncome: number;
}

export interface ResumeObject {
  photo?: string;
  generalInformation?: GeneralInformation;
  achievements?: string[];
  contacts?: Contacts;
  education?: Education[];
  additionalInformation?: string;
  officialInformation?: OfficialInformation;
  skills?: string[];
  workExperience?: WorkExperience[];
}

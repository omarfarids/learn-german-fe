export type ContextProps = {
  isLoginForm: boolean;
  setIsLoginForm: (isLoginForm: boolean) => void;
  lessons: Lesson[];
  user: any;
  setUser: (logged: any) => void;
};

export type User = {
  firstName?: string;
  lastName?: string;
  isLoggedIn: boolean;
};

export type Lesson = {
  id: number;
  video: {
    link: string;
    description: string;
    learnPoints: string[];
  };
  vocabs: string[];
  additional: {
    img?: string;
  };
};

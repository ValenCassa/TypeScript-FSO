export interface ContentProps {
    name: string;
    exerciseCount: number;
}

export type Props = {
    props: ContentProps[]
}

export interface HeaderProps {
    name: string
}

interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

interface CourseWDescription extends CoursePartBase {
    description: string;
}
  
interface CourseNormalPart extends CourseWDescription {
    type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseWDescription{
    type: "submission";
    exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends CourseWDescription {
    type: "special";
    requirements: string[]
}
  
export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;


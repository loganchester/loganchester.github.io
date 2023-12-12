import { Experience, Skill } from "../../types/resume"

export const experience: Experience[] = [
    {
        company: "Bitformations Inc.",
        role: "Software Engineer (Full-Stack)",	
        duration: "September, 2023 - Present"
    },
    {
        company: "Bitformations Inc.",
        role: "Junior Software Engineer (Full-Stack)", 	
        duration: "September, 2021 - August, 2023"
    },
    {
        company: "Rosewood Therapy",
        role: "Website Designer",
        duration: "March, 2021 - June, 2021"
    },
    {
        company: "Kontrol Energy Corp.",
        role: "Junior Full-Stack Developer (Co-op)", 	
        duration: "September, 2020 - December, 2020"
    },
    {
        company: "Ontario Shores",
        role: "Developer & Business Analyst (Co-op)", 	
        duration: "September, 2018 - April, 2019"
    },
    {
        company: "University of Toronto",
        role: "Teaching Assistant",
        duration: "May, 2018 - August, 2018"
    },
]

export const skills: Skill[] = [
    {
        category: "Programming Languages",
        items: [
            "Python",
            "Java",
            "C#",
        ]
    },
    {
        category: "Web Development",
        items: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },
    {
        category: "Frameworks",
        items: [
            "React",
            "Angular",
            "ASP.NET",
            "Django",
            "Spring"
        ]
    },
    {
        category: "Database Management",
        items: [
            "PostgreSQL",
            "SQLite"
        ]
    },
    {
        category: "Software Development Tools",
        items: [
            "Git",
            "Gitlab",
            "Bitbucket",
            "Jira",
            "Asana",
            "Figma"
        ]
    },
    {
        category: "CI/CD Tools",
        items: [
            "Docker",
            "Jenkins",
            "AWS",
            "Traefik"
        ]
    }
]
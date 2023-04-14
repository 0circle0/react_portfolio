const getSkillsData = () => {
    const LanguageSkills = ["C#", "JavaScript", "HTML", "CSS", "Java", "C/C++"];
    const PrimarySkills = ["React JS/TS", ".Net", "Unity3D", "NodeJS", "MS SQL", "Docker", "MongoDB", "Github", "GitLab"];
    const SecondarySkills = ["Forklift", "Electric Pallet Jack", "Scissor Lift", "Order Picker"];

    return {
        LanguageSkills, 
        PrimarySkills, 
        SecondarySkills
    }
}

export default getSkillsData;
const getSkillsData = () => {
    const languageSkills = ["C#", "JavaScript", "HTML", "CSS", "Java", "C/C++"];
    const primarySkills = ["React JS/TS", ".Net", "Unity3D", "NodeJS", "MS SQL", "Docker", "MongoDB", "Github", "GitLab"];
    const secondarySkills = ["Forklift", "Electric Pallet Jack", "Scissor Lift", "Order Picker"];

    return [
        languageSkills,
        primarySkills,
        secondarySkills
    ]
}

export default getSkillsData;
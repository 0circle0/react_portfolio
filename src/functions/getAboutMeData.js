const getAboutMeData = () => {
    const aboutMe = {
        id: '2dfb4488-c2b4-4077-996c-023fbecc9f8e',
        data: [`As a self-taught programmer, I honed my skills using various resources, such as books, Stack Overflow, API Docs, and YouTube videos. 
            My first programming language was QBASIC, where I created simple programs and games like Nibbles and Gorillas. 
            At 16, I started creating games using Allegro and C/C++.
            
            In August 2013, I released my first application, Sprite Creator 3, using Java Swing. 
            This free-to-use and share application garnered over 300K downloads in 100+ countries. 
            I later recreated it using Unity3D, and the Unity3D version was made available for purchase on itch.io in 2020.
            
            My passion for Unity3D and NodeJS Server/Client games grew over time, and I started focusing on backend services around 2020. 
            I learned various concepts, including client-side prediction, server validation, input validation, credential validation, 
            session validation, account creation, email verification, state machines, rollback, and history, during the pandemic.`],
        centerData: false,
    };

    const languages = {
        id: '6f57ae0d-509d-41b0-bc2f-3d788aa5e95a',
        data: ["C#, JavaScript, HTML, CSS, SQL, Java, C/C++"],
        centerData: true,
    };
    const technologies = {
        id: '27971055-8232-4339-a801-4ba6cbae4223',
        data: ["Azure DevOps, Microsoft SQL Server, Visual Studio, Rider, Unity3D, MongoDB, NodeJS"],
        centerData: true,
    };
    const frameworks = {
        id: '258e954e-c5ef-48a1-ad48-2a82d5268c1f',
        data: [".Net, Blazor/Razor, Java Swing, React"],
        centerData: true,
    };

    return [
        aboutMe,
        languages,
        technologies,
        frameworks
    ];
}

export default getAboutMeData;
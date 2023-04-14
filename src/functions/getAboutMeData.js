const getAboutMeData = () => {
    const AboutMe = [`As a self-taught programmer, I honed my skills using various resources, such as books, Stack Overflow, API Docs, and YouTube videos. 
    My first programming language was QBASIC, where I created simple programs and games like Nibbles and Gorillas. 
    At 16, I started creating games using Allegro and C/C++.

    In August 2013, I released my first application, Sprite Creator 3, using Java Swing. 
    This free-to-use and share application garnered over 300K downloads in 100+ countries. 
    I later recreated it using Unity3D, and the Unity3D version was made available for purchase on itch.io in 2020.
    
    My passion for Unity3D and NodeJS Server/Client games grew over time, and I started focusing on backend services around 2020. 
    I learned various concepts, including client-side prediction, server validation, input validation, credential validation, 
    session validation, account creation, email verification, state machines, rollback, and history, during the pandemic.`];

    const Languages = ["C#, JavaScript, HTML, CSS, SQL, Java, C/C++"];
    const Technologies = ["Azure DevOps, Microsoft SQL Server, Visual Studio, Rider, Unity3D, MongoDB, NodeJS"];
    const Frameworks = [".Net, Blazor/Razor, Java Swing, React"];

    return {
        AboutMe,
        Languages,
        Technologies,
        Frameworks
    };
}

export default getAboutMeData;
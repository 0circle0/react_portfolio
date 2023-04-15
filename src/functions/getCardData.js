const getCardData = () => {
    const spriteCreatorCard = {
        title: "Sprite Creator 3",
        text: `Design your own animated sprite character with ease using our customizable generator. 
        Export your creations as sprite sheets for use in games and apps. 
        Choose from a variety of GUI themes to enhance your experience.`,
        link: "https://spritecreator.itch.io/spritecreator3",
        srcImage: "/img/background2.png"
    };

    const diceCard = {
        title: "Dice",
        text: `Roll customized dice in multiple colors with ease using our Physics-based platform. 
        Our platform is optimized for WebGL, desktop, and Android. 
        Enjoy a range of menu options for a personalized dice rolling experience.`,
        link: "https://spritecreator.itch.io/dice",
        srcImage: "/img/Dice.png"
    };

    const wordCard = {
        title: "Words",
        text: `Sharpen your typing skills with our Unity3D typing asset. 
        Type the words and destroy the cubes as you improve your speed and accuracy. 
        Keep track of your progress with ease.`,
        link: "https://spritecreator.itch.io/words",
        srcImage: "/img/Words.png"
    };

    const githubCard = {
        title: "Github",
        text: " Visit my github to see many projects using C/C++, C#, JavaScript, Server/Client with NodeJS, Unity3D Client/Server",
        link: "https://github.com/0circle0",
        srcImage: "/img/Git-Hub-Mark.png"
    };

    const blazorCard = {
        title: "Blazor",
        text: "This site was also created with Blazor 6 and Bootstrap 5 view the source code on Github",
        link: "https://github.com/0circle0/Portfolio",
        srcImage: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2019/04/BrandBlazor_big_with_border.png"
    };

    const reactCard = {
        title: "React",
        text: "This site was created with React 17 and Bootstrap 5 view the source code on Github",
        link: "https://github.com/0circle0/react_portfolio",
        srcImage: "/logo192.png"
    };

    return {
        reactCard,
        blazorCard,
        githubCard,
        wordCard,
        diceCard,
        spriteCreatorCard
    }
}

export default getCardData;
const getCardData = () => {
    const SpriteCreatorCard = {
        Title: "Sprite Creator 3",
        Text: `Design your own animated sprite character with ease using our customizable generator. 
        Export your creations as sprite sheets for use in games and apps. 
        Choose from a variety of GUI themes to enhance your experience.`,
        Link: "https://spritecreator.itch.io/spritecreator3",
        SrcImage: "/img/background2.png"
    };

    const DiceCard = {
        Title: "Dice",
        Text: `Roll customized dice in multiple colors with ease using our Physics-based platform. 
        Our platform is optimized for WebGL, desktop, and Android. 
        Enjoy a range of menu options for a personalized dice rolling experience.`,
        Link: "https://spritecreator.itch.io/dice",
        SrcImage: "/img/Dice.png"
    };

    const WordCard = {
        Title: "Words",
        Text: `Sharpen your typing skills with our Unity3D typing asset. 
        Type the words and destroy the cubes as you improve your speed and accuracy. 
        Keep track of your progress with ease.`,
        Link: "https://spritecreator.itch.io/words",
        SrcImage: "/img/Words.png"
    };

    const GithubCard = {
        Title: "Github",
        Text: " Visit my github to see many projects using C/C++, C#, JavaScript, Server/Client with NodeJS, Unity3D Client/Server",
        Link: "https://github.com/0circle0",
        SrcImage: "/img/Git-Hub-Mark.png"
    };

    const BlazorCard = {
        Title: "Blazor",
        Text: "This site was also created with Blazor 6 and Bootstrap 5 view the source code on Github",
        Link: "https://github.com/0circle0/Portfolio",
        SrcImage: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2019/04/BrandBlazor_big_with_border.png"
    };

    const ReactCard = {
        Title: "React",
        Text: "This site was created with React 17 and Bootstrap 5 view the source code on Github",
        Link: "https://github.com/0circle0/react_portfolio",
        SrcImage: "/logo192.png"
    };

    return {
        ReactCard, 
        BlazorCard, 
        GithubCard, 
        WordCard, 
        DiceCard,
        SpriteCreatorCard
    }
}

export default getCardData;
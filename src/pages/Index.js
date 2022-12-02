import Card from '../components/Card'
export default function Index() {
    let SpriteCreatorCard = {
        Title: "Sprite Creator 3",
        Text: "Customizable Animated Sprite Character Generator. Exports animated sprite sheets for use in games and apps. GUI Themes",
        Link: "https://spritecreator.itch.io/spritecreator3",
        SrcImage: "https://i.ibb.co/mGLwrNj/background2.png"
      }
      let DiceCard = {
        Title: "Dice",
        Text: "Roll Customizable dice with multiple colors and menu options using Physics for WebGL, Desktop, and Android",
        Link: "https://spritecreator.itch.io/dice",
        SrcImage: "https://i.ibb.co/ZmKSkQc/Dice.png"
      }
      let WordCard = {
        Title: "Words",
        Text: "Type the words. Destroy the cubes. Keep track of your typing speed. Unity3D typing asset.",
        Link: "https://spritecreator.itch.io/words",
        SrcImage: "https://i.ibb.co/HPJ35m5/Words.png"
      }
      let GithubCard = {
        Title: "Github",
        Text: "C/C++, C#, JavaScript, Server/Client with NodeJS, Unity3D Client/Server",
        Link: "https://github.com/0circle0",
        SrcImage: "https://i.ibb.co/Pmwbz0b/Git-Hub-Mark.png"
      }
    return (
        <>
            <title>Portfolio</title>
            <Card Details={SpriteCreatorCard} />
            <Card Details={DiceCard} />
            <Card Details={WordCard} />
            <Card Details={GithubCard} />
        </>
    );
}
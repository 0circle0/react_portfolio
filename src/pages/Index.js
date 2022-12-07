import Card from '../components/Card'
export default function Index() {
  document.title = "Portfolio";
  
  let SpriteCreatorCard = {
    Title: "Sprite Creator 3",
    Text: "Customizable Animated Sprite Character Generator. Exports animated sprite sheets for use in games and apps. GUI Themes",
    Link: "https://spritecreator.itch.io/spritecreator3",
    SrcImage: "/img/background2.png"
  }
  let DiceCard = {
    Title: "Dice",
    Text: "Roll Customizable dice with multiple colors and menu options using Physics for WebGL, Desktop, and Android",
    Link: "https://spritecreator.itch.io/dice",
    SrcImage: "/img/Dice.png"
  }
  let WordCard = {
    Title: "Words",
    Text: "Type the words. Destroy the cubes. Keep track of your typing speed. Unity3D typing asset.",
    Link: "https://spritecreator.itch.io/words",
    SrcImage: "/img/Words.png"
  }
  let GithubCard = {
    Title: "Github",
    Text: " Visit my github to see many projects using C/C++, C#, JavaScript, Server/Client with NodeJS, Unity3D Client/Server",
    Link: "https://github.com/0circle0",
    SrcImage: "/img/Git-Hub-Mark.png"
  }
  let BlazorCard = {
    Title: "Blazor",
    Text: "This site was also created with Blazor 6 and Bootstrap 5 view the source code on Github",
    Link: "https://github.com/0circle0/Portfolio",
    SrcImage: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2019/04/BrandBlazor_big_with_border.png"
  }
  let ReactCard = {
    Title: "React",
    Text: "This site was created with React 17 and Bootstrap 5 view the source code on Github",
    Link: "https://github.com/0circle0/react_portfolio",
    SrcImage: "/logo192.png"
  }
  return (
    <>
      <Card Title={SpriteCreatorCard.Title} Text={SpriteCreatorCard.Text} Link={SpriteCreatorCard.Link} SrcImage={SpriteCreatorCard.SrcImage} />
      <Card Title={DiceCard.Title} Text={DiceCard.Text} Link={DiceCard.Link} SrcImage={DiceCard.SrcImage} />
      <Card Title={WordCard.Title} Text={WordCard.Text} Link={WordCard.Link} SrcImage={WordCard.SrcImage} />
      <Card Title={GithubCard.Title} Text={GithubCard.Text} Link={GithubCard.Link} SrcImage={GithubCard.SrcImage} />
      <Card Title={ReactCard.Title} Text={ReactCard.Text} Link={ReactCard.Link} SrcImage={ReactCard.SrcImage} />
      <Card Title={BlazorCard.Title} Text={BlazorCard.Text} Link={BlazorCard.Link} SrcImage={BlazorCard.SrcImage} />
    </>
  );
}
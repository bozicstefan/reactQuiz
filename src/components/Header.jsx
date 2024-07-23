import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="img" />
      <h1>React Quiz</h1>
    </header>
  );
}

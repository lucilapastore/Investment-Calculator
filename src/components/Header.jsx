import icon from "../assets/investment_logo.jpg";

export default function Header() {
  return (
    <header id="header">
      <img src={icon} alt="Image showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

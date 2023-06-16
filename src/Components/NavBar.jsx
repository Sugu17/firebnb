function Logo() {
  return (
    <span className="logo">
      <svg className="logo__icon">
        <use href="/src/assets/icons/logo.svg#airbnb-circle"></use>
      </svg>
      <span className="logo__brand">firebnb</span>
    </span>
  );
}

export default function NavBar() {
  return (
    <div className="navbar">
      <Logo />
    </div>
  );
}

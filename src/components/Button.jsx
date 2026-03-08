export default function Button({ func, children, type = "submit", disabled }) {
  return (
    <button
      type={type}
      onClick={func}
      className="button"
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </button>
  );
}

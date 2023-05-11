export default function MyButton({ title, variant, color, size}) {
  const bgColor = (color) => {
    switch (color) {
      case "primary":
        return "#2962FF";
        break;
      case "secondary":
        return "#455A64";
        break;
      case "danger":
        return "#D32F2F";
        break;
      default:
        return "#E0E0E0";
        break;
    }
  };
  return <button className={`${variant} ${size}`} style={{background:bgColor(color)}} >{title ? title : "Default"}</button>;
}

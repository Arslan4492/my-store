import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const Icon = ({
  className,
  onClick,
  name,
  prefix,
  size,
  spin = false,
  rotation,
}) => {
  const iconLookup = {
    prefix: prefix,
    iconName: name || "zap",
  };
  const iconDefinition = findIconDefinition(iconLookup);
  return (
    <FontAwesomeIcon
      className={className}
      onClick={onClick}
      icon={iconDefinition}
      size={size}
      spin={spin}
      rotation={rotation}
    />
  );
};

export default Icon;

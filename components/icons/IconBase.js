// Code adapted from ReactIcons
// https://github.com/react-icons/react-icons/blob/master/packages/react-icons/src/iconBase.tsx

const IconBase = ({ attr, size = '0.9em', title, children, ...svgProps }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...attr}
      {...svgProps}
      version="1.1"
      viewBox="0 0 128 128"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};

export default IconBase;

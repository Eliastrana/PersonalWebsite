type Props = {
  children?: React.ReactNode,
  padding?: string, // Added padding prop
};

const Container = ({ children, padding = "px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-60" }: Props) => {
  // Use the padding prop directly in the className string
  const containerClass = `container mx-auto ${padding}`;
  return <div className={containerClass}>{children}</div>;
};

export default Container;

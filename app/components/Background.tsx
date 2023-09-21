type props = {
  children: React.ReactNode;
  styleName: "left" | "right" | "none";
};

const Background = ({ children, styleName }: props) => {
  // TODO: mobile styling
  const leftStyle = "md:clip-path-left bg-white bg-opacity-20 md:mt-20";
  const rightStyle = "md:clip-path-right bg-white bg-opacity-20 md:mt-20";
  const noneStyle = "";

  const styling = () => {
    switch (styleName) {
      case "left":
        return leftStyle;
      case "right":
        return rightStyle;
      case "none":
        return noneStyle;
    }
  };

  return (
    <div
      className={`md:px-4 md:py-8 m-3 md:m-0 rounded-2xl md:rounded-none ${styling()}`}
    >
      <div className="mx-auto lg:max-w-5xl">{children}</div>
    </div>
  );
};

export default Background;

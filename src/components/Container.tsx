import { type ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="relative h-162 w-182 bg-orange-50 overflow-y-scroll">{children}</div>;
}

export default Container;

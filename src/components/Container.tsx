import React, { type ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="border h-162 w-182 bg-white overflow-y-scroll">{children}</div>;
}

export default Container;

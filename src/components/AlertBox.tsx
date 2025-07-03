import type { Component, JSX } from "solid-js";

interface AlertBoxProps {
  children?: JSX.Element | JSX.Element[];
}

const AlertBox: Component<AlertBoxProps> = (props: AlertBoxProps) => {
  return (
    <div class="border-solid border-b border-t border-gray-600 rounded-sm my-4 -mx-8 py-4 backdrop-blur-lg bg-black">
      {props.children}
    </div>
  );
};

export default AlertBox;

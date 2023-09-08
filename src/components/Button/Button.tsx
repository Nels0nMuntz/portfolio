import { Button as SButton, ButtonProps } from "../ui/button";

interface Props extends ButtonProps {}

export default function Button(props: Props) {
  return (
    <SButton
      {...props}
      className="h-auto px-7 xm:px-8 py-4 xm:py-5 bg-dark-2 hover:bg-dark-1 rounded-2xl"
    />
  );
}

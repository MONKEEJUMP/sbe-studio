import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type Props = LinkButtonProps | ButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sbe-ink text-sbe-canvas hover:bg-sbe-copper hover:text-sbe-canvas transition-colors duration-200",
  secondary:
    "bg-transparent text-sbe-ink border border-sbe-ink hover:bg-sbe-ink hover:text-sbe-canvas transition-colors duration-200",
  ghost:
    "bg-transparent text-sbe-ink hover:bg-sbe-hairline transition-colors duration-150",
  link: "bg-transparent text-sbe-ink underline decoration-sbe-copper decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-150",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-caption",
  md: "px-6 py-2.5 text-body",
  lg: "px-7 py-3.5 text-body",
};

const iconSizes: Record<ButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 17,
};

export function Button(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    withArrow = false,
  } = props;

  const base =
    "group inline-flex items-center justify-center gap-3 rounded-sm font-sans font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = withArrow ? (
    <>
      <span>{children}</span>
      <ArrowRight
        size={iconSizes[size]}
        strokeWidth={2}
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
      />
    </>
  ) : (
    children
  );

  if ("href" in props && props.href) {
    const external = props.external;
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

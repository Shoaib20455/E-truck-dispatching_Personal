import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export default function AppLink({
  href,
  children,
  ...props
}: AppLinkProps) {
  if (isInternalRoute(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

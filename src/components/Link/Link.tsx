import { NavLink } from "@mantine/core";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

interface NavBarLinkProps {
  label: string;
  href: Url;
  icon: ReactNode;
}

export function NavBarLink({ label, href, icon }: NavBarLinkProps) {
  return <NavLink component={Link} label={label} href={href} icon={icon} />;
}

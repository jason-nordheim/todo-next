import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export type Props = {
  href: string;
  as: string;
  label: string;
};
export const NavLink = (props: Props) => {
  const { href, as, label } = props;
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <li className={active ? "active" : ""}>
      <Link href={href} as={as}>
        <a>{label}</a>
      </Link>
    </li>
  );
};

export default NavLink;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderAurora from "./HeaderAurora";

function HeaderLink({ children, href }) {
  const pathname = usePathname();
  return href == pathname ? (
    <li className="gray-link" style={{ animationDelay: `${Math.random() * 5 + 3}s` }}>
      <span>{children}</span>
      <span className="underline"></span>
    </li>
  ) : (
    <li className="link" style={{ animationDelay: "3s" }}>
      <Link href={href}>
        <span>{children}</span>
        <span className="underline"></span>
      </Link>
    </li>
  );
}

export default function Header({ isReverse = "false" }) {
  const links = (
    <nav>
      <ul className="header-list">
        <HeaderLink href="/">홈</HeaderLink>
        <HeaderLink href="/eft">정서중심 상담</HeaderLink>
        <HeaderLink href="/areas">상담분야</HeaderLink>
        <HeaderLink href="/psychotherapist">상담자 소개</HeaderLink>
        <HeaderLink href="/contact">문의</HeaderLink>
      </ul>
    </nav>
  );
  return (
    <>
      {isReverse ? (
        <header>
          <div className="header-container">
            {links}
            <div className="logo-name">
              <span className="logo-name-part">오로라</span>
              <span className="logo-name-part">심리상담</span>
              <span className="logo-name-part">연구소</span>
            </div>
          </div>
          <HeaderAurora />
        </header>
      ) : (
        <div className="header-reverse">{links}</div>
      )}
    </>
  );
}

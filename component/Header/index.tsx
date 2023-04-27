import Link from "next/link";
import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.container}>
    <ul className={style.list}>
        <li className={style.item}><Link href="/" legacyBehavior>
            <a>Home</a>
        </Link></li>
        <li className={style.item}><Link href="/blog" legacyBehavior>
            <a>Blog</a>
        </Link></li>
        <li className={style.item}><Link href="/users" legacyBehavior>
            <a>Users</a>
        </Link></li>
    </ul>
</header>
  )
}

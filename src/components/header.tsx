import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaGithub } from "react-icons/fa/index"

type Props = {
  isDark: boolean
}

type Paths = {
  id: number
  name: string
  to: string
}[]

let paths: Paths = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About",
    to: "/about",
  },
  {
    id: 3,
    name: "Blog",
    to: "/blog",
  },
]

const menuStagger = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
      delayChildren: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
      ease: "easeInOut",
    },
  },
}

const menuLinks = {
  hide: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

const Header = ({ isDark }: Props) => {
  const [menu, setMenu] = useState<boolean>(false)

  useEffect(() => {
    if (menu) {
      document.body.style.position = "fixed"
    } else document.body.style.position = ""
  }, [menu])

  return (
    <>
      <header
        className={
          isDark
            ? "w-full h-20 bg-primary md:h-32 xl:h-40"
            : "w-full h-20 md:h-32 bg-secondary xl:h-40"
        }
      >
        <nav className="flex justify-between items-center w-full h-full not-prose md:relative md:z-10">
          {isDark ? (
            <a href="/" className="cursor-pointer">
              <img
                src="/assets/Logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </a>
          ) : (
            <a href="/" className="cursor-pointer">
              <img
                src="/assets/Logo.svg"
                alt="Logo"
                width={150}
                height={40}
                className="w-[100px] md:w-auto h-auto"
              />
            </a>
          )}
          <div
            className={menu ? "menu-toggle on" : "menu-toggle"}
            onClick={() => setMenu(!menu)}
          >
            <div
              className={isDark ? "one bg-secondary" : "one bg-primary"}
            ></div>
            <div
              className={isDark ? "two bg-secondary" : "two bg-primary"}
            ></div>
            <div
              className={isDark ? "three bg-secondary" : "three bg-primary"}
            ></div>
          </div>
          <ul className="hidden md:flex w-auto h-auto items-center gap-10">
            {paths.map((path) => (
              <a key={path.id} href={path.to}>
                <li
                  className={
                    isDark
                      ? "text-secondary text-xl xl:text-2xl"
                      : "text-primary text-xl xl:text-2xl"
                  }
                >
                  {path.name}
                </li>
              </a>
            ))}
            <button
              className={
                isDark
                  ? "btn btn-outline btn-secondary text-secondary px-12"
                  : "btn btn-primary text-secondary px-12"
              }
            >
              Log In
            </button>
          </ul>
        </nav>
      </header>
      <motion.aside
        className={
          isDark
            ? "w-full h-screen fixed top-0 right-0 origin-top-right bg-primary text-secondary z-10 not-prose md:hidden"
            : "w-full h-screen fixed top-0 right-0 origin-top-right bg-secondary text-primary z-10 not-prose md:hidden"
        }
        initial={{ scale: 0 }}
        animate={menu ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
      >
        <AnimatePresence>
          {menu && (
            <motion.ul
              className=" flex flex-col justify-center items-center w-full h-full gap-10"
              variants={menuStagger}
              initial="hide"
              animate={menu ? "show" : "hide"}
              exit="exit"
            >
              {paths.map((path) => (
                <motion.a
                  key={path.id}
                  onClick={() => {
                    setTimeout(() => window.location.assign(path.to), 500)
                    setMenu(false)
                  }}
                  variants={menuLinks}
                  className="text-2xl font-manrope"
                >
                  <li>{path.name}</li>
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/rmill2016"
                initial={{ opacity: 0, y: -20 }}
                animate={
                  menu && { opacity: 1, y: 0, transition: { delay: 1.3 } }
                }
                exit={{ opacity: 0, y: -20 }}
              >
                <button className="btn btn-primary text-secondary px-6 py-4 items-center h-auto justify-center gap-4 border border-secondary">
                  View My Work
                  <FaGithub className="fill-secondary w-6 h-auto" />
                </button>
              </motion.a>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.aside>
    </>
  )
}

export default Header

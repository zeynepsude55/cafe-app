"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import * as React from 'react';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { useState } from "react";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();

  const handleLogin = () => {
    setUserInfo({ email, password });
    setIsLoggedIn(true);
    onLoginOpenChange();
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="">

      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ANA SAYFA</p>
          </NextLink>
        </NavbarBrand>


        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href || "/"}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}

        </ul>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <>
          {isLoggedIn ? (
            <div className="flex gap-4 items-center">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="data:image/png;base64,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"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{userInfo.email}</p>
                  </DropdownItem>
                  <DropdownItem key="password">
                    <p className="font-semibold">Password</p>
                    <p className="font-semibold">{userInfo.password}</p>
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={() => setIsLoggedIn(false)}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Button onPress={onLoginOpen} color="primary" className="w-full max-w-xs">
                Giriş Yap
              </Button>
            </div>
          )}

          <Modal isOpen={isLoginOpen} onOpenChange={onLoginOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 mt-5">Giriş Yap</ModalHeader>
                  <ModalBody>
                    <Input
                      type="email"
                      label="E-Mail"
                      className="max-w-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      label="Şifre"
                      className="max-w-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Kapat
                    </Button>
                    <Button color="primary" onPress={handleLogin}>
                      Giriş Yap
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      </NavbarContent>


      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>


      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href || "#"}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

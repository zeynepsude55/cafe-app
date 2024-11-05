"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/react";

export default function Tatlilar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
  const { isOpen: isSignupOpen, onOpen: onSignupOpen, onOpenChange: onSignupOpenChange } = useDisclosure();

  const handleLogin = () => {
    setIsLoggedIn(true);
    onLoginOpenChange(false);
  };

  const handleSignup = () => {
    setIsSignedUp(true);
    onSignupOpenChange(false);
  };

  return (
    <section className="relative flex flex-col gap-8 py-8 md:py-10 items-center justify-center">
      <div className="flex-1 max-w-xl text-center">
        <span className={title()}>ZeyAl&nbsp;</span>
        <span className={title({ color: "violet" })}>Cafe&nbsp;</span>
        <br />
        <span className={title()}>En güzel kahve ZeyAl kafede içtiğin kahvedir.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Hafta içi her gün 10.00-22.00 saatleri arasında açığız.
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Bizi instagram hesabımızdan da takip edin{" "}
              <Code color="primary">zeynepsude.saglam</Code>
            </span>
          </Snippet>
        </div>
      </div>

      <div className="absolute top-8 right-8 flex gap-4 items-center">
        
        {(isLoggedIn || isSignedUp) && (
          <div className="flex gap-4 items-center">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
        {!isLoggedIn && !isSignedUp && (
          <div className="flex gap-4 items-center">
            <Button onPress={onLoginOpen} color="primary" className="w-full max-w-xs">
              Giriş Yap
            </Button>
            <Button onPress={onSignupOpen} color="secondary" className="w-full max-w-xs">
              Kayıt Ol
            </Button>
          </div>
        )}
      </div>

      <Modal isOpen={isLoginOpen} onOpenChange={onLoginOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-5">
                Giriş Yap
              </ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  label="Email"
                  defaultValue="junior@nextui.org"
                  className="max-w-xs"
                />
                <Input
                  type="password"
                  label="Password"
                  defaultValue="****"
                  description="Verileriniz gizli kalıcaktır"
                  className="max-w-xs"
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

      <Modal isOpen={isSignupOpen} onOpenChange={onSignupOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Kayıt Ol
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="İsim"
                  className="max-w-xs"
                />
                <Input
                  type="text"
                  label="Soyisim"
                  className="max-w-xs"
                />
                <Input
                  type="text"
                  label="Telefon Numarası"
                  className="max-w-xs"
                />
                <Input
                  type="email"
                  label="E-Posta"
                  className="max-w-xs"
                />
                <Input
                  type="password"
                  label="Şifre"
                  className="max-w-xs"
                />
                <Input
                  type="password"
                  label="Şifre Tekrarı"
                  className="max-w-xs"
                />
                <DateRangePicker
                  label="Doğum Tarihiniz"
                  description="Ay-Gün-Yıl şeklinde giriniz"
                  className="max-w-xs"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Kapat
                </Button>
                <Button color="primary" onPress={handleSignup}>
                  Kayıt Ol
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

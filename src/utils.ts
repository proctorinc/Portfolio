import {
  Database,
  Desktop,
  HardDrives,
  Question,
  TestTube,
  Translate,
  Vault,
  WindowsLogo,
  Wrench,
} from "phosphor-react";

export const formatToIcon = (iconName: string) => {
  if (iconName === "translate") {
    return Translate;
  } else if (iconName === "desktop") {
    return Desktop;
  } else if (iconName === "hard-drives") {
    return HardDrives;
  } else if (iconName === "test-tube") {
    return TestTube;
  } else if (iconName === "vault") {
    return Vault;
  } else if (iconName === "windows-logo") {
    return WindowsLogo;
  } else if (iconName === "wrench") {
    return Wrench;
  } else if (iconName === "database") {
    return Database;
  }

  return Question;
};

"use client";

import PageHeader from "@/lib/components/PageHeader/PageHeader";
import { ButtonType } from "@/lib/types/QuivrButton";

import styles from "./page.module.scss";

const Knowledge = (): JSX.Element => {
  const buttons: ButtonType[] = [
    {
      label: "New",
      color: "primary",
      onClick: () => {
        console.info("New");
      },
      iconName: "add",
    },
  ];

  return (
    <>
      <div className={styles.page_header}>
        <PageHeader iconName="book" label="Knowledge" buttons={buttons} />
      </div>
    </>
  );
};

export default Knowledge;

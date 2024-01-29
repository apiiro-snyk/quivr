import { useTranslation } from "react-i18next";
import { LuStar } from "react-icons/lu";

import { MenuButton } from "@/lib/components/Menu/components/MenuButton/MenuButton";
import { StripePricingModal } from "@/lib/components/Stripe";
import { useUserData } from "@/lib/hooks/useUserData";

export const UpgradeToPlus = (): JSX.Element => {
  const { userData } = useUserData();
  const is_premium = userData?.is_premium;
  const { t } = useTranslation("monetization");

  if (is_premium === true) {
    return <></>;
  }

  return (
    <StripePricingModal
      Trigger={
        <MenuButton
          startIcon={<LuStar size={24} />}
          label={t("upgrade")}
          endIcon={
            <span className="rounded bg-primary/30 py-1 px-3 text-xs ml-1">
              {t("new")}
            </span>
          }
          className="my-4 bg-secondary"
        />
      }
    />
  );
};

"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Card } from "../ui/Card";
import { Button } from "../ui/buttons/Button";
import { setDiscordState } from "../../utils/discordRpc";

const GOLD = "#FFD700";
const GOLD_DARK = "#B8960F";

const features = [
  {
    icon: "solar:pen-bold",
    titleKey: "nrcplus.feature.nametags",
    descKey: "nrcplus.feature.nametags.desc",
  },
  {
    icon: "solar:emoji-funny-circle-bold",
    titleKey: "nrcplus.feature.emotes",
    descKey: "nrcplus.feature.emotes.desc",
  },
  {
    icon: "solar:shop-bold",
    titleKey: "nrcplus.feature.discounts",
    descKey: "nrcplus.feature.discounts.desc",
  },
  {
    icon: "solar:rocket-bold",
    titleKey: "nrcplus.feature.priority",
    descKey: "nrcplus.feature.priority.desc",
  },
];

const plans = [
  {
    days: 30,
    coins: 800,
    priceKey: "nrcplus.plan.30days",
    popular: false,
  },
  {
    days: 90,
    coins: 2000,
    priceKey: "nrcplus.plan.90days",
    popular: true,
  },
];

export function NRCPlusTab() {
  const { t } = useTranslation();

  useEffect(() => {
    setDiscordState("Viewing NRC+");
  }, []);

  return (
    <div className="h-full flex flex-col overflow-hidden p-6 relative">
      <div className="flex-1 overflow-y-auto pr-2">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 border-2"
            style={{
              backgroundColor: `${GOLD}20`,
              borderColor: `${GOLD}80`,
              boxShadow: `0 0 20px ${GOLD}30, inset 0 1px 0 ${GOLD}40`,
            }}
          >
            <img
              src="/logo.png"
              alt="NRC+"
              className="w-12 h-12 object-contain"
              style={{
                filter: "brightness(0) invert(70%) sepia(100%) saturate(500%) hue-rotate(5deg) brightness(1.1)",
              }}
            />
          </div>
          <h1
            className="font-minecraft text-4xl mb-2"
            style={{ color: GOLD }}
          >
            nrc+
          </h1>
          <p className="font-minecraft text-xl text-white/60 text-center max-w-lg">
            {t("nrcplus.subtitle")}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.titleKey} variant="3d">
              <div className="p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Icon
                    icon={feature.icon}
                    className="w-7 h-7 text-white"
                  />
                </div>
                <div>
                  <h3 className="font-minecraft text-xl text-white mb-1">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="font-minecraft text-lg text-white/50 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pricing */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2
            className="font-minecraft text-2xl text-center mb-6"
            style={{ color: GOLD }}
          >
            {t("nrcplus.pricing.title")}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {plans.map((plan) => (
              <Card key={plan.days} variant="3d" className="relative">
                {plan.popular && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg font-minecraft text-lg text-black"
                    style={{
                      backgroundColor: GOLD,
                    }}
                  >
                    {t("nrcplus.plan.best_value")}
                  </div>
                )}
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src="/coin.png"
                      alt="Coins"
                      className="w-8 h-8 object-contain"
                    />
                    <span
                      className="font-minecraft text-3xl"
                      style={{ color: GOLD }}
                    >
                      {plan.coins.toLocaleString()}
                    </span>
                  </div>
                  <p className="font-minecraft text-xl text-white/70 mb-1">
                    {t("nrcplus.coins_label")}
                  </p>
                  <p className="font-minecraft text-lg text-white/40 mb-5">
                    {t("nrcplus.for")} {plan.days} {t("nrcplus.days")}
                  </p>
                  <Button
                    variant="3d"
                    size="md"
                    disabled
                    icon={
                      <Icon
                        icon="solar:lock-bold"
                        className="w-5 h-5 text-white"
                      />
                    }
                  >
                    {t("nrcplus.coming_soon")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="font-minecraft text-lg text-white/30 text-center pb-4">
          {t("nrcplus.footer")}
        </p>
      </div>
    </div>
  );
}

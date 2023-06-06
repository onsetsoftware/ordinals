import { ordinalSuffixes } from "./ordinals";

export type OrdinalLocale = keyof typeof ordinalSuffixes;
export type OrdinalSuffixes = typeof ordinalSuffixes;

export function ordinal(number: number, locale?: OrdinalLocale) {
  if (locale === undefined) {
    locale = "en";
  }

  const rule = new Intl.PluralRules(undefined, { type: "ordinal" });

  const ordinalRules = rule.select(number);
  const suffix =
    ordinalSuffixes[locale][
      ordinalRules as keyof OrdinalSuffixes[OrdinalLocale]
    ];

  return suffix;
}

export function withOrdinal(number: number, locale?: OrdinalLocale) {
  return `${number}${ordinal(number, locale)}`;
}

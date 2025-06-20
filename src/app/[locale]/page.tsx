import { useTranslations } from "next-intl";
import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Navbar />
      {/* <Link href="/about">{t("about")}</Link> */}
      <div className="min-h-svh grid place-items-center">
        <h1 className="text-4xl">{t("title")}</h1>
      </div>
    </>
  );
}

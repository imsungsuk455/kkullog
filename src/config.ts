export const SITE = {
  website: "https://doctornomad.org/", // replace this with your deployed domain
  author: "꿀로그(Kkul-log)",
  profile: "/",
  desc: "세상의 모든 매력적인 아이템을 한눈에! IT 기기부터 맛있는 식품까지, 당신의 현명한 쇼핑을 돕는 꿀같은 정보를 배달해 드립니다.",
  title: "꿀로그의 꿀템 세상 | 당신을 위한 쇼핑 가이드",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "페이지 수정",
    url: "https://github.com/imsungsuk455/weblog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

import ormadoImg from "../assets/projects/ormado.webp";
import gulcuImg from "../assets/projects/gulcu.webp";
import elektrikustaImg from "../assets/projects/elektrikusta.webp";
import type { ProjectItem } from "./types";

const role = {
  en: "Frontend Developer",
  az: "Frontend Developer",
  tr: "Frontend Developer",
};

export const projects: ProjectItem[] = [
  {
    id: "ormado",
    title: "Ormado",
    domain: "ormado.de",
    image: ormadoImg,
    role,
    overview: {
      en: "A multi-page e-commerce and franchise platform for a coffee brand — product catalog, cart and wishlist, branch locator, gift cards, table reservations, blog, and events, built as a single-page React application at Webluna Software.",
      az: "Qəhvə brendi üçün çoxsəhifəli e-ticarət və franchise platforması — məhsul kataloqu, səbət və istək siyahısı, filial axtarışı, hədiyyə kartları, masa rezervasiyası, bloq və tədbirlər. Webluna Software-də React ilə single-page application olaraq qurulub.",
      tr: "Bir kahve markası için çok sayfalı bir e-ticaret ve franchise platformu — ürün kataloğu, sepet ve istek listesi, şube bulucu, hediye kartları, masa rezervasyonu, blog ve etkinlikler. Webluna Software'de React ile tek sayfa uygulaması olarak geliştirildi.",
    },
    responsibilities: [
      {
        en: "Implemented the responsive front-end across the catalog, cart/wishlist, branch locator, and reservation flows.",
        az: "Kataloq, səbət/istək siyahısı, filial axtarışı və rezervasiya axınları daxil olmaqla responsiv front-end-i hazırladım.",
        tr: "Katalog, sepet/istek listesi, şube bulucu ve rezervasyon akışları dahil duyarlı ön yüzü geliştirdim.",
      },
      {
        en: "Built reusable UI components shared across the site's many pages to keep the design system consistent.",
        az: "Sayt boyunca dizayn sisteminin ardıcıl qalması üçün çoxsaylı səhifələr arasında paylaşılan təkrar istifadə oluna bilən UI komponentləri qurdum.",
        tr: "Site genelindeki birçok sayfada paylaşılan, tasarım sistemini tutarlı tutan yeniden kullanılabilir UI bileşenleri oluşturdum.",
      },
      {
        en: "Collaborated with backend engineers to wire the UI to REST APIs for products, cart state, and content.",
        az: "Məhsullar, səbət state-i və məzmun üçün UI-ı REST API-lərə qoşmaq üçün backend mühəndisləri ilə əməkdaşlıq etdim.",
        tr: "Ürünler, sepet state'i ve içerik için arayüzü REST API'lere bağlamak üzere backend mühendisleriyle iş birliği yaptım.",
      },
    ],
    techStack: ["React", "Vite", "SCSS", "REST API", "Google Tag Manager"],
    performance: {
      en: "Shipped as a Vite-bundled SPA with code-split routes and optimized asset loading to keep navigation between catalog, cart, and content pages fast.",
      az: "Kataloq, səbət və məzmun səhifələri arasında naviqasiyanın sürətli qalması üçün kod-bölünmüş marşrutlarla Vite əsaslı SPA olaraq istifadəyə verildi.",
      tr: "Katalog, sepet ve içerik sayfaları arasındaki gezinmeyi hızlı tutmak için kod bölünmüş rotalarla Vite tabanlı bir SPA olarak yayınlandı.",
    },
    responsive: {
      en: "Fully responsive across mobile, tablet, and desktop, including the multi-step cart and reservation flows.",
      az: "Çoxaddımlı səbət və rezervasiya axınları daxil olmaqla mobil, planşet və masaüstündə tam responsiv.",
      tr: "Çok adımlı sepet ve rezervasyon akışları dahil olmak üzere mobil, tablet ve masaüstünde tamamen duyarlı.",
    },
    apiIntegration: {
      en: "Integrated with backend REST APIs for the product catalog, cart/wishlist state, branch data, and reservation submissions.",
      az: "Məhsul kataloqu, səbət/istək siyahısı state-i, filial məlumatları və rezervasiya göndərişləri üçün backend REST API-ləri ilə inteqrasiya edildi.",
      tr: "Ürün kataloğu, sepet/istek listesi state'i, şube verileri ve rezervasyon gönderimleri için backend REST API'leriyle entegre edildi.",
    },
    liveUrl: "https://ormado.de",
  },
  {
    id: "gulcu",
    title: "Gülçü",
    domain: "gulcu.az",
    image: gulcuImg,
    role,
    overview: {
      en: "An online flower delivery storefront for the Azerbaijani market, with a full product catalog, city-wide delivery promotions, and a trilingual interface (AZ/EN/RU), built at Webluna Software.",
      az: "Azərbaycan bazarı üçün tam məhsul kataloqu, şəhər daxili çatdırılma kampaniyaları və üçdilli interfeysi (AZ/EN/RU) olan onlayn gül çatdırılma mağazası. Webluna Software-də qurulub.",
      tr: "Azerbaycan pazarı için tam ürün kataloğu, şehir içi teslimat kampanyaları ve üç dilli arayüze (AZ/EN/RU) sahip bir online çiçek teslimat mağazası. Webluna Software'de geliştirildi.",
    },
    responsibilities: [
      {
        en: "Built the responsive storefront UI and the trilingual (AZ/EN/RU) interface layer.",
        az: "Responsiv mağaza interfeysini və üçdilli (AZ/EN/RU) interfeys qatını qurdum.",
        tr: "Duyarlı mağaza arayüzünü ve üç dilli (AZ/EN/RU) arayüz katmanını geliştirdim.",
      },
      {
        en: "Implemented category browsing, the promotional carousel, and click-to-chat/click-to-call contact widgets.",
        az: "Kateqoriya baxışını, promo karuselini və click-to-chat/click-to-call əlaqə vidcetlərini tətbiq etdim.",
        tr: "Kategori gezintisini, promosyon karuselini ve click-to-chat/click-to-call iletişim widget'larını uyguladım.",
      },
      {
        en: "Worked alongside the Webluna Software team on the customer-facing storefront as part of a small delivery squad.",
        az: "Kiçik bir işçi qrupunun tərkibində Webluna Software komandası ilə birlikdə müştəri interfeysi üzərində işlədim.",
        tr: "Küçük bir ekip içinde Webluna Software takımıyla birlikte müşteriye yönelik mağaza arayüzü üzerinde çalıştım.",
      },
    ],
    techStack: ["React", "Vite", "SCSS", "i18n (AZ/EN/RU)", "Google Analytics"],
    performance: {
      en: "Built on a Vite production pipeline with optimized image loading for the promotional carousel and category grids.",
      az: "Promo karuseli və kateqoriya şəbəkələri üçün optimallaşdırılmış şəkil yüklənməsi ilə Vite production pipeline üzərində qurulub.",
      tr: "Promosyon karuseli ve kategori ızgaraları için optimize edilmiş görsel yüklemesiyle bir Vite üretim hattı üzerine inşa edildi.",
    },
    responsive: {
      en: "Mobile-first, since mobile is the primary traffic source for a same-day flower delivery service.",
      az: "Eyni gün gül çatdırılma xidməti üçün əsas trafik mənbəyi mobil olduğundan, mobile-first yanaşma ilə hazırlanıb.",
      tr: "Aynı gün çiçek teslimat hizmeti için birincil trafik kaynağı mobil olduğundan mobile-first olarak tasarlandı.",
    },
    apiIntegration: {
      en: "Integrated with backend REST APIs for product categories, cart, and order submission.",
      az: "Məhsul kateqoriyaları, səbət və sifariş göndərişi üçün backend REST API-ləri ilə inteqrasiya edildi.",
      tr: "Ürün kategorileri, sepet ve sipariş gönderimi için backend REST API'leriyle entegre edildi.",
    },
    liveUrl: "https://gulcu.az",
  },
  {
    id: "elektrikusta",
    title: "Elektrik Usta",
    domain: "elektrikusta.az",
    image: elektrikustaImg,
    role,
    overview: {
      en: "A single-page marketing site for a professional electrical services company, presenting service offerings, credentials, and direct contact channels for a bilingual (AZ/RU) audience, built at Webluna Software.",
      az: "İkidilli (AZ/RU) auditoriya üçün xidmət təkliflərini, təcrübəni və birbaşa əlaqə kanallarını təqdim edən peşəkar elektrik xidmətləri şirkəti üçün tək səhifəli marketinq saytı. Webluna Software-də qurulub.",
      tr: "İki dilli (AZ/RU) bir kitle için hizmet tekliflerini, deneyimi ve doğrudan iletişim kanallarını sunan profesyonel bir elektrik hizmetleri şirketi için tek sayfalık pazarlama sitesi. Webluna Software'de geliştirildi.",
    },
    responsibilities: [
      {
        en: "Implemented the responsive single-page layout and bilingual (AZ/RU) content.",
        az: "Responsiv tək səhifəli düzəni və ikidilli (AZ/RU) məzmunu tətbiq etdim.",
        tr: "Duyarlı tek sayfa düzenini ve iki dilli (AZ/RU) içeriği uyguladım.",
      },
      {
        en: "Added structured data (JSON-LD) and Open Graph/Twitter metadata to improve search and social visibility.",
        az: "Axtarış və sosial görünürlüyü artırmaq üçün strukturlaşdırılmış data (JSON-LD) və Open Graph/Twitter metadata əlavə etdim.",
        tr: "Arama ve sosyal görünürlüğü artırmak için yapılandırılmış veri (JSON-LD) ve Open Graph/Twitter meta verileri ekledim.",
      },
      {
        en: "Integrated sticky WhatsApp and click-to-call contact actions for mobile visitors arriving from search.",
        az: "Axtarışdan gələn mobil ziyarətçilər üçün sabit WhatsApp və click-to-call əlaqə düymələrini inteqrasiya etdim.",
        tr: "Aramadan gelen mobil ziyaretçiler için sabit WhatsApp ve click-to-call iletişim aksiyonlarını entegre ettim.",
      },
    ],
    techStack: ["React", "SCSS", "JSON-LD / Open Graph SEO", "i18n (AZ/RU)"],
    performance: {
      en: "Built as a lightweight single-page site optimized for a fast first paint on mobile search traffic.",
      az: "Mobil axtarış trafikində sürətli ilk render üçün optimallaşdırılmış yüngül tək səhifəli sayt olaraq qurulub.",
      tr: "Mobil arama trafiğinde hızlı ilk boyama için optimize edilmiş hafif bir tek sayfa site olarak inşa edildi.",
    },
    responsive: {
      en: "Fully responsive with sticky contact actions that stay reachable as mobile visitors scroll.",
      az: "Mobil ziyarətçilər aşağı sürüşdükcə əlçatan qalan sabit əlaqə düymələri ilə tam responsiv.",
      tr: "Mobil ziyaretçiler aşağı kaydırdıkça erişilebilir kalan sabit iletişim aksiyonlarıyla tamamen duyarlı.",
    },
    apiIntegration: {
      en: "Wired WhatsApp click-to-chat and click-to-call deep links, plus structured data for search engine indexing.",
      az: "WhatsApp click-to-chat və click-to-call keçidlərini, həmçinin axtarış sistemləri üçün strukturlaşdırılmış datanı qoşdum.",
      tr: "WhatsApp click-to-chat ve click-to-call bağlantılarını, ayrıca arama motoru indekslemesi için yapılandırılmış veriyi entegre ettim.",
    },
    liveUrl: "https://elektrikusta.az",
  },
];

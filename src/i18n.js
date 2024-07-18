import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "menu": "Menu",
      "reviews": "Reviews",
      "about": "About",
      "cart": "Cart",
      "welcome": "Welcome to Cake Walk Bakery",
      "description": "We specialize in custom cakes, pastries, and other baked goods.",
      "order_now": "Order Now",
      "footer_address": "1234 Shortcake Lane",
      "footer_city": "Cake City, Canada",
      "footer_phone": "705-999-0102",
      "footer_email": "cakewalkbakery@gmail.com",
      "hero_welcome": "Welcome to Cake Walk Bakery",
      "hero_description": "Whether you're celebrating a special occasion or simply indulging a sweet tooth, we've got something delicious for you.",
      "buy_now": "Buy Now",
      "new_arrival_title": "Discover Our New Cakes",
      "new_arrival_description": "From Vanilla Cake with Chocolate Icing to Chocolate Cake with Vanilla Icing, our custom creations are tailored to your taste.",
      "gallery_title": "Share your Cake with #CakeWalk",
      "high_quality": "High Quality",
      "top_rated_cakes": "Top Rated Cakes",
      "satisfaction_guaranteed": "Satisfaction Guaranteed",
      "free_local_delivery": "Free Local Delivery",
      "great_customer_service": "Great Customer Service"
    }
  },
  fr: {
    translation: {
      "home": "Accueil",
      "menu": "Menu",
      "reviews": "Avis",
      "about": "À propos",
      "cart": "Panier",
      "welcome": "Bienvenue à Cake Walk Bakery",
      "description": "Nous sommes spécialisés dans les gâteaux sur mesure, les pâtisseries et autres produits de boulangerie.",
      "order_now": "Commandez maintenant",
      "footer_address": "1234 Rue Shortcake",
      "footer_city": "Cake City, Canada",
      "footer_phone": "705-999-0102",
      "footer_email": "cakewalkbakery@gmail.com",
      "hero_welcome": "Bienvenue à Cake Walk Bakery",
      "hero_description": "Que vous célébriez une occasion spéciale ou que vous vous fassiez simplement plaisir, nous avons quelque chose de délicieux pour vous.",
      "buy_now": "Achetez maintenant",
      "new_arrival_title": "Découvrez Nos Nouveaux Gâteaux",
      "new_arrival_description": "Du gâteau à la vanille avec glaçage au chocolat au gâteau au chocolat avec glaçage à la vanille, nos créations personnalisées sont adaptées à votre goût.",
      "gallery_title": "Partagez votre gâteau avec #CakeWalk",
      "high_quality": "Haute Qualité",
      "top_rated_cakes": "Gâteaux les Mieux Notés",
      "satisfaction_guaranteed": "Satisfaction Garantie",
      "free_local_delivery": "Livraison Locale Gratuite",
      "great_customer_service": "Excellent Service Client"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;


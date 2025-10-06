import { ExternalLink, ShoppingBag, Car, Coffee, Utensils, Target, Percent } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

const partners = [
  {
    id: 1,
    name: "Carrefour Tashkent",
    discount: "15%",
    description: "Fresh fruits, vegetables, dairy products and cleaning supplies",
    minCoins: 30,
    icon: ShoppingBag,
    color: "green",
    category: "grocery"
  },
  {
    id: 2,
    name: "Yandex Taxi",
    discount: "20%",
    description: "Taxi rides across Tashkent with comfort and economy options",
    minCoins: 25,
    icon: Car,
    color: "yellow",
    category: "transport"
  },
  {
    id: 3,
    name: "Coffee Bean Café",
    discount: "10%",
    description: "Coffee, tea, pastries and light meals in city center",
    minCoins: 15,
    icon: Coffee,
    color: "brown",
    category: "food"
  },
  {
    id: 4,
    name: "Samarkand Darvoza",
    discount: "25%",
    description: "Traditional plov, shashlik, lagman and Uzbek cuisine",
    minCoins: 40,
    icon: Utensils,
    color: "orange",
    category: "restaurant"
  },
  {
    id: 5,
    name: "Korzinka.uz",
    discount: "12%",
    description: "Online grocery delivery: bread, meat, vegetables, household items",
    minCoins: 20,
    icon: ShoppingBag,
    color: "blue",
    category: "delivery"
  },
  {
    id: 6,
    name: "Uzbekistan Airways",
    discount: "5%",
    description: "Domestic and international flights from Tashkent airport",
    minCoins: 100,
    icon: Target,
    color: "sky",
    category: "travel"
  }
];

export default function Partners() {
  const { t } = useTranslation();

  return (
    <Layout title={t('partners')}>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{t('ourPartners')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partnersDescription')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <p className="text-gray-600">{t('activePartners')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-gray-600">{t('maxDiscount')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <p className="text-gray-600">{t('minCoinsRequired')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full bg-${partner.color}-100 text-${partner.color}-600`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {t(partner.category)}
                        </Badge>
                      </div>
                    </div>
                    <Badge className={`bg-${partner.color}-500 text-white`}>
                      <Percent className="h-3 w-3 mr-1" />
                      {partner.discount} {t('off')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{t('requiredCoins')}:</span>
                    <span className="font-semibold">{partner.minCoins} 🪙</span>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('viewOffer')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How to Use */}
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">{t('howToUseOffers')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-green-700">
            <p>• {t('earnCoinsStep')}</p>
            <p>• {t('checkOffersStep')}</p>
            <p>• {t('redeemStep')}</p>
            <p>• {t('enjoyStep')}</p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('startEarningToday')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('startEarningDescription')}
          </p>
          <Button className="bg-green-600 hover:bg-green-700" size="lg">
            {t('startCollecting')}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
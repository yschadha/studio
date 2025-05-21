
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AD_OPPORTUNITIES } from '@/lib/constants';

export default function AdOpportunitiesPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Discover Ad Opportunities
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore various ways your brand can connect and engage with the campus community through student organizations.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AD_OPPORTUNITIES.map((opportunity) => (
            <Card key={opportunity.id} className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102">
              <CardHeader className="items-start pt-6 pb-4">
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{opportunity.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{opportunity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

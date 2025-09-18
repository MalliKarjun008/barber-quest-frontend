import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";
import barbershop1 from "@/assets/barbershop-1.jpg";
import barbershop2 from "@/assets/barbershop-2.jpg";
import barbershop3 from "@/assets/barbershop-3.jpg";

const shopImages = {
  "barbershop-1": barbershop1,
  "barbershop-2": barbershop2,
  "barbershop-3": barbershop3,
};

const ShopDetail = () => {
  const { id } = useParams();
  const shop = barbershops.find((s) => s.id === id);

  if (!shop) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-barbershop-navy mb-4">
              Barbershop not found
            </h1>
            <Link to="/shops">
              <Button className="bg-gradient-accent hover:shadow-gold transition-all duration-300">
                Back to Shops
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Shop Banner */}
      <section className="relative h-80 bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopImages[shop.image as keyof typeof shopImages]})` }}
        >
          <div className="absolute inset-0 bg-barbershop-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <div>
              <Link 
                to="/shops" 
                className="inline-flex items-center text-primary-foreground/80 hover:text-barbershop-gold transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Shops
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {shop.name}
              </h1>
              
              <div className="flex items-center space-x-6 text-primary-foreground/90">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-barbershop-gold text-barbershop-gold" />
                  <span className="font-medium">{shop.rating}</span>
                  <span className="text-sm">({shop.totalReviews} reviews)</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-barbershop-gold" />
                  <span>{shop.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Info & Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Services */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-barbershop-navy mb-8">Our Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shop.services.map((service) => (
                  <Card key={service.id} className="bg-gradient-card border-0 hover:shadow-card-barbershop transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-barbershop-navy">
                          {service.name}
                        </h3>
                        <Badge variant="secondary" className="bg-barbershop-gold text-barbershop-navy">
                          ${service.price}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration} min
                        </div>
                        
                        <Link to={`/booking/${shop.id}/${service.id}`}>
                          <Button 
                            size="sm" 
                            className="bg-gradient-accent hover:shadow-gold transition-all duration-300"
                          >
                            Book Service
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Barbers */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-barbershop-navy mb-8">Our Barbers</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shop.barbers.map((barber) => (
                    <Card key={barber.id} className="bg-gradient-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={barber.avatar}
                            alt={barber.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-barbershop-navy">
                              {barber.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {barber.experience} experience
                            </p>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-barbershop-gold text-barbershop-gold" />
                              <span className="text-sm font-medium">{barber.rating}</span>
                              <span className="text-sm text-muted-foreground">rating</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-card border-0 sticky top-8">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-barbershop-navy">Shop Information</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-barbershop-navy mb-2">Contact</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-3 text-barbershop-gold" />
                        {shop.phone}
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-3 text-barbershop-gold" />
                        {shop.email}
                      </div>
                      <div className="flex items-start text-sm">
                        <MapPin className="h-4 w-4 mr-3 text-barbershop-gold mt-0.5" />
                        <span>{shop.address}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-barbershop-navy mb-2">Hours</h4>
                    <div className="flex items-start text-sm">
                      <Clock className="h-4 w-4 mr-3 text-barbershop-gold mt-0.5" />
                      <span>{shop.openHours}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-barbershop-navy mb-2">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-barbershop-cream p-3 rounded-lg">
                        <div className="text-lg font-semibold text-barbershop-navy">{shop.rating}</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div className="bg-barbershop-cream p-3 rounded-lg">
                        <div className="text-lg font-semibold text-barbershop-navy">{shop.totalReviews}</div>
                        <div className="text-xs text-muted-foreground">Reviews</div>
                      </div>
                      <div className="bg-barbershop-cream p-3 rounded-lg">
                        <div className="text-lg font-semibold text-barbershop-navy">{shop.services.length}</div>
                        <div className="text-xs text-muted-foreground">Services</div>
                      </div>
                      <div className="bg-barbershop-cream p-3 rounded-lg">
                        <div className="text-lg font-semibold text-barbershop-navy">{shop.barbers.length}</div>
                        <div className="text-xs text-muted-foreground">Barbers</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent hover:shadow-gold transition-all duration-300">
                    Call to Book
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopDetail;
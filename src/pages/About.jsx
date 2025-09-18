import { CheckCircle, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments with your favorite barbers in just a few clicks. Choose your preferred time and date effortlessly."
    },
    {
      icon: Users,
      title: "Expert Barbers",
      description: "Connect with experienced, professional barbers who are passionate about their craft and dedicated to your satisfaction."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All barbershops on our platform are carefully vetted to ensure you receive the highest quality service every time."
    },
    {
      icon: CheckCircle,
      title: "Reliable Service",
      description: "Enjoy peace of mind with our reliable booking system, confirmed appointments, and excellent customer support."
    }
  ];

  const stats = [
    { number: "50+", label: "Partner Barbershops" },
    { number: "200+", label: "Professional Barbers" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About
            <span className="block text-barbershop-gold">BarberBook</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We're revolutionizing the way you book barbershop appointments, connecting you with 
            the finest barbers and premium grooming services in your area.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-barbershop-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At BarberBook, we believe that every man deserves access to premium grooming services. 
                Our platform bridges the gap between skilled barbers and discerning clients, making 
                it easier than ever to book appointments with the best barbershops in town.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to supporting local barbershops while providing customers with a 
                seamless, modern booking experience that respects the timeless tradition of quality barbering.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-barbershop-gold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="bg-barbershop-gold p-3 rounded-lg w-fit mb-4">
                      <Calendar className="h-6 w-6 text-barbershop-navy" />
                    </div>
                    <h3 className="font-semibold text-barbershop-navy mb-2">Smart Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      AI-powered booking system that finds the perfect time for you
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="bg-barbershop-gold p-3 rounded-lg w-fit mb-4">
                      <Award className="h-6 w-6 text-barbershop-navy" />
                    </div>
                    <h3 className="font-semibold text-barbershop-navy mb-2">Quality First</h3>
                    <p className="text-sm text-muted-foreground">
                      Only partner with the most skilled and professional barbers
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4 mt-8">
                <Card className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="bg-barbershop-gold p-3 rounded-lg w-fit mb-4">
                      <Users className="h-6 w-6 text-barbershop-navy" />
                    </div>
                    <h3 className="font-semibold text-barbershop-navy mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Building connections between barbers and their communities
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="bg-barbershop-gold p-3 rounded-lg w-fit mb-4">
                      <CheckCircle className="h-6 w-6 text-barbershop-navy" />
                    </div>
                    <h3 className="font-semibold text-barbershop-navy mb-2">Reliability</h3>
                    <p className="text-sm text-muted-foreground">
                      Guaranteed appointments with confirmation and reminders
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-barbershop-navy mb-4">
              Why Choose BarberBook?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make us the preferred choice for barbershop bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center bg-gradient-card border-0 hover:shadow-card-barbershop transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-barbershop-gold p-4 rounded-full w-fit mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-barbershop-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-barbershop-navy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Premium Grooming?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust BarberBook for their grooming needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shops"
              className="inline-flex items-center justify-center px-8 py-4 bg-barbershop-gold text-barbershop-navy font-semibold rounded-lg hover:shadow-gold transition-all duration-300"
            >
              Find Barbershops
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-navy font-semibold rounded-lg transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
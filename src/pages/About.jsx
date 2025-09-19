import { Star, Users, Clock, Shield, Scissors, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Scissors,
      title: "Premium Barbershops",
      description: "We partner with only the finest barbershops that meet our strict quality standards for service and atmosphere."
    },
    {
      icon: Users,
      title: "Expert Barbers",
      description: "All our partner barbers are experienced professionals with years of expertise in traditional and modern grooming techniques."
    },
    {
      icon: Clock,
      title: "Easy Scheduling",
      description: "Book appointments 24/7 with real-time availability and instant confirmation. No more waiting on hold or playing phone tag."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your personal information is protected with enterprise-grade security, and our booking system is 99.9% reliable."
    }
  ];

  const stats = [
    { number: "500+", label: "Partner Barbershops" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100K+", label: "Appointments Booked" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BarberBook
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              We're revolutionizing the way you book barbershop appointments, making premium grooming accessible and convenient for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At BarberBook, we believe that everyone deserves access to exceptional grooming services. 
                Our platform connects discerning customers with the finest barbershops in their area, 
                ensuring a premium experience every time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've carefully curated our network of partner barbershops based on their commitment 
                to quality, professionalism, and customer satisfaction. From traditional straight-razor 
                shaves to modern styling techniques, our partners offer the full spectrum of men's grooming services.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-secondary p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose BarberBook?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built our platform with your convenience and satisfaction as our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              How It All Started
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                BarberBook was born from a simple frustration: the difficulty of finding and booking 
                appointments at quality barbershops. Our founders, tired of calling multiple shops 
                only to find busy signals or full schedules, envisioned a better way.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We spent months visiting barbershops, talking to owners and customers, understanding 
                the challenges on both sides. The result is a platform that benefits everyone - 
                customers get easy booking and discovery, while barbershops can manage their 
                schedules more efficiently and reach new clients.
              </p>
              <p className="text-lg leading-relaxed">
                Today, BarberBook is the trusted platform for premium grooming appointments, 
                connecting thousands of customers with hundreds of exceptional barbershops across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              These principles guide everything we do, from platform development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Star className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-primary-foreground/80">
                We maintain the highest standards in our barbershop partnerships and platform performance, 
                ensuring every customer experience exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Focused</h3>
              <p className="text-primary-foreground/80">
                Every feature we build and decision we make is centered around creating the best 
                possible experience for our customers and barbershop partners.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Transparency</h3>
              <p className="text-primary-foreground/80">
                We believe in honest communication, secure transactions, and building long-term 
                relationships based on trust and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
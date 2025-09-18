import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops, timeSlots } from "@/data/dummyData";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const { shopId, serviceId } = useParams();
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);

  const shop = barbershops.find((s) => s.id === shopId);
  const service = shop?.services.find((s) => s.id === serviceId);

  if (!shop || !service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-barbershop-navy mb-4">
              Service not found
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

  const handleBooking = () => {
    if (!selectedBarber || !selectedDate || !selectedTime || !customerName || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    // Simulate booking process
    setTimeout(() => {
      setIsBooked(true);
      toast({
        title: "Booking Confirmed!",
        description: `Your appointment has been booked for ${selectedDate} at ${selectedTime}.`,
      });
    }, 1000);
  };

  // Generate next 14 days for date selection
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  if (isBooked) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-100 p-8 rounded-lg mb-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-green-800 mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-green-700 mb-6">
                Your appointment has been successfully booked. You'll receive a confirmation email shortly.
              </p>
            </div>

            <Card className="bg-gradient-card border-0 text-left">
              <CardHeader>
                <h2 className="text-xl font-semibold text-barbershop-navy">Booking Details</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Shop</Label>
                    <p className="font-medium">{shop.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Service</Label>
                    <p className="font-medium">{service.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Barber</Label>
                    <p className="font-medium">
                      {shop.barbers.find(b => b.id === selectedBarber)?.name}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Price</Label>
                    <p className="font-medium">${service.price}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Date</Label>
                    <p className="font-medium">{new Date(selectedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Time</Label>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center mt-8">
              <Link to="/shops">
                <Button variant="outline" className="border-2 border-barbershop-navy text-barbershop-navy">
                  Browse More Shops
                </Button>
              </Link>
              <Link to={`/shops/${shop.id}`}>
                <Button className="bg-gradient-accent hover:shadow-gold transition-all duration-300">
                  Back to {shop.name}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/shops/${shop.id}`} 
            className="inline-flex items-center text-primary-foreground/80 hover:text-barbershop-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {shop.name}
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Complete your booking for {service.name} at {shop.name}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Booking Steps */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Service Summary */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-barbershop-navy">Selected Service</h2>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-barbershop-navy">{service.name}</h3>
                      <p className="text-muted-foreground mb-2">{service.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration} min
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-barbershop-gold text-barbershop-navy">
                      ${service.price}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Select Barber */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-barbershop-navy">Choose Your Barber</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {shop.barbers.map((barber) => (
                      <div
                        key={barber.id}
                        onClick={() => setSelectedBarber(barber.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          selectedBarber === barber.id
                            ? 'border-barbershop-gold bg-barbershop-cream'
                            : 'border-border hover:border-barbershop-gold'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={barber.avatar}
                            alt={barber.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-medium text-barbershop-navy">{barber.name}</h3>
                            <p className="text-sm text-muted-foreground">{barber.experience}</p>
                            <p className="text-sm text-barbershop-gold">★ {barber.rating}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Select Date & Time */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-barbershop-navy">Select Date & Time</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-barbershop-navy mb-3 block">
                      Choose Date
                    </Label>
                    <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                      {availableDates.slice(0, 14).map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 text-sm rounded-lg border-2 transition-all duration-300 ${
                            selectedDate === date
                              ? 'border-barbershop-gold bg-barbershop-cream text-barbershop-navy'
                              : 'border-border hover:border-barbershop-gold'
                          }`}
                        >
                          <div className="font-medium">
                            {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <Label className="text-sm font-medium text-barbershop-navy mb-3 block">
                        Choose Time
                      </Label>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 text-sm rounded-lg border-2 transition-all duration-300 ${
                              selectedTime === time
                                ? 'border-barbershop-gold bg-barbershop-cream text-barbershop-navy'
                                : 'border-border hover:border-barbershop-gold'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-barbershop-navy">Your Information</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-barbershop-navy">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-barbershop-navy">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-card border-0 sticky top-8">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-barbershop-navy">Booking Summary</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Shop</span>
                      <span className="text-sm font-medium">{shop.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Service</span>
                      <span className="text-sm font-medium">{service.name}</span>
                    </div>
                    {selectedBarber && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Barber</span>
                        <span className="text-sm font-medium">
                          {shop.barbers.find(b => b.id === selectedBarber)?.name}
                        </span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Date</span>
                        <span className="text-sm font-medium">
                          {new Date(selectedDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time</span>
                        <span className="text-sm font-medium">{selectedTime}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-medium">{service.duration} min</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-barbershop-navy">Total</span>
                      <span className="text-xl font-bold text-barbershop-gold">${service.price}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-gradient-accent hover:shadow-gold transition-all duration-300"
                    disabled={!selectedBarber || !selectedDate || !selectedTime || !customerName || !customerEmail}
                  >
                    Confirm Booking
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By booking, you agree to our terms and conditions
                  </p>
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

export default Booking;
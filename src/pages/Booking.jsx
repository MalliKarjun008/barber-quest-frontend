import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops, timeSlots } from "@/data/dummyData";

const Booking = () => {
  const { shopId, serviceId } = useParams();
  const { toast } = useToast();
  
  const shop = barbershops.find(s => s.id === parseInt(shopId));
  const service = shop?.services.find(s => s.id === parseInt(serviceId));
  
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  if (!shop || !service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Button asChild>
              <Link to="/shops">Back to Shops</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedBarber || !selectedDate || !selectedTime || !customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    setIsBookingConfirmed(true);
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment for ${service.name} has been booked successfully.`,
    });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isBookingConfirmed) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center shadow-elegant border-0">
              <CardContent className="pt-8 pb-8">
                <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for booking with {shop.name}. We've sent a confirmation email to {customerInfo.email}.
                </p>
                
                <div className="bg-muted p-6 rounded-lg mb-8 text-left">
                  <h3 className="font-semibold text-foreground mb-4">Booking Details:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Barber:</span>
                      <span className="font-medium">{selectedBarber.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-primary">${service.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to={`/shops/${shop.id}`}>View Shop Details</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/shops">Book Another Service</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
      <section className="bg-gradient-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 mr-4">
              <Link to={`/shops/${shop.id}`}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to {shop.name}
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-primary-foreground/90">
            You're booking: <span className="font-semibold">{service.name}</span> at {shop.name}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Select Barber */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-6 w-6 mr-2 text-primary" />
                    Step 1: Choose Your Barber
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {shop.barbers.map((barber) => (
                      <div
                        key={barber.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedBarber?.id === barber.id
                            ? "border-primary bg-accent"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedBarber(barber)}
                      >
                        <div className="flex items-center">
                          <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{barber.name}</h3>
                            <p className="text-sm text-muted-foreground">{barber.experience} experience</p>
                            <p className="text-sm text-primary font-medium">{barber.specialty}</p>
                          </div>
                          {selectedBarber?.id === barber.id && (
                            <Check className="h-6 w-6 text-primary ml-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Select Date */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-primary" />
                    Step 2: Choose Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="date">Select Date</Label>
                  <Input
                    id="date"
                    type="date"
                    min={getTomorrowDate()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mt-2"
                  />
                </CardContent>
              </Card>

              {/* Step 3: Select Time */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-primary" />
                    Step 3: Choose Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`${selectedTime === time ? "bg-primary" : ""}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 4: Customer Information */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Step 4: Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      placeholder="Any special requests or notes for your barber..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">{shop.name}</h3>
                    <div className="flex items-center text-sm text-primary-foreground/80 mb-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{shop.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary-foreground/80">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{shop.phone}</span>
                    </div>
                  </div>

                  <div className="border-t border-primary-foreground/20 pt-4">
                    <h4 className="font-semibold mb-2">Service Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>{service.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="text-secondary font-semibold">${service.price}</span>
                      </div>
                    </div>
                  </div>

                  {selectedBarber && (
                    <div className="border-t border-primary-foreground/20 pt-4">
                      <h4 className="font-semibold mb-2">Selected Barber</h4>
                      <p className="text-sm">{selectedBarber.name}</p>
                      <p className="text-xs text-primary-foreground/80">{selectedBarber.specialty}</p>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <div className="border-t border-primary-foreground/20 pt-4">
                      <h4 className="font-semibold mb-2">Appointment Time</h4>
                      <p className="text-sm">{new Date(selectedDate).toLocaleDateString()}</p>
                      <p className="text-sm">{selectedTime}</p>
                    </div>
                  )}

                  <div className="border-t border-primary-foreground/20 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-secondary">${service.price}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    size="lg"
                  >
                    Confirm Booking
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

export default Booking;
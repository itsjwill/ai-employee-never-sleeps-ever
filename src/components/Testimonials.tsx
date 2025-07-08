
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Dental Practice Owner",
    content: "MyAI Front Desk has been a game-changer for our practice. We've seen a 40% increase in bookings since implementing it. The AI sounds so natural, our patients can't tell the difference!",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Mike Chen",
    title: "Restaurant Manager",
    content: "Finally, we never miss a reservation call! The AI handles all our bookings perfectly, even during our busiest hours. It's like having a dedicated receptionist 24/7.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    title: "Law Firm Partner",
    content: "Our clients are impressed with how professional and responsive our phone service has become. The lead capture feature has helped us grow our client base significantly.",
    rating: 5,
    avatar: "ER"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Customers Say </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real businesses say about MyAI Front Desk.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their renovation experience with Lotus Renovations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-amber-600 opacity-20" />
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                      {testimonial.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Review Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read more reviews and see what our clients are saying about us on these popular platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">G</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Reviews</h3>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.9/5)</span>
                </div>
                <p className="text-gray-600 mb-4">Read our 50+ Google reviews from satisfied customers</p>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  View Reviews <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Houzz</h3>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(5.0/5)</span>
                </div>
                <p className="text-gray-600 mb-4">Check out our portfolio and reviews on Houzz</p>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                  View Profile <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Angie's List</h3>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.8/5)</span>
                </div>
                <p className="text-gray-600 mb-4">See our ratings and reviews on Angie's List</p>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  View Reviews <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Customer Satisfaction
            </h2>
            <p className="text-xl opacity-90">
              Our numbers speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Repeat Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Referral Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the same exceptional service and results that our clients rave about. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
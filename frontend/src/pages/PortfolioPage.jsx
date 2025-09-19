import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { ArrowRight, MapPin, ZoomIn } from 'lucide-react';
import { portfolioItems } from '../data/mock';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Kitchen', 'Bath', 'Other'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our recent renovation projects and see the incredible transformations we've created for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.beforeImage} 
                        alt={`${item.title} - Before`}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="bg-gray-900 text-white">
                          Before
                        </Badge>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <img 
                            src={item.beforeImage} 
                            alt={`${item.title} - Before`}
                            className="w-full h-auto object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.afterImage} 
                        alt={`${item.title} - After`}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-green-600 text-white">
                          After
                        </Badge>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <img 
                            src={item.afterImage} 
                            alt={`${item.title} - After`}
                            className="w-full h-auto object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Scope of Work:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.scope.map((scopeItem, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {scopeItem}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let us bring the same level of craftsmanship and attention to detail to your home renovation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
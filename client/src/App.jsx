import { useState } from 'react';
import { Plane, MapPin, Search, Calendar, Users, Star, Heart, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDestinations = [
    {
      id: 1,
      title: 'Paris, France',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=paris&backgroundColor=ffd5dc,ffdfbf',
      emoji: '🗼',
      description: 'Experience the city of love and lights',
      price: '$1,299',
      rating: 4.9,
      reviews: 342
    },
    {
      id: 2,
      title: 'Tokyo, Japan',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=tokyo&backgroundColor=ffdfbf,c0aede',
      emoji: '🗾',
      description: 'Discover ancient traditions meets modern culture',
      price: '$1,899',
      rating: 4.8,
      reviews: 267
    },
    {
      id: 3,
      title: 'Bali, Indonesia',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=bali&backgroundColor=b6e3f4,c0aede',
      emoji: '🏝️',
      description: 'Tropical paradise with stunning beaches',
      price: '$899',
      rating: 4.9,
      reviews: 428
    },
    {
      id: 4,
      title: 'New York, USA',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=newyork&backgroundColor=d1d4f9,ffd5dc',
      emoji: '🗽',
      description: 'The city that never sleeps awaits',
      price: '$1,499',
      rating: 4.7,
      reviews: 512
    },
    {
      id: 5,
      title: 'Dubai, UAE',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=dubai&backgroundColor=ffdfbf,ffd5dc',
      emoji: '🏙️',
      description: 'Luxury and adventure in the desert',
      price: '$1,699',
      rating: 4.8,
      reviews: 389
    },
    {
      id: 6,
      title: 'Santorini, Greece',
      image: 'https://api.dicebear.com/7.x/icons/svg?seed=santorini&backgroundColor=b6e3f4,d1d4f9',
      emoji: '🇬🇷',
      description: 'Stunning sunsets and white-washed villages',
      price: '$1,199',
      rating: 4.9,
      reviews: 456
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia',
      excerpt: 'Discover lesser-known destinations that will take your breath away...',
      author: 'Sarah Johnson',
      date: 'Oct 20, 2025',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=asia&backgroundColor=b6e3f4',
      emoji: '🌏',
      category: 'Adventure'
    },
    {
      id: 2,
      title: 'Budget Travel Tips for Europe',
      excerpt: 'How to explore Europe without breaking the bank...',
      author: 'Mike Chen',
      date: 'Oct 18, 2025',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=europe&backgroundColor=ffd5dc',
      emoji: '💰',
      category: 'Budget Travel'
    },
    {
      id: 3,
      title: 'Best Food Markets Around the World',
      excerpt: 'A culinary journey through the world\'s most vibrant markets...',
      author: 'Emma Williams',
      date: 'Oct 15, 2025',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=food&backgroundColor=ffdfbf',
      emoji: '🍜',
      category: 'Food & Culture'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Plane size={32} className="text-blue-600" />
              <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BUSY BUSY TOURS
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Destinations</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Blog</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">About</a>
              <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-semibold">Home</a>
              <a href="#destinations" className="block text-gray-700 hover:text-blue-600 font-semibold">Destinations</a>
              <a href="#blog" className="block text-gray-700 hover:text-blue-600 font-semibold">Blog</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-semibold">About</a>
              <button className="w-full px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h2 className="text-6xl font-bold mb-6 animate-fade-in">
              Explore the World<br />With Us
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Discover amazing destinations, create unforgettable memories
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-full p-3 flex items-center gap-4 shadow-2xl">
              <div className="flex items-center gap-2 flex-1 px-4">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full outline-none text-gray-800"
                />
              </div>
              <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div id="destinations" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
          <p className="text-xl text-gray-600">Handpicked tours to amazing places around the globe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map(dest => (
            <div key={dest.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
              <div className="relative h-64 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-9xl">{dest.emoji}</span>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-red-50 transition-colors">
                  <Heart size={20} className="text-red-500" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{dest.title}</h3>
                  <span className="text-2xl font-bold text-blue-600">{dest.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold">{dest.rating}</span>
                    <span className="text-gray-500 text-sm">({dest.reviews} reviews)</span>
                  </div>
                  <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-linear-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Why Choose BUSY BUSY TOURS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">500+ Destinations</h3>
              <p className="text-lg opacity-90">Explore the world with our extensive network of tours</p>
            </div>
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Guides</h3>
              <p className="text-lg opacity-90">Professional local guides for authentic experiences</p>
            </div>
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Best Prices</h3>
              <p className="text-lg opacity-90">Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Travel Stories & Tips</h2>
          <p className="text-xl text-gray-600">Get inspired by our latest travel blog posts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
              <div className="h-48 bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-7xl">{post.emoji}</span>
              </div>
              <div className="p-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-bold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg transition-all">
            View All Posts
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane size={28} className="text-blue-400" />
                <h3 className="text-2xl font-bold">BUSY BUSY TOURS</h3>
              </div>
              <p className="text-gray-400">Your gateway to amazing adventures around the world.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@busybusytours.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, Adventure City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-3">Subscribe for exclusive deals</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BUSY BUSY TOURS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
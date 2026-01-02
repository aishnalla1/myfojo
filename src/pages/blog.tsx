import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Food Delivery with WhatsApp Integration",
    excerpt: "Discover how restaurants are cutting costs and improving customer relationships by eliminating middlemen through direct WhatsApp ordering.",
    category: "Technology",
    author: "MyFojo Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "The Ultimate Guide to Restaurant Branding in 2024",
    excerpt: "Learn how effective branding can transform your restaurant's success with our comprehensive marketing strategies and visual identity tips.",
    category: "Marketing",
    author: "Sarah Johnson",
    date: "December 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "POS Systems: Streamlining Restaurant Operations",
    excerpt: "Explore how modern point-of-sale systems are helping restaurants improve efficiency, reduce errors, and enhance customer experience.",
    category: "Technology",
    author: "Mike Chen",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Sustainable Packaging Solutions for Modern Restaurants",
    excerpt: "Discover eco-friendly packaging options that reduce environmental impact while maintaining food quality and brand aesthetics.",
    category: "Sustainability",
    author: "Emma Davis",
    date: "December 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Building High-Performance Restaurant Teams",
    excerpt: "Essential strategies for hiring, training, and retaining top talent in the competitive restaurant industry.",
    category: "Management",
    author: "David Wilson",
    date: "December 5, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Catering Success: From Small Events to Large Corporate Functions",
    excerpt: "Master the art of catering with insights on menu planning, logistics, and customer service for events of all sizes.",
    category: "Business",
    author: "Lisa Rodriguez",
    date: "December 3, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Technology", "Marketing", "Business", "Management", "Sustainability"];

const Blog = () => {
  return (
    <Layout>
      <VideoHero
        videoSrc="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
        title="MyFojo Blog"
        subtitle="Insights, Tips & Trends for Restaurant Success"
      >
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Stay updated with the latest industry insights, expert tips, and innovative solutions to grow your restaurant business.
        </p>
        <Link to="/contact">
          <Button size="lg" className="cta-button px-8 py-4 text-lg">
            Subscribe to Newsletter
          </Button>
        </Link>
      </VideoHero>

      {/* Categories Filter */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="max-w-4xl mx-auto overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="group/btn">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Subscribe to our newsletter and never miss the latest insights, tips, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="cta-button px-8 py-3 rounded-full whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ restaurant owners getting weekly insights
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-shimmer">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how MyFojo can help you implement these strategies and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="cta-button px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
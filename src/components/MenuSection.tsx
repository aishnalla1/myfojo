import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, MessageCircle } from 'lucide-react';

const MenuSection = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const menuCategories = {
    veg: {
      title: "Veg Menu",
      categories: [
        {
          name: "TRADITIONAL MENU",
          color: "bg-gray-700",
          items: [
            "Bobbattu | Ravva Kesari | Payasam",
            "Plain Rice",
            "Pulihora / Pudina Rice", 
            "Dall",
            "Veg Curry",
            "Samabar",
            "Curd",
            "Pickle",
            "Mouth Freshner"
          ]
        },
        {
          name: "Basic Menu",
          color: "bg-orange-600",
          items: [
            "Veg Snack",
            "Veg Biryani",
            "Common Masala",
            "Plain Rice",
            "Dall",
            "Samabar",
            "Veg Fry",
            "Curd",
            "Raitha"
          ]
        },
        {
          name: "STANDARD MENU",
          color: "bg-orange-700",
          items: [
            "Sweet",
            "Roti",
            "Special Masala",
            "Veg Biryani",
            "Common Masala",
            "Plain Rice",
            "Dall",
            "Samabar",
            "Veg Fry"
          ]
        },
        {
          name: "SILVER MENU {Min 100PAX}",
          color: "bg-orange-600",
          items: [
            "Welcome Drink",
            "Sweet 2 {One spl One Common}",
            "Veg Snack {Common}",
            "Veg Snack Special",
            "Roti | Poori | Pulka"
          ]
        },
        {
          name: "Gold MENU {Min 300PAX}",
          color: "bg-orange-700",
          items: [
            "Welcome Drink",
            "Sweet 2 {One spl One Common}",
            "Desserts {2 Types}",
            "Veg Snack {Common}",
            "Starters {2 Types}"
          ]
        }
      ]
    },
    nonveg: {
      title: "Non-Veg Menu",
      categories: [
        {
          name: "TRADITIONAL MENU",
          color: "bg-gray-700",
          items: [
            "Chicken Biryani",
            "Mutton Curry",
            "Fish Fry",
            "Plain Rice",
            "Dall",
            "Chicken Masala",
            "Egg Curry",
            "Pickle",
            "Mouth Freshner"
          ]
        },
        {
          name: "Basic Menu",
          color: "bg-orange-600",
          items: [
            "Chicken Snack",
            "Chicken Biryani",
            "Mutton Masala",
            "Plain Rice",
            "Dall",
            "Fish Curry",
            "Egg Fry",
            "Curd",
            "Raitha"
          ]
        },
        {
          name: "STANDARD MENU",
          color: "bg-orange-700",
          items: [
            "Sweet",
            "Roti",
            "Chicken Special",
            "Mutton Biryani",
            "Fish Masala",
            "Plain Rice",
            "Dall",
            "Chicken Fry"
          ]
        },
        {
          name: "SILVER MENU {Min 100PAX}",
          color: "bg-orange-600",
          items: [
            "Welcome Drink",
            "Chicken Starter",
            "Mutton Special",
            "Fish Fry Special",
            "Biriyani Special"
          ]
        },
        {
          name: "Gold MENU {Min 300PAX}",
          color: "bg-orange-700",
          items: [
            "Welcome Drink",
            "Chicken Starters {2 Types}",
            "Mutton Special",
            "Fish Delicacy",
            "Premium Biryani"
          ]
        }
      ]
    },
    breakfast: {
      title: "Breakfast Menu",
      categories: [
        {
          name: "TRADITIONAL MENU",
          color: "bg-gray-700",
          items: [
            "Idli Sambar",
            "Dosa with Chutney",
            "Upma",
            "Vada",
            "Filter Coffee",
            "Coconut Chutney",
            "Tomato Chutney",
            "Pickle"
          ]
        },
        {
          name: "Basic Menu",
          color: "bg-orange-600",
          items: [
            "Poha",
            "Paratha",
            "Tea/Coffee",
            "Bread Butter",
            "Jam",
            "Fruits",
            "Juice",
            "Cereals"
          ]
        },
        {
          name: "STANDARD MENU",
          color: "bg-orange-700",
          items: [
            "Continental Breakfast",
            "South Indian Special",
            "North Indian Special",
            "Fresh Fruits",
            "Juices",
            "Coffee/Tea",
            "Toast",
            "Omelette"
          ]
        },
        {
          name: "SILVER MENU {Min 100PAX}",
          color: "bg-orange-600",
          items: [
            "Welcome Drink",
            "Breakfast Buffet",
            "Live Counter",
            "Fresh Juices",
            "Premium Coffee"
          ]
        },
        {
          name: "Gold MENU {Min 300PAX}",
          color: "bg-orange-700",
          items: [
            "Welcome Drink",
            "Premium Breakfast Buffet",
            "Live Cooking Stations",
            "Fresh Juice Bar",
            "Exotic Fruits"
          ]
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Menu Categories</span>
            </h2>
          <p className="text-gray-600">Choose from our variety of menu options</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Veg Menu Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white text-center py-4">
              <h3 className="text-xl font-bold">Veg Menu</h3>
            </div>
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('/images/vegmenu.jpeg')`}}></div>
            <CardContent className="p-6 text-center">
              <Dialog open={openDialog === 'veg'} onOpenChange={(open) => setOpenDialog(open ? 'veg' : null)}>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    View Menu
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Veg Menu Options</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {menuCategories.veg.categories.map((category, index) => (
                        <div key={index} className="mb-6">
                          <div className={`text-white text-center py-3 px-4 rounded-t-lg ${category.color}`}>
                            <h4 className="font-bold text-sm">{category.name}</h4>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-b-lg border">
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-sm">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-6 pt-4 border-t">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact Us
                      </Button>
                      
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Non-Veg Menu Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-800 text-white text-center py-4">
              <h3 className="text-xl font-bold">Non-Veg Menu</h3>
            </div>
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('/images/nonvegmenu.jpeg')`}}></div>
            <CardContent className="p-6 text-center">
              <Dialog open={openDialog === 'nonveg'} onOpenChange={(open) => setOpenDialog(open ? 'nonveg' : null)}>
                <DialogTrigger asChild>
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white w-full">
                    View Menu
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Non-Veg Menu Options</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {menuCategories.nonveg.categories.map((category, index) => (
                        <div key={index} className="mb-6">
                          <div className={`text-white text-center py-3 px-4 rounded-t-lg ${category.color}`}>
                            <h4 className="font-bold text-sm">{category.name}</h4>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-b-lg border">
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-sm">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-6 pt-4 border-t">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact Us
                      </Button>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Breakfast Menu Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-orange-700 text-white text-center py-4">
              <h3 className="text-xl font-bold">Breakfast Menu</h3>
            </div>
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('/images/breakfastmenu.jpeg')`}}></div>
            <CardContent className="p-6 text-center">
              <Dialog open={openDialog === 'breakfast'} onOpenChange={(open) => setOpenDialog(open ? 'breakfast' : null)}>
                <DialogTrigger asChild>
                  <Button className="bg-orange-700 hover:bg-orange-800 text-white w-full">
                    View Menu
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Breakfast Menu Options</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {menuCategories.breakfast.categories.map((category, index) => (
                        <div key={index} className="mb-6">
                          <div className={`text-white text-center py-3 px-4 rounded-t-lg ${category.color}`}>
                            <h4 className="font-bold text-sm">{category.name}</h4>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-b-lg border">
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-sm">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-6 pt-4 border-t">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact Us
                      </Button>                     
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Leaf, Drumstick, Truck, Flame, Award } from "lucide-react";

const MenuSection = () => {
  const [openMenu, setOpenMenu] = useState<"veg" | "nonveg" | null>(null);

  // SHORT PREVIEW MENU (CARD)
  const vegPreview = [
    { name: "Yakhni", price: "₹800 / kg" },
    { name: "Dum Aloo", price: "₹800 / kg" },
    { name: "Paneer Lababdar", price: "₹900 / kg" },
    { name: "Kadhai Paneer", price: "₹900 / kg" },
    { name: "Dal Makhani", price: "₹800 / kg" },
    { name: "Kashmiri Rajma", price: "₹900 / kg" },
  ];

  const nonVegPreview = [
    { name: "Mutton Rogan Josh", price: "₹1800 / kg" },
    { name: "Mutton Yakhni", price: "₹1800 / kg" },
    { name: "Chicken Rogan Josh", price: "₹1200 / kg" },
    { name: "Chicken Biryani", price: "₹1200 / kg" },
    { name: "Goshtaba", price: "₹2400 / kg" },
    { name: "Plain Gaad (Fish)", price: "₹1600 / kg" },
  ];

  // FULL MENU (FROM YOUR PDF)
  const fullMenu = {
    veg: [
      "Yakhni - ₹800/kg",
      "Ayel Yakhni - ₹800/kg",
      "Nadur Yakhni - ₹800/kg",
      "Mushroom Yakhni - ₹1800/kg",
      "Nadru Rista - ₹2400/kg",
      "Khatte Nadru - ₹800/kg",
      "Palak Nadru - ₹800/kg",
      "Nadur Haak - ₹800/kg",
      "Dum Maunja - ₹800/kg",
      "Dum Aloo - ₹800/kg",
      "Methi Mutter - ₹900/kg",
      "Red Gobhi - ₹800/kg",
      "Aloo Mutter - ₹800/kg",
      "Red Paneer - ₹900/kg",
      "Paneer Keliya - ₹900/kg",
      "Kadhai Paneer - ₹900/kg",
      "Paneer Lababdar - ₹900/kg",
      "Shahi Paneer - ₹900/kg",
      "Paneer Yakhni - ₹900/kg",
      "Tamatar Wangun - ₹800/kg",
      "Chok Wangun - ₹800/kg",
      "Dal Makhani - ₹800/kg",
      "Dal Tadka - ₹800/kg",
      "Moong Dal - ₹800/kg",
      "Kashmiri Rajma - ₹900/kg",
    ],
    nonveg: [
      "Mutton Rogan Josh - ₹1800/kg",
      "Mutton Yakhni - ₹1800/kg",
      "Mutton Keema - ₹1800/kg",
      "Mutton Keliya - ₹1800/kg",
      "Kabargah - ₹1800/kg",
      "Goshtaba - ₹2400/kg",
      "Rista - ₹2400/kg",
      "Mutton Kebab - ₹1800/kg",
      "Meat Pulao - ₹1800/kg",
      "Chicken Yakhni - ₹1200/kg",
      "Chicken Rogan Josh - ₹1200/kg",
      "Chicken Keliya - ₹1200/kg",
      "Butter Chicken - ₹1200/kg",
      "Chicken Rara - ₹1200/kg",
      "Chicken Tikka - ₹1200/kg",
      "Chicken Kebab - ₹1200/kg",
      "Chilli Chicken - ₹1200/kg",
      "Chicken Biryani - ₹1200/kg",
      "Egg Curry - ₹1200",
      "Kadam & Gaad - ₹1400/kg",
      "Mooji & Gaad - ₹1400/kg",
      "Nadru & Gaad - ₹1400/kg",
      "Plain Gaad - ₹1600/kg",
    ],
  };

  const renderPreview = (items: any[], color: string) => (
    <ul className="space-y-2 mt-4 text-sm">
      {items.map((item, i) => (
        <li key={i} className="flex justify-between">
          <span className="flex gap-2">
            <span className={color}>✔</span> {item.name}
          </span>
          <span className="font-semibold">{item.price}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="py-20 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4">
            <span className="gradient-text">Kashmiri Menu</span>
          </h2>
          <p className="text-3xl text-gray-600 mt-2">
            Flavors of Kashmir, Crafted with Tradition
          </p>
        </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* VEG */}
          <Card className="overflow-hidden rounded-2xl shadow-lg">
<img
  src="/images/vegmenu.jpeg"
  alt="Veg Menu"
  className="w-full h-49 object-cover rounded-t-2xl"
/>         <div className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-green-600 text-white p-3 rounded-full">
                  <Leaf />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-green-700">VEG MENU</h3>

              {renderPreview(vegPreview, "text-green-600")}

              <Button
                className="mt-6 bg-green-700 w-full"
                onClick={() => setOpenMenu("veg")}
              >
                VIEW FULL MENU
              </Button>
            </div>
          </Card>

          {/* NON VEG */}
          <Card className="overflow-hidden rounded-2xl shadow-lg">
            <img
  src="/images/nonvegmenu.jpeg"
  alt="Non-Veg Menu"
  className="w-full h-49 object-cover rounded-t-2xl"
/>  
            <div className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Drumstick />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-red-700">
                NON-VEG MENU
              </h3>

              {renderPreview(nonVegPreview, "text-red-600")}

              <Button
                className="mt-6 bg-red-700 w-full"
                onClick={() => setOpenMenu("nonveg")}
              >
                VIEW FULL MENU
              </Button>
            </div>
          </Card>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <Leaf className="mx-auto text-green-600 mb-2" />
            <h4 className="font-semibold">Authentic Recipe</h4>
          </div>
          <div>
            <Award className="mx-auto text-yellow-600 mb-2" />
            <h4 className="font-semibold">Premium Ingredients</h4>
          </div>
          <div>
            <Flame className="mx-auto text-orange-600 mb-2" />
            <h4 className="font-semibold">Hygienic Preparation</h4>
          </div>
          <div>
            <Truck className="mx-auto text-red-600 mb-2" />
            <h4 className="font-semibold">Timely Delivery</h4>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-500 mt-10">
          All prices are in INR. GST extra @5%.
        </div>
      </div>

      {/* FULL MENU POPUP */}
      <Dialog open={openMenu !== null} onOpenChange={() => setOpenMenu(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {openMenu === "veg" ? "Veg Full Menu" : "Non-Veg Full Menu"}
            </DialogTitle>
          </DialogHeader>

          <div className="h-[60vh] overflow-y-auto pr-4">
            <ul className="space-y-3 text-sm">
              {(openMenu === "veg"
                ? fullMenu.veg
                : fullMenu.nonveg
              ).map((item, i) => (
                <li key={i} className="border-b pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuSection;
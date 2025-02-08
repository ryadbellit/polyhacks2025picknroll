
import { useState } from "react";
import Map from "@/components/Map";
import RestaurantCard from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { MapPin, SlidersHorizontal } from "lucide-react";

// Mock data for preview
const mockRestaurants = [
  {
    id: 1,
    name: "Health Kitchen",
    distance: "0.3 mi",
    pricePerCalorie: "$0.02",
    rating: 4.5,
    cuisine: "Healthy"
  },
  {
    id: 2,
    name: "Protein Paradise",
    distance: "0.5 mi",
    pricePerCalorie: "$0.03",
    rating: 4.2,
    cuisine: "Fitness"
  },
  {
    id: 3,
    name: "Green Bowl",
    distance: "0.7 mi",
    pricePerCalorie: "$0.025",
    rating: 4.7,
    cuisine: "Vegan"
  }
];

const Index = () => {
  const [radius, setRadius] = useState("1");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Search Bar */}
      <div className="fixed top-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm z-10">
        <div className="max-w-lg mx-auto flex gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="number" 
              placeholder="Search radius (miles)" 
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="pl-9"
            />
          </div>
          <button className="p-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-4 px-4 max-w-lg mx-auto space-y-4">
        <Map />
        
        {/* Restaurant List */}
        <div className="space-y-3">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              distance={restaurant.distance}
              pricePerCalorie={restaurant.pricePerCalorie}
              rating={restaurant.rating}
              cuisine={restaurant.cuisine}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

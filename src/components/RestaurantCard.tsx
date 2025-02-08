
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, DollarSign } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  distance: string;
  pricePerCalorie: string;
  rating: number;
  cuisine: string;
}

const RestaurantCard = ({ name, distance, pricePerCalorie, rating, cuisine }: RestaurantCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-start">
          <span>{name}</span>
          <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {distance}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Utensils className="w-4 h-4" /> {cuisine}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" /> {pricePerCalorie}/cal
          </span>
          <span className="ml-auto">⭐ {rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;

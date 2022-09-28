import { Filter } from "../../components/filter";
import { RestaurantCard } from "../../components/restaurant-card";
import { TabBar } from "../../components/tab-bar";

export const FeedPage = () => {

return (
        <div>
            <Filter/>
            <RestaurantCard />
            <TabBar/>
        </div>
    )
}
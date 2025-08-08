import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/mock/mock";

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm"
          >
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
                <div
                  className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <IconComponent className={`h-7 w-7 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
